# 웹 개발의 이해

## Browser 동작 방식

### Brower의 구성요소

![helloworld-59361-1](https://user-images.githubusercontent.com/31771548/97978271-ad419b00-1e10-11eb-9e28-0ed76f72508c.png)

- 이미지 출처 - https://d2.naver.com/helloworld/59361

웹 브라우저는 위 그림과 같은 구성요소로 이루어져 있다.

- **사용자 인터페이스** : 사용자와 상호작용 할 수 있는 웹 브라우저의 UI 요소들
- **브라우저 엔진** : 사용자 인터페이스와 렌더링 엔진의 동작을 컨트롤하고, 브라우저가 동작하게 하는 부분
- **렌더링 엔진** : HTML, CSS 등의 문서에서 표현된 웹 화면을 구성하고 그리는 부분
- **통신** : HTTP 프로토콜을 통해 클라이언트에서 필요한 리소스를 웹서버에 요청하여 다운 받거나, 웹 서버에 사용자 입력 데이터를 송신하는 부분
- **자바스크립트 Interpreter** : 자바스크립트 명령을 해석하여 실행하는 부분
- **UI 백엔드** : 실제 OS별 명령어를 통해서 웹 브라우저의 UI를 실행하는 부분
- **자료 저장소** : 웹 브라우저 실행시 필요한 자료(쿠키, 캐시 데이터 등)를 디스크에 저장하고 관리하는 부분

### HTML 문서 파싱

웹 브라우저는 HTML 문서를 화면에 표시할 때 크게 다음과 같은 일련의 동작을 수행한다.

![helloworld-59361-2](https://user-images.githubusercontent.com/31771548/97978837-8041b800-1e11-11eb-8886-a75bae939a35.png)

- 이미지 출처 - https://d2.naver.com/helloworld/59361

웹 브라우저 제조사마다 웹 문서를 화면에 표시하는 렌더링 엔진을 다르게 구현하여, 웹 문서가 렌더링되는 과정이 약간씩 차이가 있다. (사파리 - Webkit, 모질라 - Gecko, 크롬 - 크로미움(Webkit에서 fork한 프로젝트)) 웹킷(Webkit)이 HTML 문서를 화면에 렌더링 하는 과정은 다음과 같다.

![helloworld-59361-3](https://user-images.githubusercontent.com/31771548/97978843-820b7b80-1e11-11eb-947f-3d9e7898fd1f.png)

- **DOM 트리** : DOM(Document Object Model)이란 HTML 문서안에 포함되어 있는 요소(Element)들을 자바스크립트와 같은 언어로 쉽게 접근하고, 조작할 수 있도록 method, property, node를 갖고있는 Object 들로 모델링하는 것을 의미한다. 이 Object 들은 HTML 태그의 중첩구조에 대응하여 트리(Tree) 구조를 나타낸다. 이렇게 DOM 객체들에 대한 구조를 나타낸 것을 DOM 트리라고 한다.

## Web Server와 WAS(Web Application Server)

### Web Server

서버 컴퓨터에 설치되어 웹 클라이언트의 HTTP 요청 메시지를 받아서 해당 요청 메시지가 요구하는 웹 리소스를 응답으로 전달하는 프로그램이다. Apache, Nginx와 같은 프로그램이 있다.

### WAS (Web Application Server)

정적 리소스만을 응답할 수 있었던 Web Server와는 다르게 사용자가 보내온 데이터 등에 따라서 동적으로 웹 리소스를 생성하고 클라이언트로 응답할 수 있는 서버 프로그램이다. 기존 웹 서버와 동일하게 정적 리소스 요청에 대해서 곧바로 응답해줄 수 있는 기능도 있고, 내부 프로그램을 실행하여 클라리언트의 요청에 따라 데이터를 조작하거나, 데이터베이스에서 데이터를 추출하여 동적으로 웹 리소스를 생성하여 응답해줄 수 있다. 내부 프로그램이 수행되는 부분을 **웹 컨테이너(Web Container)** 라고 부르기도 한다.

![was](https://user-images.githubusercontent.com/31771548/97980023-7d47c700-1e13-11eb-8d4c-aeffebf18ef7.jpg)

WAS가 도입된 이유와 장점은 다음과 같다.

![1_1_7_](https://user-images.githubusercontent.com/31771548/97980770-a9177c80-1e14-11eb-9fb7-e88c9dec17f6.png)

- 기존의 클라이언트 프로그램이 직접 데이터베이스 서버에 접속하고, 동작을 수행하는 방식은 클라이언트 프로그램에 많은 로직이 구현되어야 하므로 클라이언트 프로그램을 무겁게 하고, 새로운 기능이 추가될 때 마다 모두 재배포하거나 업데이트 해야하는 불편함이 있었다. 또한 클라이언트에서 직접 민감한 데이터를 저장하거나 데이터베이스에 요청해야 해서 보안 문제도 취약했다.
- WAS는 일종의 미들웨어 역할을 하면서 클라이언트에 구현되어 있던 로직을 서버 프로그램으로 이전 시켜주었다. 이로서 클라이언트는 데이터를 요청하고 응답받는 역할만을 수행하여 가벼워졌으며, WAS 가 대신 요청에 대한 핵심적인 로직을 수행하고 클라이언트에 전송한다. 프로그램 로직이 변경되는 경우 WAS 에서 실행되고 있는 프로그램만 수정하면 되며, 보안에 안전한 네트워크 상에서 민감한 데이터를 저장하고, 또 데이터베이스에 접근하기 때문에 안정성이 향상된다.

### WAS vs Web Server

![1_1_7_was](https://user-images.githubusercontent.com/31771548/97980865-c8aea500-1e14-11eb-8a28-487f1b9c1824.png)

WAS 역시 일반적인 웹서버 기능을 가지고 있으며 기존의 Web Server 성능과 비교했을때 뒤쳐지지 않는다. 그러나 실제론 여러 대의 Web Server와 WAS 를 혼합해서 사용하는데 그 이유는 다음과 같다.

- Fail over, Fail back 기능 수행 : WAS 가 에러로 인해 동작하지 않을 때 웹 서버가 이를 감지하고, 정상적으로 동작하는 WAS 에 HTTP 요청을 전달한다. 그 사이에 WAS의 에러를 복구할 수 있다.
- Load Balancing : 정적 리소스만을 요청하는 경우에는 Web Server가 앞에서 처리하여 WAS 에 가해지는 부담을 줄인다. 또한 HTTP 요청을 여러대의 WAS에 분배하는 기능을 수행할 수 도 있다.
