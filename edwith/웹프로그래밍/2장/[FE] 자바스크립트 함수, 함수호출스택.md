# [FE] 자바스크립트 함수, 함수 호출 스택

## 함수

자바스크립트에서는 함수를 다음과 같은 형태로 선언하고 정의할 수 있다.

```js
function name(arg1, arg2) {
    // ...
    return returvalue;
}
```

### 함수 호이스팅

자바스크립트 파서는 변수와 함수 선언문을 먼저 처리하여 해당 변수와 함수의 스코프 맨 위로 호이스팅한다. 그래서 함수 선언문이 등장하기 전에 함수를 다음과 같이 호출하여도 에러가 발생하지 않고 정상적으로 동작한다.

```js
printName("hoisting");

function printName(name) {
    var myName = name || "default value";
    console.log(myName);
}
```

### 개수가 맞지 않은 인자 전달

자바스크립트 함수를 호출할때, 함수 선언문에 표시한 매개변수 개수보다 적은 인자를 전달하거나, 많은 인자를 전달하더라도 오류가 발생하지 않는다.

```js
function printName(name) {
    console.log(name);
}

printName();    // undefined 출력
printName("test1", "test2");    // test1 출력
```

### arguments 객체 활용

함수 내부에서는 `arguments` 가 선언되어 있으며 여기에 함수 호출시 전달한 인자들이 저장되어 있다. `arguments`는 유사 배열 객체이다. 다음과 같이 코드를 작성할 수 있다.

```js
printName("hoisting", "test2");

function printName(name) {
    console.log(arguments[0]);
    console.log(arguments[1]);
}
```

`arguments` 객체를 이용해서 함수의 인자에 접근할 수 있다고 해도 함수 매개변수로 인자를 이용하는 것이 올바르며, `arguments` 는 전달받은 인자의 개수가 올바른지와 같은 추가적인 validation 로직에 제한적으로 사용하는 것이 좋다.

```js
function printName(arg1, arg2) {
    if (arguments.length < 2) {
        throw TypeError("인자의 개수가 올바르지 않습니다.");
    }
    console.log(arg1 + " " + arg2);
}

printName("hoisting");
```

### 함수 표현식

마치 함수를 변수에 할당하는 것처럼 함수를 선언하여 사용할 수 있는데 이를 **함수 표현식(function expression)** 이라고 한다.

```js
var a = function(arg1) {
    console.log(arg1);
}

a("test");   // test 출력
```

#### 함수 표현식은 호이스팅 되지 않는다

일반적인 함수 선언문은 자바스크립트 파서에 의해 호이스팅 되어 함수 선언문이 등장하기 전에 해당 함수를 호출할 수 있다. 그러나 함수 표현식을 이용해서 함수를 작성한 경우 함수 표현식이 등장하기 전에 함수를 호출할 수 없다.

```js
a("test");   // 예외 발생

var a = function(arg1) {
    console.log(arg1);
}
```

위 코드를 실행했을때 에러메시지를 살펴보면 `a is not a function` 이라는 문구를 확인할 수 있다. 이는 a라는 변수의 선언문 자체는 호이스팅 되어 메모리에 초기화되었지만, 아직 함수 표현식에 의해 값을 할당받지 않아 undefined 상태로 존재하기 때문이다.

```js
var a;  // 호이스팅, undefined 상태
a("test");   // 예외 발생

var a = function(arg1) {
    console.log(arg1);
}
```

## 함수 호출 스택

자바스크립트 엔진은 함수가 호출되고 실행되는 순서와 구조를 정하기 위해서 **함수 콜 스택(Function call stack)** 이라는 자료구조를 관리한다. 함수 콜 스택에는 스크립트 파일의 **전역적인 실행 문맥(Global Execution Context)** 과 각 **함수들에 대한 실행 문맥(Function Execution Context)** 들을 저장한다.

```js
function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);
```

위와 같은 코드가 있을대 함수 콜 스택은 함수 호출 순서에 따라서 다음 그림과 같이 채워지고 다시 비워진다.

![JavaScript-Call-Stack](https://user-images.githubusercontent.com/31771548/98633857-a3b2b880-2365-11eb-931e-8bc8d5082411.png)

- 맨 처음 스크립트가 실행되기 시작할 때, Global Execution Context 정보가 콜스택에 쌓인다.
- `average` 함수 호출에 대한 Context 정보가 그 위에 쌓인다. 이런 함수 호출에 대한 Context가 순서대로 위에 쌓인다.
- 함수 호출이 완료되면 함수 콜스택에서 해당 함수에 대한 Context 정보가 제거된다.
- 함수 콜 스택이 비어있게 되면 자바스크립트 실행을 멈춘다.
