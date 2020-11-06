# HTTP (HyperText Transfer Protocol)

**Warning Notice:** 이 글은 **COMPUTER NETWORKING A TOP DOWN APPROACH - James F. Kurose, Keith W. Ross(Pearson)** 도서를 읽고 개인적인 학습을 위해서 정리한 내용입니다. 틀린 내용이 있을 수 있습니다. All material copyright 1996-2012  J.F Kurose and K.W. Ross, All Rights Reserved
{: .notice--warning}

HTTP는 웹 애플리케이션에서 클라이언트와 서버가 서로 데이터를 주고받는데 사용하는 애플리케이션 계층 프로토콜이다. HTTP는 클라이언트와 서버가 어떤 순서로 메시지를 주고 받을지, 메시지는 어떤 형태로 되어 있어야 하는지를 명시한다.

## HTTP 프로토콜의 특징

- **TCP 전송 프로토콜 사용** : 신뢰적 데이터 전송이 가능한 TCP 프로토콜을 전송 프로토콜로 사용함으로서 클라리언트와 서버의 메시지가 반드시 상대방으로 전송될 것을 보장한다.
- **Stateless Connection** : 서버가 클라이언트의 이전 연결에 대한 정보를 저장하지 않는다. 클라이언트가 요청한 객체를 모두 전송하고 난 후에 서버는 곧바로 클라이언트와의 연결을 해제한다. 클라이언트가 이후에 동일한 객체를 서버에 요청한다 하더라도 서버는 이전에 클라이언트에 동일한 객체를 전송했다는 사실을 모르기 때문에 단순히 해당 객체를 재전송한다.
  - **장점** : 서버가 불특정 다수의 클라이언트에게 안정적으로 서비스를 제공할 수 있다. 클라이언트와 서버와의 연결(Connection)은 메모리와 같은 자원을 필요로한다. 만약 서버가 클라이언트와의 연결을 계속 유지한다면 많은 수의 클라이언트가 서버로 요청을 한 경우 서버의 자원이 고갈될 수 있다. 클라이언트가 요청한 객체를 전송하고 곧바로 연결을 해제함으로서 서버의 자원이 고갈되는 문제를 피할 수 있다.
  - **단점** : 이전에 서버에 연결요청한 클라이언트의 정보를 관리하기 위해서 추가적인 과정이 필요하다.

## 요청(Request)과 응답(Response)

HTTP는 클라이언트가 서버로 **요청(Request)** 를 보내고, 서버가 클라이언트의 요청에 대한 **응답(Response)** 를 보내는 형태로 통신하도록 한다. 클라이언트가 요청하는 것은 인터넷 상에서 존재하는 객체다. 이 객체는 HTML 문서, 이미지, 오디오 파일 등 모든 형태의 파일이 될 수 있다. 클라이언트의 요청에 따라 서버는 해당 객체를 PC에서 추출하여 클라이언트로 전송한다.

### 요청 메시지 포맷

