# HTML, CSS 기본

HTML과 CSS 기본 이론에 대해서 학습한다.

## HTML 작성

- HTML은 화면 구성요소를 작성할때 사용하는 언어이다.
- HTML의 구성요소를 **Elmemnt** 라고 한다. 각각의 구성요소는 **tag** 를 이용해서 작성한다.
- 각 구성요소에는 어떠한 **속성(Attribute)** 가 있을 수 있다. 이러한 속성은 **`속성명="속성값"`** 형태로 나타낸다.

### Semantic Tag

- 화면 영역을 나타내는 태그에는 `<nav>`, `<aside>`, `<section>`, `<article>`, `<footer>`,`<div>` 등이 존재한다.
- 이러한 태그들의 기능은 모두 `<div>` 와 동일하다.
- 각각의 태그가 **어떤 의미(Semantic)** 로 사용되었는지를 명시함으로써 검색 엔진에서 보다 호율적으로 검색되거나, 시각장애인을 위한 스크린 리더 개발에 도움이 되는 등의 효과를 얻을 수 있다.
- `<div>` 를 제외한 나머지 태그들은 HTML5에서 추가한 태그들로 오래된 브라우저에서는 지원되지 않을 수 있다.

예제

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>안녕하세요!</h1>
    </header>
    <nav>
        <ul>
            <li>crong</li>
            <li>honux</li>
            <li>pobi</li>
        </ul>
    </nav>
    <section>
        본문 내용입니다.
        <article>
            본문의 첫번째 아티클입니다.
        </article>
    </section>
    <footer>
        <ul>
            <li>Awesome</li>
            <li></li>
        </ul>
        <ul>
            <li>Awesome</li>
            <li></li>
        </ul>
        <ul>
            <li>Awesome</li>
            <li></li>
        </ul>
    </footer>
</body>
</html>
```

## CSS (Cascading Style Sheets) 작성

CSS는 HTML로 작성한 문서의 스타일을 입히는 역할을 한다. HTML 문서에 CSS를 적용하는 3가지 방법이 있다.

- **Inline 방식** : HTML 태그 안에 직접 적용한다. HTML 태그에 `style=""` 이라는 속성을 입력하고, 속성값에 스타일 값을 입력한다.
  - 장점 : 하나의 요소에만 빠르게 스타일을 적용할 수 있다. 실제 스타일링이 아니라 빠르게 CSS를 테스트 해보는 상황에서 많이 사용한다.
  - 단점 : 모든 스타일을 Inline 방식으로 적용하면 많은 코드가 필요하고 유지보수가 어렵다.
- **Internal 방식** : `<head>` 태그 내에서 `<style>` 태그를 작성하는 방법
  - 장점 : 한 문서에 대한 스타일링 코드를 HTML 문서에 붙여서 클라이언트에서  따로 CSS 파일을 요청하는 시간을 줄일 수 있다.
  - 단점 : 여러 문서에 대한 스타일링을 하기 어렵고, HTML 문서 자체가 커져서 HTML 문서를 다운로드 하는 시간이 오래걸릴 수 있다.
- **External 방식** : 따로 **.css** 파일을 작성하고, `<head>` 태그 내에 `<link rel="stylesheet" href="파일 위치">` 를 작성하여 import 하는 방식
  - 장점 : 여러 HTML 문서를 동시에 스타일링 할 수 있다.
  - 단점 : 따로 **.css** 파일을 관리해야한다.

여러가지 방법으로 CSS가 작성되었을때 적용되는 순서는 가장 마지막에 작성된 CSS가 적용된다. 즉, inline 방식으로 작성된 CSS가 가장 우선적으로 적용되고, External, Internal 방식은 외부 css 파일 import 문과, style 태그 작성 순서에 따라 늦게 작성된 쪽이 적용된다.

### CSS 문법

```css
selector {
    property : value;
}
```

- **selector** : 어느 HTML 요소에 스타일을 지정할 것인지를 나타냄
- **property** : 적용시킬 스타일 이름
- **value** : property 스타일의 인자

### 선택자 (Selector)

- **태그 선택자** : 태그 이름을 이용해서 스타일 지정

```css
p {
    property : value;
}
```

- **클래스 선택자** : 클래스 이름을 이용해서 스타일 지정. 동일 스타일을 가지고 있는 모든 요소에 공통적인 스타일을 입힐 수 있다.

```css
.className {
    property : value;
}
```

태그와 클래스 이름을 조합해서 사용할 수도 있다.

```css
/* p 태그 중 className이라는 클래스를 가지고 있는 것들 */
p.className {
    property : value;
}
```

- **아이디 선택자** : 아이디 이름을 이용해서 스타일 지정. 아이디를 설정하는 이유는 해당 요소를 쉽게 찾도록 하기 위해서.

```css
#idName {
    property : value;
}
```

태그와 아이디를 조합해서 사용할 수 있다.

```css
p#idName {
    property : value;
}
```

- **그룹 선택자** : 여러 선택자를 쉼표로 구분하여 그룹을 지어서 동일한 스타일을 지정할 수 있다.

```css
selector1, .selector2, #selector3 {
    property : value;
}
```

- **하위 요소 선택자** : 공백을 이용해서 어떤 선택자 요소의 후손에 해당하는 요소를 선택한다.

```css
/* div 태그 하위에 있는 모든 p 태그 */
div p { 
    property : value;
}
```

- **자식 요소 선택자** : > 기호를 이용해서 자식 요소를 선택한다.

```css
/* div의 자식 중에서 모든 p 태그 */
div > p {
    property : value;
}
```

- **n번째 요소 선택자**
  - nth-child : 자식 요소 중 타입에 상관없이 n번째 자식
  - nth-of-type : 자식 요소 중 

```css
div > li:nth-child(2) {
    property : value;
}

