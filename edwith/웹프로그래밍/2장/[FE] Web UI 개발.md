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
