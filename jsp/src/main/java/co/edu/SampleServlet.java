package co.edu;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SampleServlet extends HttpServlet {
	// IOC - 컨테이너의 처리 방식대로 구현하여 제어를 개발자가 아닌 컨테이너가 함

	// 서블렛 생명주기

	// 1. Init (서버 제일 처음 가동 후 서블렛 페이지 호출 시 호출)
	@Override
	public void init(ServletConfig config) throws ServletException {
		System.out.println("init 호출...");
	}

	// 2. Service (서버 시작 후에는 서버에서 요청 할 때마다 서비스 호출 실행)
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 요청 정보 캐릭터 타입 (한글 포함 시)
		req.setCharacterEncoding("UTF-8");

		// 응답 정보 컨텐트 타입 (응답 정보 세팅)
		resp.setContentType("text/html; charset=utf-8");
		resp.setCharacterEncoding("UTF-8");

		// 요청처리, 응답처리 객체를 톰캣에서 받음
		// HttpServletRequest => 클라이언트 요청 정보 (ex - IP...) 담고 처리해주는 객체 (요청처리 객체)
		// HttpServletResponse => 클라이언트에게 되돌려줄 응답 정보를 처리하고 담아서 내보내주는 객체 (응답처리 객체)
		System.out.println("서비스 호출...");

		// GET, POST 등 메소드 방식 확인
		if (req.getMethod().equals("GET")) {
			System.out.println("GET 요청입니다.");
		} else if (req.getMethod().equals("POST")) {
			System.out.println("POST 요청입니다.");
		}

		// 요청 파라미터
		String name = req.getParameter("name"); // param => name=? (k=v)
		String age = req.getParameter("age"); // name=?&age=?

		// 출력스트림
		PrintWriter out = resp.getWriter(); // getWriter()의 리턴 타입이 PrintWriter
		out.print("<h3>요청 파라미터(name): " + name + "</h3>");
		out.print("<h3>요청 파라미터(age): " + age + "</h3>");
		out.close();
	}

	// DoGet (GET 방식)
//	@Override
//	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		// TODO Auto-generated method stub
//		super.doGet(req, resp);
//	}
//	
//	// DoPost(POST 방식)
//	@Override
//	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		// TODO Auto-generated method stub
//		super.doPost(req, resp);
//	}

	// 3. Destroy (서버 멈출 경우 호출)
	@Override
	public void destroy() {
		System.out.println("destroy 호출...");
	}

}
