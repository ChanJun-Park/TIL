# [FE] WEB UI 개발

## window 객체

웹 브라우저에는 웹 개발자들이 브라우저에서 개발을 더욱 편리하게 하기 위한 객체들을 미리 정의해두었다. 그 중에는 **`window`** 객체가 있다.

### setTimeout() 메소드

window 내장 객체에 정의되어 있는 메소드이다. 특정 시간이 지나서 어떤 동작이 수행되도록 할 수 있다.

```js
setTimeout(function() {
    console.log("hello world");
}, 2000);   // 2초 뒤에 콘솔에 "hello world" 출력
```

#### 콜백 메소드

특정한 이벤트가 발생하거나 어떤 조건이 만족되었을때 자동으로 호출되도록 전달하는 코드를 의미한다. 해당 코드를 받은 쪽에서 이벤트나 특정 조건 만족시 해당 코드를 실행시킨다.

setTimeout 메소드에는 특정 시간이 지나 자동으로 호출되었으면 하는 코드를 함수 표현식을 이용해서 인자로 전달한다.

#### setTimeout 콜백이 동작하는 방식

![event_loop](https://user-images.githubusercontent.com/31771548/98677418-56077180-23a0-11eb-9d6b-adcca38a9e13.PNG)

- setTimeout 메소드에 대한 코드를 실행하는 부분은 web api에서 처리한다.
- web api는 setTimeout에서 설정한 시간이 지나면 콜백 큐에 인자로 전달받은 콜백에 대한 정보를 추가한다.
- 이벤트 루퍼는 콜백 큐에 무엇인가 있다면, 함수 콜 스택을 살피어 스택이 비어있을때 콜백 큐의 맨 앞에 있던 콜백 함수를 스택에 추가한다.
- 스택이 비어있지 않다면 콜백 함수는 콜 스택에 올라가지 않고 대기하게 된다.
- 이같은 특징은 setTimeout의 2번째 인자로 전달한 시간이 단순히 딜레이가 일어나야할 최소의 시간만을 의미할뿐이고, 실제 콜백 함수가 실행되는 시간은 지정한 시간보다 늦어질 수 있다는 것을 알려준다.
- ajax 통신이나, 이벤트 핸들러 콜백 메소드 등도 이와같은 형태로 실행된다.

다음 코드는 setTimeout 콜백이 동작하는 특징을 잘 알려준다.

```js
console.log("start");
setTimeout(function() {
    console.log("callback is called");
}, 0);
console.log("end");

// 출력
// start
// end
// callback is called
```

## DOM(Document Object Model)

HTML 문서에 포함되어 있는 컨텐츠와 엘리멘트 등 모든 요소들은 **DOM(Document Object Model)** 이라는 형태의 객체로 모델링되어 관리된다. 이들 DOM 객체들은 **document** 객체를 루트 엘리먼트로 갖는 **DOM tree** 형태로 관리된다. 이 같이 HTML과 관련된 객체들을 관리하는 이유는 Javascript 와 같은 언어로 웹 문서를 동적으로 수정할때 각각의 요소에 대해서 쉽게 접근하기 위해서이다.

![Dom_tree](https://user-images.githubusercontent.com/31771548/98779157-c6f96880-2436-11eb-8adf-bfc3c840d7e9.png)

### document 내의 엘리먼트를 찾는 메소드들

#### document.getElementById

아이디를 이용해서 element 객체 획득.

#### document.getElementsByClass

아이디를 이용해서 element들에 대한 리스트 획득. 유사 배열 객체로서 순회가능

#### document.getElementsByTagName

태그 이름을 이용해서 element들에 대한 리스트 획득. 유사 배열 객체로서 순회가능

#### document.querySelector

css 선택자를 이용해서 element를 찾는다. css 선택자가 여러 element를 가리킨다면 querySelector를 호출한 element를 기준으로 가장 먼저 등장하는 element를 반환한다.

## Browser Event, Event Object, Event Handler

사용자가 웹 브라우저나 HTML 문서 내의 요소를 클릭하거나, 마우스 스크롤을 이동하거나, HTTP 요청에 대한 응답이 도착 등등 웹 브라우저가 사용자와 상호작용하기 위해서 관리하는 모든 일들을 **이벤트(Event)** 라고 한다.

자바스크립트를 이용해서 웹 브라우저나 HTML 요소의 DOM 객체에 이벤트가 일어났을때 자동으로 특정 코드(콜백 함수)가 실행되게 할 수 있다. 자바스크립트에서는 이를 이벤트 리스너(또는 이벤트 핸들러)라고 부른다. 다음과 같은 형태로 이벤트 리스너를 등록할 수 있다.

```js
var div = document.querySelector("#test-div");
div.addEventListener("click", function(evt){
    console.log("test");
    console.log(toString.call(evt));
    console.log(evt.target);
});
```

이벤트 리스너로 등록하는 콜백 함수의 인자로 이벤트 객체가 전달된다. 이 이벤트 객체는 이벤트가 발생한 지점이나 이벤트 종류 등 이벤트에 대한 정보를 담고 있다.

## Ajax(Asynchronous Javascript And Xml) 통신

Ajax 는 웹 페이지를 로드하지 않고, HTTP 요청을 보내서 서버로부터 xml 또는 json과 같은 형태의 데이터를 주고받은 통신 기법이다. Asynchronous 한 통신이라는 것은 HTTP 요청을 보내고 응답을 기다리는 부분이 함수 콜 스택에서 처리되는 것이 아니라, Web api가 처리하게 해서 함수 콜 스택이 다른 코드를 끊임없이 실행할 수 있게 한 뒤, 응답이 들어왔을때 Web api가 이에 대한 콜백 메소드를 콜백 큐에 집어넣어 자동으로 호출하게 한다는 의미이다.

웹 브라우저에서 제공하는 Web api의 `XMLHttpRequest` 객체를 이용해서 HTTP 메시지를 서버에 보낼 수 있다.

```js
var test = new XMLHttpRequest();
test.addEventListener("load", function(response){
    console.log(response);
});
test.open("GET", "url");
test.send();
```