div > li:nth-of-type(2) {
    property : value;
}
```

예제

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div li:nth-child(2) {
            color:green;
        }
        div li:nth-of-type(2) {
            color:red;
        }
    </style>
</head>
<body>
    <div>
        <p>test</p>
        <li>1번째 자식</li>
        <li>2번째 자식</li>
        <li>3번째 자식</li>
    </div>
</body>
</html>
```

실행결과

![nthchild](https://user-images.githubusercontent.com/31771548/98236146-39d19200-1fa6-11eb-8627-e856e6e84db2.PNG)

### CSS 상속

CSS 속성은 HTML 요소들의 트리 구조에서 하위 요소로 상속될 수 있다. 그러나 html의 box속성이나 레이아웃과 관련된 속상은 하위 요소로 상속되지 않는다.

예제

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            color: red; /* 하위 요소로 상속됨 */
            border : 1px solid black; /* 하위 요소로 상속되지 않음 */
        }
    </style>
</head>
<body>
    <div>
        div dummy text
        <ul>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
        </ul>
    </div>
</body>
</html>
```

실행결과

![inheritance](https://user-images.githubusercontent.com/31771548/98236698-1f4be880-1fa7-11eb-8e8d-3678c83ac4c5.PNG)

### CSS Specificity

어떤 HTML 요소에 동일한 CSS 속성을 다른 여러 선택자를 통해서 중복해서 작성했다면 어떤 **property value** 가 적용될까? 이를 결정하는 것이 **Specificity** 다. 일반적으로 css 속성이 적용될 요소를 선택하는 선택자가 가장 구체적으로 명시된 CSS 문장의 스타일이 적용되도록 한다. Specificity 다음과 같은 기준으로 요소에 적용될 **property value** 를 결정한다.

- id 선택자가 가장 높은 우선순위를 갖는다. 만약 id 선택자를 이용한 css 문장이 여러 개면, (1) 다른 더 많은 id 선택자가 적용된 것 (2) 다른 더 많은 class 선택자가 적용된것 (3) 다른 더 많은 태그 선택자가 적용된 것을 택한다.
- id 선택자로 지정된 문장이 없으면 class 선택자가 그 다음 우선순위를 갖는다. 만약 class 선택자를 이용한 css 문장이 여러 개면 (1) 다른 더 많은 class 선택자가 적용된것 (2) 다른 더 많은 태그 선택자가 적용된 것을 택한다.
- id 선택자, class 선택자로 지정된 문장이 없다면 태그 선택자가 그 다음 우선순위를 갖는다. 태그 선택자를 이용한 css 문장이 여러 개면 (1) 다른 더 많은 태그 선택자가 적용된 것을 택한다.

> id는 금메달, class는 은메달, tag 이름은 동메달로 정하고 올림픽 국가 순위를 생각하면 된다.

예제1

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        li {
            background-color: aqua;
        }

        #dummy1 {
            background-color: red;
        }

        div > nav > ul > #dummy1 {
            background-color: green;
        }

        div > nav > ul > #dummy1, div > nav > ul > #dummy1 {
            background-color: yellow;
        }
    </style>
</head>
<body>
    <div>
        <nav>
            <ul>
                <li id="dummy1">test1</li>
            </ul>
        </nav>
    </div>
</body>
</html>
```

