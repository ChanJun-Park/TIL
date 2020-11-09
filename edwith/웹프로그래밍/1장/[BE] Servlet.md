# Servlet

## Servlet 이란?

클라이언트의 요청에 따라 동적으로 응답 데이터를 생성하고 다시 클라이언트에 응답해줄 수 있는 자바 클래스. WAS의 웹 애플리케이션 컨테이너 위에서 동작한다.

![Servlet](https://user-images.githubusercontent.com/31771548/98497094-76dba400-2286-11eb-8664-48171b187ca9.PNG)

### 버전 2.x 대의 서블릿 : web.xml 을 이용해서 url 맵핑

버전 2.x 대의 서블릿에서는 web.xml을 이용해서 클라이언트의 HTTP 요청을 처리할 서블릿을 맵핑한다.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://java.sun.com/xml/ns/javaee" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" id="WebApp_ID" version="2.5">
  <display-name>exam25</display-name>
  ...
  <servlet>
    <description></description>
    <display-name>TenServlet</display-name>
    <servlet-name>TenServlet</servlet-name>
    <servlet-class>exam.TenServlet</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>TenServlet</servlet-name>
    <url-pattern>/ten</url-pattern>
  </servlet-mapping>
</web-app>
```

- `<serlvet>` 태그를 이용해서 서블릿에 대한 정보를 나타낸다. `<servlet-name>` 태그를 이용해서 이 서블릿을 어떤 이름으로 참조할 것인지 나타낸다.
- `<servlet-mapping>` 태그를 이용해서 클라이언트가 어떤 URL을 이용해서 HTTP 요청을 보냈을때 해당 요청을 어느 서블릿이 처리하게 할지를 결정한다.
  - `<servlet-name>` : 어느 서블릿이 `<url-pattern>` 에 해당하는 url 요청을 처리할지 명시한다.
  - `<url-pattern>` : HTTP 요청메시지가 들어왔을때 어떤 url을 이용해서 들어온 것인지를 명시한다.

### 버번 3.x 대의 서블릿 : 어노테이션을 이용한 서블릿 매핑

3.x 대의 서블릿은 서블릿 클래스 선언 윗줄에 명시한 어노테이션을 이용해서 서블릿과 HTTP 요청 url을 매핑한다.

```java
@WebServlet("/ten")
public class TenServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public TenServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		out.println("<h1>1부터 10까지 출력</h1>");
		for(int i = 1; i <= 10; i++) {
			out.println(i + "<br>");			
		}
	}
}
```

## 기본적인 서블릿 작성법

```java
@WebServlet("/ten")
public class TenServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public TenServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		request.setCharacterEncoding("utf-8");

        PrintWriter out = response.getWriter();
		out.println("<h1>1부터 10까지 출력</h1>");
		for(int i = 1; i <= 10; i++) {
			out.println(i + "<br>");			
		}
	}
}
```

- **HttpServlet** 클래스에 정의되어 있는 `doGet, doPost, service` 와 같은 메소드를 오버라이딩하여 클라이언트의 요청을 처리한다.
- `doGet, doPost, service` 등의 메소드는 인자로 `HttpServletRequest`, `HttpServletResponse` 객체를 전달받는다. 이 객체는 HTTP 요청과 응답에 대한 정보들을 담고 있다.
- `response.setContentType("text/html;charset=utf-8");` 메소드를 호출하여 응답시 텍스트 데이터 인코딩방식을 설정한다.
- `request.setCharacterEncoding("utf-8");` 메소드를 호출하여 HTTP 요청시 들어온 데이터를 어떤 인코딩 방식으로 해석할 것인지 설정한다.
- `response.getWriter();` 메소드를 이용하여 클라이언트에 응답 데이터를 전송할 `PrintWriter` 객체를 얻는다. 이 객체의 메소드를 이용해서 응답 데이터를 전송한다.

## Servlet 라이프사이클

웹 애플리케이션의 동작에 따라서 Servlet이 실행되거나 메모리에 로드되는 등의 상태가 변경되는데 이를 **Servlet LifeCycle** 이라고 한다. 각 라이프사이클 단계마다 자동으로 호출되는 메소드들이 존재한다.

![ServletLifeCyclejpg](https://user-images.githubusercontent.com/31771548/98498553-6af1e100-228a-11eb-8201-f8142b04a5d6.jpg)

- 서블릿 클래스 객체는 해당 서블릿이 사용되기 전까지 메모리에 로드되지 않는다.
- 해당 서블릿이 처음 사용되어야 하는 시점에 메모리에 인스턴스화 된다.(생성자 호출됨)
- 서블릿이 메모리에 로드되면 `init()` 메소드가 호출되어 초기화를 진행한다.
- 해당 서블릿에 HTTP 요청이 도착할때마다 `HttpServlet` 클래스에 정의되어 있는 `service()` 메소드, 또는 서블릿 클래스에서 재정의한 `service()`가 호출된다.
- `HttpServlet` 클래스에 정의되어 있는 `service()` 메소드는 템플릿 메소드 패턴으로 작성되어 있다. HTTP 요청 메소드에 따라서 서블릿 클래스의 `doGet()`, `doPost()`, `doPut()` 메소드 등을 내부적으로 호출한다.
- 서블릿 소스코드가 변경되고 재컴파일된 경우 톰캣은 이를 감지하고 변경 이전에 메모리에 로드되어 있던 서블릿은 사용하지 않도록 웹 애플리케이션을 재시작한다. 이때 해당 서블릿의 `destroy()` 메소드가 호출된다.

## Request, Response 객체의 이해

톰캣 was는 클라이언트의 요청과 응답에 대한 정보를 `HttpRequest`, `HttpResponse` 클래스 객체로 정리하여 서블릿에 전달한다.

![1_5_4_request_response](https://user-images.githubusercontent.com/31771548/98498971-9923f080-228b-11eb-9c97-2bf8a20fe17a.png)

`HttpRequest` 클래스에 정의되어 있는 메소드들을 이용해서 헤더 정보, 요청 파라미터 정보, 클라이언트 정보 등을 수집할 수 있다.

### 요청 헤더 정보 예제

```java
@WebServlet("/header")
public class HeaderServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public HeaderServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		request.setCharacterEncoding("utf-8");
		
		PrintWriter out = response.getWriter();
		out.println("<html>");
		out.println("<head><title>form</title></head>");
		out.println("<body>");
		
		Enumeration<String> headerNames = request.getHeaderNames();
		while(headerNames.hasMoreElements()) {
			String headerName = headerNames.nextElement();
			String headerValue = request.getHeader(headerName);
			out.println(headerName + ":"  + headerValue + "<br>");
		}
		
		out.println("</body>");
		out.println("</html>");
		out.close();
	}
}
```

### 요청 파라미터 정보 예제

`getParameter()` 메소드를 이용해서 요청 파라미터 확인 가능

```java
@WebServlet("/param")
public class ParameterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ParameterServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		request.setCharacterEncoding("utf-8");
		
		PrintWriter out = response.getWriter();
		out.println("<html>");
		out.println("<head><title>form</title></head>");
		out.println("<body>");

		String name = request.getParameter("name");
		String age = request.getParameter("age");
		
		out.println("name : " + name + "<br>");
		out.println("age : " +age + "<br>");
		
		out.println("</body>");
		out.println("</html>");
	}
}
```

### 클라이언트 정보 확인

```java
@WebServlet("/info")
public class InfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public InfoServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		request.setCharacterEncoding("utf-8");
		
		PrintWriter out = response.getWriter();
		out.println("<html>");
		out.println("<head><title>info</title></head>");
		out.println("<body>");

		String uri = request.getRequestURI();
		StringBuffer url = request.getRequestURL();
		String contentPath = request.getContextPath();
		String remoteAddr = request.getRemoteAddr();
		String authType = request.getAuthType();
		String charEncoding = request.getCharacterEncoding();
		String protocol = request.getProtocol();
		
		out.println("uri : " + uri + "<br>");
		out.println("url : " + url + "<br>");
		out.println("contentPath : " + contentPath + "<br>");
		out.println("remoteAddr : " + remoteAddr + "<br>");
		out.println("authType : " + authType + "<br>");
		out.println("charEncoding : " + charEncoding + "<br>");
		out.println("protocol : " + protocol + "<br>");
		
		out.println("</body>");
		out.println("</html>");
	}
}
```
