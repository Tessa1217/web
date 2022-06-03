package co.edu;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// Annotation 사용 (web.xml URL 정보와 동일 기능)

@WebServlet("/testServ")

public class TestServlet extends HttpServlet {

	@Override
	public void init() throws ServletException {
		System.out.println("init 호출");
	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/xml; charset=utf-8");

		PrintWriter out = resp.getWriter();

		// [{"name":"홍길동", "age":10}, {"name":"박길동", "age":15}]
//		out.print("[{\"name\":\"홍길동\", \"age\":10}, {\"name\":\"박길동\", \"age\":15}]");
		// <data><name>홍길동</name><age>10</age></data>
		out.print("<data><name>박민수</name><age>10</age><name>홍길동</name><age>10</age></data>");
		out.close();

	}

	@Override
	public void destroy() {
		System.out.println("destroy 호출");
	}
}