실행결과

![specificity](https://user-images.githubusercontent.com/31771548/98238450-ba45c200-1fa9-11eb-9298-9dab22f0bdce.PNG)

예제 2

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #dummy-div > #dummy-nav > #dummy-list > li {
            background-color: red;
        }

        .dummy-div-class > .dummy-nav-class > .dummy-list-class > li#dummy1 {
            background-color: blue;
        }
    </style>
</head>
<body>
    <div id="dummy-div" class="dummy-div-class">
        <nav id="dummy-nav" class="dummy-nav-class">
            <ul id="dummy-list" class="dummy-list-class">
                <li id="dummy1">test1</li>
            </ul>
        </nav>
    </div>
</body>
</html>
```

실행 결과

![specificity2](https://user-images.githubusercontent.com/31771548/98310832-4e973f80-2011-11eb-8d05-12e0199a2c12.PNG)

### 요소 배치와 관련된 CSS : display 속성

- **`display`** : HTML 요소가 화면에 배치되는 방식을 지정한다.
  - **block** : HTML 요소가 한 줄을 모두 차지한다. 맨 처음 세로 크기는 내부 컨텐츠 크기와 동일하다. 세로 방향으로 요소들이 배치된다.
  - **inline** : HTML 요소가 내부 컨텐츠 크기만큼 가로 방향을 차지한다. 가로 방향으로 요소들이 배치된다. 가로, 세로 크기 지정이 불가능하다.
  - **inline-block** : inline과 유사하나 가로, 세로 크기 지정이 가능하다.

기본적으로 block인 요소와 inline인 요소들이 있다.

- block 요소 : div, p, header, nav, ul, ol, li, footer, section, article...
- inline 요소: a, span ...

요소의 기본 display 속성을 css 로 바꿔줄 수 도 있다.

**block 속성**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            background-color: red;
        }

        div#width {
            background-color: green;
            width: 100px;
        }

        #width-height {
            background-color: blue;
            width: 100px;
            height: 100px;
        }
    </style>
</head>
<body>
    <div>block element1</div>
    <div id="width">block element2</div>
    <div id="width-height">block element3</div>
</body>
</html>
```

실행 결과