![httpRequest](https://user-images.githubusercontent.com/31771548/97771580-638f5100-1b81-11eb-8728-a07fbed2f651.png)

클라이언트가 서버로 보내는 HTTP 요청메시지는 위 사진처럼 요청 라인, 헤더 라인, 바디 부분으로 구성된다. 맨 첫번째 줄은 **요청 라인(Reqeust line)** 으로 **메소드 필드**, **URL 필드**, **버전 필드**로 구성되어 있다.

- **메소드 필드(Method Field)** : HTTP 요청 방식의 형태를 나타낸다.
  - **GET** : 객체를 단순히 조회한다.
  - **HEAD** : 헤더 정보만 요청한다. 해당 자원이 존재하는지 혹은 서버에 문제가 없는지를 확인하기 위해서 사용한다.
  - **POST** : 서버에 새로운 객체를 생성할 수 있다.
  - **PUT** : 서버에 데이터를 업데이트 한다.
  - **DELETE** : 서버에 저장되어 있는 객체를 삭제한다.
- **URL 필드** : 클라이언트가 요구하는 객체에 대한 URL(Uniform Resource Locator) 정보가 담겨있다.
- **버전 필드** : 사용하고자 하는 HTTP 프로토콜의 버전을 명시한다.

두번째 줄부터 공백라인 전까지는 헤더 라인으로 HTTP 요청에 대한 메타정보를 명시한다. 예를 들어 요청을 보내는 클라이언트의 브라우저 정보(User Agent)나, 어떤 언어로 작성된 객체를 받기를 원하는지(Accept-Language) 등을 명시할 수 있다.

공백 라인 이후 라인은 클라이언트가 요청과 함께 데이터를 전송해야하는 경우 사용된다. 보통 HTML의 form 태그에 있는 정보들이 이곳에 명시되어 전송될 수 있다. 이 부분을 **request body** 라고 한다. 공백라인은 헤더와 바디를 구분하는 역할을 한다.

### 응답 메시지 포맷

![httpResponse](https://user-images.githubusercontent.com/31771548/97771765-a18d7480-1b83-11eb-8838-abe2a1feabca.png)

서버로부터 클라이언트로 전송하는 HTTP 응답 메시지는 상태 라인, 헤더라인, 바디부분으로 구성된다.

맨 첫번째 줄은 **상태라인(Status Line)** 으로 클라이언트의 요청에 대한 응답의 상태를 명시한다. 상태라인은 버전필드, 상태 코드 필드, 상태 메시지 필드로 구성된다.

- 버전 필드 : 사용한 HTTP 프로토콜의 버전을 명시한다.
- 상태 코드 : 클라이언트의 요청에 대해서 서버가 처리한 결과를 숫자 형태의 코드로 나타낸다. 아래는 대표적인 응답 코드와 그에 대응하는 의미를 나타낸 것이다.
  - **200** : 요청한 객체를 성공적으로 찾아서 전송함
  - **301** : 요청 객체가 다른 위치로 이동함. 해당 객체의 새로운 URL 정보는 응답 메시지의 **Location:** 헤더 정보에 명시되어 있다.
  - **404** : 요청한 객체가 서버에 존재하지 않음
  - **400** : 클라이언트의 요청을 서버가 이해할 수 없음
  - **505** : 요청 HTTP 프로토콜 버전을 서버가 지원하지 않음
- 상태 메시지 : 상태 코드와 함께 클라이언트의 요청에 대해서 서버가 처리한 결과를 메시지 형태로 나타낸다.

상태 라인 이후 응답 메시지에 대한 헤더 라인들이 명시되어 있다. 이후 공백 라인 이후에 바디부분에서 클라이언트가 요청한 객체에 대한 데이터가 담겨져서 전송된다.

## Persistant Connection, Non Persistant Connection

일반적으로 클라이언트가 서버에 요청하는 HTML 문서 객체는 아래 코드 처럼 이미지나 오디오와 같은 다른 여러개의 객체들로 구성되어 있는 경우가 많다.

```html
<html>
<head>
</head>
<body>
    <img src="..." />
    <img src="..." />
    <img src="..." />
    ...
</body>
</html>
```

클라이언트가 서버로 객체에 대한 요청을 하고 응답받기까지의 과정을 살펴보면 다음과 같다.

![NonPersistant](https://user-images.githubusercontent.com/31771548/97772410-1cf22480-1b8a-11eb-84cb-6dad8d12a50a.PNG)

먼저 클라이언트는 TCP 연결 요청을 서버로 보낸다. 서버는 연결 요청 수락 메시지를 보내고, 클라이언트로 다시 연결 요청을 보낸다. 클라이언트는 연결 요청을 수락함과 동시에 HTTP 요청 메시지를 서버에 전송한다. 서버는 요청 메시지에 명시된 객체를 서버에서 추출하여 응답 메시지로 전송한다.

연결 요청처럼 작은 패킷이 클라이언트에서 서버로, 서버에서 다시 클라이언트로 돌아오기까지 걸린 시간을 **RTT(Round Trip Time)** 이라고 한다.

하나의 요청 객체를 전송받기까지는 TCP 연결 요청에 1RTT, HTTP 요청과 응답에 1RTT, 요청 객체를 전송하는데 걸린 시간을 모두 합친 `2RTT + FILE Transmission Time` 이 걸린다.

### Non Persistant Connection

초기 HTTP/1.0의 경우 하나의 TCP 연결에 대해서 1개의 객체만을 송수신하도록 했다. 즉, 클라이언트가 어떤 객체를 요청했을때, 서버는 그 객체를 전송한 뒤 즉각적으로 TCP Connection을 해제했다. 이를 `Non Persistant Connection` 이라고 한다. 그러나 위에서 언급했듯이 보통 HTML 문서 객체는 이미지나 오디오와 같은 다른 여러개의 객체들로 구성되어 있는 경우가 많고, HTML 문서에 포함된 모든 객체들에 대해서 각각의 HTTP request를 전송해야 하기 때문에 `Non Persistant Connection` 방식으로 처리한다면 많은 시간이 소모된다.

![NonPersistant2](https://user-images.githubusercontent.com/31771548/97772570-d0a7e400-1b8b-11eb-920f-509f1c030a0d.PNG)
![NonPersistant3](https://user-images.githubusercontent.com/31771548/97772574-d43b6b00-1b8b-11eb-9b59-82441047c76a.PNG)

위 예시처럼 10개의 이미지 객체를 참조하는 HTML 문서에 대한 요청이 일어났을때, 각각의 객체를 송수신하기 위한 시간 **(2RTT + File Transmission Time)** 이 총 11번 필요하게 된다.

### Persistant Connection

Non Persistant Connection 에서의 문제를 해결하기 위해서 HTTP 1.1 버전에서 **Persistant Connection** 이 도입되었다. **Persistant Connection** 에서는 클라이언트와 서버가 TCP Connection이 생성되고, 서버가 클라이언트의 요청을 처리한 뒤에도 바로 TCP Connection을 해제하지 않고, 이후에 추가적으로 들어올 수 있는 HTTP 요청을 기다리게 된다. 이같은 동작은 Non Persistant Connection 에서 각각의 객체에 대해 TCP Connection을 생성했던 RTT 만큼의 시간을 줄여 효율성을 높였다.

HTTP/1.1 버전에서는 디폴트로 Persistant Connection을 적용하며, 요청 헤더에 `Connection:` 이라는 필드를 이용하여 **Non Persistant Connection** 을 사용하도록 할수도 있다.

### HTTP Pipelining

![HTTP1_x_Connections](https://user-images.githubusercontent.com/31771548/97777957-0910e780-1bb7-11eb-8c8c-d79ecc23c86d.png)

Persistant Connection 에서 더 나아가 HTTP/1.1 에서는 Request들에 대한 **Pipelining** 을 적용하여 지연시간을 줄였다. 여러 개의 HTTP 요청을 순차적으로 한번에 보낸 뒤, 다시 해당 요청들에 대해서 응답도 한번에 순차적으로 전달받는 방식이다.

## Cookies

HTTP는 stateless 하여 연결 정보(상태 정보)를 저장하지 않는다고 하였다. 그러나 웹에서는 사용자의 상태 정보를 저장해두는 방법이 있는데 그것이 바로 **Cookies** 이다. Cookies는 다음 4가지 요소로 이루어져 있다.

- HTTP response header 라인에 존재하는 쿠키정보
- HTTP request header 라인에 존재하는 쿠키정보
- 사용자 호스트에서 웹브라우저에 의해 관리되는 쿠키파일
- 웹 사이트의 벡엔드에서 관리되는 데이터베이스

![7](https://user-images.githubusercontent.com/31771548/90328243-da329e80-dfd5-11ea-876e-0a5c8ad9caa5.png)

쿠키를 통해 클라이언트의 상태 정보를 저장해두면 다음과 같이 활용할 수 있다.

- 사용자에 따라서 광고 타겟팅을 할 수 있다.
- 인증이나 세션정보를 저장할 수 있다.
- 장바구니와 같은 상태정보를 저장하는 기능을 구현할 수 있다.

그러나 사용자 정보가 유출될 수 있다는 위험성이 있다.

## Web caches(proxy server)

![8](https://user-images.githubusercontent.com/31771548/90328244-da329e80-dfd5-11ea-91cd-52667e0e210e.png)

클라이언트와 서버 사이에 캐시 형태의 서버를 하나 추가할 수 있다. 이를 **proxy server** 라고 한다. 주된 목적은 origin server의 개입 없이도 HTTP 통신을 할 수 있게하고 인터넷 속도를 향상시키기 위함이다. 요청하는 객체가 proxy server에 있다면 proxy 서버가 클라이언트에게 해당 객체를 전송하고, 없다면 orgin server에게 해당 객체를 받은 다음 클라이언트에 전달한다. 인터넷 속도 향상, ip 우회, 특정 시설의 access link에서의 트래픽 감소 등의 목적으로 사용될 수 있다.

> proxy는 영어로 대리인, 위임자라는 뜻을 가지고 있다.

Web caching에 대해서 다음과 같은 예시를 보자

![9](https://user-images.githubusercontent.com/31771548/90328245-dacb3500-dfd5-11ea-8d9e-aa9684e96ced.png)

시설 내부의 Lan 속도는 1Gbps에 달하는데, access link의 속도는 1.54 Mbps 밖에 안되는 안습의 상황이다. 위 그림에서 설명한 대로 access link에서의 지연시간 때문에 응답 시간이 매우 길어졌다. 이를 해결하기 위해 다음과 같이 access link를 교체하는 방법이 있다.

![10](https://user-images.githubusercontent.com/31771548/90328246-db63cb80-dfd5-11ea-9ff4-750d1005837c.png)

access link에 대한 성능이 100배 향상되었고, 그에 따라서 access link에서의 지연시간도 무시할 수 있는 정도로 떨어졌다. 이제 전체 지연시간은 인터넷 지연시간인 2초 정도로 떨어진다. 그러나 기관의 access link는 가격이 매우 비싸서 이와 같은 해결책은 엄청난 비용이 들어간다. 만약 기관의 호스트들이 모두 비슷한 컨텐츠를 이용한다면 기관내에 웹 캐시를 두어 성능을 향상시키는 방법이 있다.

![11](https://user-images.githubusercontent.com/31771548/90328248-db63cb80-dfd5-11ea-9d39-78c07086dee9.png)

웹 캐시에 대한 적중률이 0.4 정도 된다고 가정해보자. 그럼 전체 트래픽의 0.6 정도만이 access link를 사용하게 된다. 이와 같은 access link에서의 트래픽 강도는 access link의 지연시간을 무시할 수 있을 만큼 떨어뜨린다. 외부 서버로 향하는 통신의 지연시간과 내부 캐시로의 통신 지연시간을 고려하여 전체 지연시간을 계산해보면 대략 1.2초가 된다. 이는 고가의 access link를 설치하는 것보다 저렴하면서, 성능은 보다 개선시킨다.

그러나 장기적인 플랜을 가지고 성능을 개선한다면 위의 예시보다 많은 것들을 고려하여 개선책을 선택해야한다.

### 조건부 GET (Conditional GET)

웹 캐시 서버에 대해서 하나의 이슈가 있을 수 있다. 캐시 서버에 어떤 객체가 저장된 이후 원본 서버(Origin Server) 에서 해당 객체가 변경되어 2개의 서버에 저장된 객체가 일치하지 않을 수 있다는 것이다.

이같은 문제를 해결하기 위해서 조건부 GET 이라는 기술이 도입되었다. 이해를 돕기위해 예시를 들어보자.

(1) 클라이언트에서 다음과 같은 HTTP 요청 메시지를 Proxy Server에 전달한다.

```txt
GET /fruit/cherry.png HTTP/1.1
Host: www.exotiquecuisine.com

```

(2) Proxy Server는 해당 객체를 자신이 보유하고 있는지 확인한다. 그렇지 않다면 Origin Server에 자신이 받았던 HTTP 요청 전송해서 객체를 받아온다. Origin Server로부터의 응답 메시지는 다음과 같다.

```txt
HTTP/1.1 200 OK
Date: Sat, 8 Oct 2011 15:39:29
Server: Apache/1.3.0 (Unix)
Last-Modified: Wed, 7 Sep 2011 09:23:24
Content-Type: image/gif
```

Origin Server 응답 메시지에 `Last-Modified:` 라는 헤더 정보가 붙어있다. 이는 해당 객체가 Origin Server에서 언제 마지막으로 수정되었는지를 나타낸다. Proxy Server는 해당 정보를 응답받은 객체와 함께 저장한다. 그리고 클라언트로 다시 해당 객체를 응답해준다.

(3) 이후에 클라이언트로부터 해당 객체를 다시 요청받은 경우, Proxy Server는 해당 객체를 클라이언트에게 바로 응답하지 않고 Orgin Server로 다음과 같은 요청을 보낸다.

```txt
GET /fruit/cherry.png HTTP/1.1
Host: www.exotiquecuisine.com
If-modified-since: Wed, 7 Sep 2011 09:23:24
```

`If-modified-since:` 라는 필드에 설정했던 날짜값이 (2)에서 설정했던 `Last-Modified:` 값과 동일한 것을 알 수 있다. 이는 Origin Server에게 `If-modified-since:` 에 설정된 날짜 이후에 해당 객체가 수정되었는지 알려달라는 뜻이다. 이같은 `GET` 요청을 **조건부 GET 요청(Conditional GET)** 이라고 한다.

(4) 만약 Origin Server에 해당 객체가 수정된 적이 없다면 다음과 같은 응답 메시지가 Proxy Server로 전송되고, Proxy Server는 자신이 가지고 있던 객체를 클라이언트로 응답한다.

```txt
HTTP/1.1 304 Not Modified
Date: Sat, 15 Oct 2011 15:39:29
Server: Apache/1.3.0 (Unix)

(빈 개체 몸체)
```

## HTTP 2

**Warning Notice:** 이 부분은 https://developers.google.com/web/fundamentals/performance/http2?hl=ko 의 글을 참고하였습니다.
{: .notice--warning}

HTTP 2 에서는 HTTP/1.X 에서 더욱 성능을 강화시켰다. HTTP 2는 기존 프로토콜의 대체가 아니라 확장(Extension)이다. HTTP 2 의 기능적 목표는 다음과 같다.

- Binary Framing 을 통한 응답 다중화
- 요청과 응답의 우선순위 설정
- 요청 처리에서의 흐름제어
- Server push
- 요청 및 응답 헤더 압축

### HTTP 1.1에서의 문제점

HTTP 1.1에서 Non persistant connection의 지연을 줄이기 위해 Persistant Connection을 도입하고 HTTP Pipeling을 도입하였다. HTTP Pipeling의 경우 가장 먼처 요청한 객체가 응답이 전송시간이 오래 걸린다면, 나머지 요청에 대한 응답이 쓸데없이 대기하게 되는 문제, 즉 **Head Of Line Blocking** 문제가 발생한다.

![hol](https://user-images.githubusercontent.com/31771548/97778241-45454780-1bb9-11eb-9501-db657d68cd42.png)

또한 HTTP 1.x에서 응답 시간 향상을 위해서 서버로 요청을 보낼때 하나의 TCP Connection이 아니라 여러개의 TCP Connection을 동시에 설정하는 경우가 있는데 많은 수의 TCP Connection은 네트워크 자원을 낭비하게 된다.

그리고 여러개의 요청을 보낼때 대부분의 요청 헤더라인들은 중복됨에도 불구하고 HTTP/1.1에서는 이들을 모두 재전송하게 된다.

![headerCompression](https://user-images.githubusercontent.com/31771548/97778404-44f97c00-1bba-11eb-8c5d-f7d5b1feee46.jpg)

HTTP 2 에서는 헤더 압축을 통해서 헤더 전송에 의한 오버헤드를 줄였다.

### 바이너리 프레이밍 계층 (Binary Framing Layer)

![binaryFraming](https://user-images.githubusercontent.com/31771548/97778122-4e81e480-1bb8-11eb-8d51-311bd5af17e6.PNG)

HTTP 2 구현에서 가장 핵심적인 부분이 **바이너리 프레이밍 계층 (Binary Framing Layer)** 이라고 한다. 이 계층은 HTTP 메시지를 캡슐화하여 클라이언트와 서버간에 송수신되는 방식을 지정한다. 바이너리 프레이밍 계층은 고수준 HTTP API와 TCP 인터페이스 사이에 구현된 프로토콜 계층으로 HTTP의 일반적인 법칙들, 예를 들어 메소드 필드, URL 필드 버전 필드 등이 변화없이 사용 가능하되, HTTP 메시지를 캡슐화한 뒤 이들이 트랜스포트 계층에서 전송되는 방식을 다르게 하여 전체 성능의 수준을 향상시키기 위해서 고안되었다.

클라이언트와 서버는 새로운 계층을 통해 만들어진 메시지 인코딩 방식을 이해해야하기 때문에 HTTP/1.X을 사용하는 클라이언트와 HTTP 2를 사용하는 서버는 서로 통신할 수 없다. 반대도 마찬가지이다.

### 메시지, 스트림, 프레임

바이너리 프레이밍 계층에서 HTTP 요청과 응답 메시지는 여러개의 프레임으로 분할되며, 스트림을 통해 전송된다. 각각의 용어에 대한 설명은 다음과 같다.

- **스트림** : 구성된 연결 내에서 전달되는 양방향 흐름이며, 하나 이상의 메시지가 전송될 수 있다.
- **메시지** : HTTP 요청과 응답을 나타내는 프레임의 전체 시퀀스
- **프레임** : 하나의 메시지는 여러개의 프레임으로 분할되어 전송되며, HTTP 2에서 전송되는 데이터의 기본단위를 나타낸다. 각 프레임이 어떤 스트림에서 전송되는 지는 바이너리 프레이밍 계층에서 HTTP 메시지를 캡슐화하여 덧붙인 프레임 헤더 정보에 나타나있다.

이러한 용어의 관계는 다음과 같이 요약될 수 있다.

- 모든 통신은 단일 TCP 연결을 통해 수행되며, 전달될 수 있는 양방향의 스트림의 개수는 제한이 없다.
- 각 스트림에는 양방향 메시지 전달을 위한 식별자와 우선순위 정보가 있다.
- 각 메시지는 하나의 논리적 HTTP 메시지이며 하나 이상의 프레임으로 구성된다.
- 프레임은 통신의 최소 단위이며 특정 유형의 데이터(HTTP 헤더, 데이터 페이로드)를 전달한다. 다른 스트림의 프레임을 인터리빙한 다음, 각 프레임의 헤더에 삽입된 스트림 식별자를 통해 이 프레임을 다시 조립할 수 있다.

<img width="631" alt="stream" src="https://user-images.githubusercontent.com/31771548/97796150-e4b61900-1c51-11eb-8f96-fd260831c626.png">

### 요청 및 응답 다중화

HTTP 2에서는 하나의 TCP Connection을 이용해서 여러개의 스트림을 병렬로 처리할 수 있다. 이는 송신자 측에서 각각의 스트림에 대응하는 프레임들을 인터리빙하여 하나의 TCP Connection에 멀티플렉싱하고 전송한 뒤, 수신자가 분할된 프레임을 재조합 하는 방식으로 통신하는 방식으로 구현된다.

![hpbn_1203](https://user-images.githubusercontent.com/31771548/97778679-21373580-1bbc-11eb-8b06-b8abc96f51b5.png)

위 그림에서 클라이언트는 서버로 하나의 요청 메시지를 전달하고 있고, 서버는 클라이언트로 2개의 요청에 대한 응답을 전송하고 있다. 하나의 TCP Connection에서 총 3개의 스트림이 생성되어 데이터를 송수신하고 있다.

이와같은 동작은 HTTP/1.1 에서 문제가 되었던 **HTTP Pipelining에서의 Head Of Line Blocking 문제를 해결**해주고, 동시적으로 **HTTP 요청을 처리하기 위해 여러개의 TCP Connection을 생성하지 않아도 되는 장점**이 있다.

### 스트림 우선순위 설정

HTTP 메시지가 많은 개별 프레임으로 분할되고, 여러 스트림의 프레임을 다중화하는 것이 가능해진 이후에, 클라이언트와 서버가 어떤 프레임을 어떤 순서로 인터리빙하고 전달할지를 결정할 수 있게 되었다. 그리고 이런 인터리빙 순서가 성능에 영향을 끼칠 수 있게 되었다.

이같은 특징을 활용하기 위해서 HTTP 2에서는 클라이언트의 여러 요청에 대한 응답에 대해서 종속성을 부여하거나 우선순위를 설정할 수 있다. 각각의 응답을 처리하는 스트림은 자신보다 먼저 처리되어야 하는 스트림에 대한 **종속성** 이 있을 수 있고, 또한 각 스트림에 가중치가 부여되어 하나의 스트림에 종속된 여러 스트림(동위 요소 스트림)에 대해서는 가중치에 따라 네트워크 리소스를 나누어 갖는 동작을 수행할 수 있다.

![streamPriority](https://user-images.githubusercontent.com/31771548/97796295-93a72480-1c53-11eb-920c-db17eba4bb1e.PNG)

위 그림에서 첫번째 트리의 A, B 스트림은 종속하는 다른 스트림이 없어 implicit root를 종속 스트림으로 갖는다. 또한 각 가중치 12, 4를 갖고 있다. 이는 B 스트림에 대한 처리가 1만큼 일어났을때, A 스트림은 3만큼의 처리가 이루어져야 한다는 뜻이다.

두번째 트리의 경우 C는 D 스트림을 종속 스트림으로 갖고 있기 때문에 C에 어떤 가중치가 있든 D가 모든 리소스를 할당받고 처리된 이후에 C가 처리된다.

### 요청 처리에서의 흐름제어

HTTP 2에서는 각 스트림에서의 흐름제어가 가능하다. 전송계층 프로토콜인 TCP에서도 흐름제어 기능이 있지만, 이것만으로는 각 스트림에서의 흐름제어와 같은 정교한 동작이 불가능하다. 각 스트림에서 각각의 수신 윈도우 사이즈를 관리하여 흐름제어를 함으로서 서버가 더이상 불필요해진 데이터를 클라이언트에 전달하지 않는 등의 동작을 수행할 수 있다.

HTTP 2는 이같은 스트림에서의 흐름제어를 직접적으로 구현하지 않고, 어플리케이션 게층의 응용프로그램 개발자가 이를 구현할 수 있도록 간단한 빌딩 블록을 제공한다. 응용프로그래머는 요청 처리에서의 흐름제어를 자신들만의 목적과 그에 대응하는 알고리즘으로 구현할 수 있고, 또는 완전히 구현하지 않을 수도 있다.

### 서버 푸시 (Server push)

웹 애플리케이션과 같은 리소스는 여러개의 리소스로 구성된다. 이같이 하나의 리소스가 다른 리소스들을 추가적으로 요청하게 할 수 있는데, HTTP 2에서는 클라이언트가 해당 리소스들을 위한 추가 요청을 전송하기 전에 미리 이같은 리소스를 클라이언트로 전송할 수 있다. 이 같은 기능을 **서버 푸시(Server Push)** 라고 한다.

예를 들어 다음과 같은 HTML 문서(page.html)가 있다고 했을때

```html
<html>
<head>
    <link rel="stylesheet" href="./style.css">
    <script src="./script.js"></script>
</head>
<body>
</body>
</html>
```

서버가 page.html 문서 요청에 대한 응답을 처리함과 동시에 이 문서에 의해서 클라이언트가 또다시 요청할 수 있는 style.css, script.js 를 클라이언트에 미리 전송할 수 있다.

![serverpush](https://user-images.githubusercontent.com/31771548/97796554-9c4d2a00-1c56-11eb-8ef0-ffba11b7e167.PNG)

위 그림에서 page.html에 대한 응답 스트림1이 클라이언트에 전달되기 전에 script.js, style.css에 대한 스트림4와 2가 먼저 전달되는 것을 볼 수 있다. 이렇게 함으로써 클라이언트가 서버로 부터 어떤 파일들을 같이 전송받을지 알 수 있고, 따라서 이후에 script.js, style.css 에 대한 추가적인 요청을 하지 않는 방식으로 효율을 높일 수 있다.

또는 클라이언트가 캐시를 하여 이미 해당 리소스를 가지고 있는 경우, 서버에게 해당 리소스를 푸시하지 말것을 나타내는 메시지를 전달할 수도 있다.

### 헤더 압축을 통한 프로토콜 오버헤드 감소

HTTP 의 각 요청과 응답 메시지는 메타 데이터를 담고 있는 헤더가 붙어있다. 이 헤더는 순수 문자열로 이루어져 있으며, 쿠키 정보가 포함된 경우 수 KB가 될 정도로 커질 수 있다.

HTTP 2에서는 이 헤더를 압축하여 전송함으로써 헤더를 송수신하는데 들었던 프로토콜 오버헤드를 감소시켰다. 이를 위하여 먼저 헤더에 들어있는 각 필드 데이터는 **Huffmann Coding**이라는 알고리즘을 이용해서 압축함으로써 각 헤더 데이터의 크기를 줄였다. 또한 **정적 테이블**과 **동적 테이블**을 도입하여, 헤더에 포함될만한 정보들을 미리 테이블의 형태로 나열한 뒤, **각 헤더 라인에 알맞는 테이블의 엔트리를 찾고, 이 엔트리의 인덱스 번호를 해당 해더 정보로 대체하여 인코딩**한다.

![staticTable](https://user-images.githubusercontent.com/31771548/97796598-2d240580-1c57-11eb-9eb6-e41e63a08b84.png)

## 참고자료

- Computer Networking : A Top Down Approach 2장
- https://developers.google.com/web/fundamentals/performance/http2?hl=ko#%EB%94%94%EC%9E%90%EC%9D%B8_%EB%B0%8F_%EA%B8%B0%EC%88%A0%EC%A0%81_%EB%AA%A9%ED%91%9C
- https://www.youtube.com/watch?v=xcrjamphIp4&list=PLgXGHBqgT2TvpJ_p9L_yZKPifgdBOzdVH&index=17&ab_channel=%EC%9A%B0%EC%95%84%ED%95%9CTech