![block1](https://user-images.githubusercontent.com/31771548/98239643-9b482f80-1fab-11eb-8da1-5b6a70ebfd80.PNG)

**inline, inline-block 속성에서 요소 중간 빈 공간 제거하기**

inline이나 inline-block 속성을 지닌 요소들을 배치하다보면 요소 중간에 빈공간이 생기는 경우가 있다. `margin` 속성을 부여하지도 않아서 이 빈공간이 왜 생기는 건지 의아했는데 알고보니, 공백이나 개행 문자가 보여지는 현상이다. 이 문자들을 제거하면 빈공간이 생기는것을 막을 수 있다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .span-wrap > span {
            display: inline-block;
            width: 100px;
            height: 100px;
            background-color: red;
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <div class="span-wrap">
        <span>test1</span><!-- 여기에 개행 문자 존재 -->
        <span>test2</span><!-- 여기에 개행 문자 존재 -->
        <span>test3</span><!-- 여기에 개행 문자 존재 -->
    </div>
    <div class="span-wrap">
        <span>test1</span><span>test2</span><span>test3</span>
    </div>
</body>
</html>
```

![inline](https://user-images.githubusercontent.com/31771548/98313838-10e9e500-2018-11eb-8135-a7cc8a762e6e.PNG)

### 요소 배치와 관련된 CSS : position 속성

position 속성은 요소의 위치를 결정한다. 다음과 같은 속성들이 있다.

- static : 기본 속성. 요소가 원래 있어야 할 위치에 존재한다. 
- absolute : static이 아닌 position 속성이 지정된 상위 요소를 기준으로 어떤 위치에 있어야 하는지를 계산한다.
- relative : 요소가 원래 있어야 할 위치에서 얼마만큼 떨어져 있는지를 계산한다.
- fixed : 브라우저 화면을 기준으로 어느 위치에 있어야 하는지를 계산한다.

예제

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #wrapper {
            position: relative;
        }

        #wrapper > div {
            width: 100px;
            height: 100px;
        }

        .static {
            position: static;
            background-color: red;
        }

        .absolute {
            position: absolute;
            background-color: blue;
            top: 50px;
            left: 100px;
        }

        .relative {
            position: relative;
            top: 10px;
            left: 50px;
            background-color: green;
        }

        .fixed {
            position: fixed;
            top: 0px;
            left : 200px;
            background-color: yellow;
        }
    </style>
</head>
<body>
    <div id="wrapper">
        <div class="static"></div>
        <div class="absolute"></div>
        <div class="relative"></div>
        <div class="fixed"></div>
    </div>
</body>
</html>
```

실행결과

![position](https://user-images.githubusercontent.com/31771548/98314583-9de16e00-2019-11eb-8724-8bc497457330.PNG)

### 요소 배치와 관련된 CSS : float, overflow, clear

- **float** : 요소가 원래 배치될 수 있는 영역에서 위쪽으로 떠올라 자리를 차지않고 배치된다.

float 속성은 이미지가 글자 사이에 침투하여 보여지게 할 수 있다.

예제 - `img` 태그에 `float` 속성이 없는 경우

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <img src="https://user-images.githubusercontent.com/31771548/98314583-9de16e00-2019-11eb-8724-8bc497457330.PNG" alt="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est cum dicta iusto, quam magni deserunt. Molestias eligendi ducimus, ab iste numquam deleniti! Eveniet minus, vero vitae aspernatur consequuntur error?
    </div>
</body>
</html>
```

실행결과

![float1](https://user-images.githubusercontent.com/31771548/98315907-b8691680-201c-11eb-97e3-8fc65b866fb5.PNG)

**img** 태그가 inline인 태그이기 때문에 함께 있는 컨텐츠 문장이 한 줄만 옆으로 추가된다.

예제 - `img` 태그에 `float` 속성이 있는 경우

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            border: 1px solid black;
        }

        div > img {
            float: left;
        }
    </style>
</head>
<body>
    <div>
        <img src="https://user-images.githubusercontent.com/31771548/98314583-9de16e00-2019-11eb-8724-8bc497457330.PNG" alt="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est cum dicta iusto, quam magni deserunt. Molestias eligendi ducimus, ab iste numquam deleniti! Eveniet minus, vero vitae aspernatur consequuntur error?
    </div>
</body>
</html>
```

실행결과

![float2](https://user-images.githubusercontent.com/31771548/98316271-6eccfb80-201d-11eb-8af9-4d33db8dddd0.PNG)

img 태그가 위로 붕붕 뜨는것처럼 배치된다. 붕떠서 `float` 속성값에 지정한 방향(left)으로 이동한다. img 태그 뒤에 오는 요소들은 img 태그가 없는 것처럼 나머지 영역을 차지하려고 한다. 또한 부모 컨테이너는 float 속성이 적용된 자식 요소를 인지하지 못해서 박스 영역을 글자까지만 포함하고 있다.

예제 - `float` 속성이 적용된 요소를 감싸는 부모 요소에 `overflow:auto` 속성을 적용한 경우

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            border: 1px solid black;
            overflow: auto;
        }

        div > img {
            float: left;
            display: inline;
        }
    </style>
</head>
<body>
    <div>
        <img src="https://user-images.githubusercontent.com/31771548/98314583-9de16e00-2019-11eb-8724-8bc497457330.PNG" alt="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est cum dicta iusto, quam magni deserunt. Molestias eligendi ducimus, ab iste numquam deleniti! Eveniet minus, vero vitae aspernatur consequuntur error?
    </div>
</body>
</html>
```

실행결과

![float3](https://user-images.githubusercontent.com/31771548/98316464-c79c9400-201d-11eb-987e-4d79de03c092.PNG)

부모 컨테이너에 overflow 속성을 추가하여 float 속성이 지정된 자식 요소를 인식하게 한다.

**float** 속성을 이용해서 HTML 레이아웃 배치를 하기도 한다. 아래 그림과 같이 기본적인 HTML 레이아웃 배치를 float 속성을 이용해서 배치할 수 있다.

![Basic-layout-HTML-CSS-tutorial](https://user-images.githubusercontent.com/31771548/98316633-1ea26900-201e-11eb-854f-c75032f816df.jpg)

1. 기본 구조 작성

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        header {
            background-color: #aaa;
        }

        aside {
            background-color: #ccc;
        }

        section {
            background-color: #ccc;
        }

        footer {
            background-color: #aaa;
        }
    </style>
</head>
<body>
    <header>
        <h1>Header</h1>
    </header>
    <div id="wrapper">
        <aside>
            <nav>
                <ul>
                    <li>menu1</li>
                    <li>menu2</li>
                    <li>menu3</li>
                </ul>
            </nav>
        </aside>
        <section>
            Contents
        </section>
    </div>
    <footer>
        footer
    </footer>
</body>
</html>
```

2. aside와 section에 float 속성 부여, width 값 설정

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            box-sizing: border-box;
        }

        header {
            background-color: #aaa;
            border: 1px solid black;
        }

        aside {
            background-color: #ccc;
            border: 1px solid black;
            float: left;
            width: 20%;
        }

        section {
            background-color: #ccc;
            border: 1px solid black;
            float: left;
            width: 80%;
        }

        footer {
            background-color: #aaa;
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <header>
        <h1>Header</h1>
    </header>
    <div id="wrapper">
        <aside>
            <nav>
                <ul>
                    <li>menu1</li>
                    <li>menu2</li>
                    <li>menu3</li>
                </ul>
            </nav>
        </aside>
        <section>
            Contents
        </section>
    </div>
    <footer>
        footer
    </footer>
</body>
</html>
```

![layout2](https://user-images.githubusercontent.com/31771548/98317316-9ae97c00-201f-11eb-941f-f0e1b97ebac5.PNG)

3. footer에 clear 속성을 부여하여 위쪽에 있는 float 속성이 부여된 요소들을 인식하게 한다.

![layout3](https://user-images.githubusercontent.com/31771548/98317319-9c1aa900-201f-11eb-9995-861111b01861.PNG)
