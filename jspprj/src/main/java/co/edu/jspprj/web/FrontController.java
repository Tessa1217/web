package co.edu.jspprj.web;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 모든 요청을 받아서 처리하는 곳 (Controller)
 */
// 확장자 패턴 (모든 요청을 컨트롤러가 받음) - 관례적으로 .do를 붙임
@WebServlet("*.do")
public class FrontController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private HashMap<String, Command> map = new HashMap<String, Command>(); 
   
    public FrontController() {
        super();
    }

    // 요청과 처리 명령어를 연결하는 부분 (Command Mapper)
	public void init(ServletConfig config) throws ServletException {
		// Mapping
		map.put("/test.do", new TestCommand()); 
	}
	
	// 들어온 요청 분석하고 명령을 실행해서 결과를 돌려보내주는 곳
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.setCharacterEncoding("UTF-8"); // 한글 깨짐 방지
		
		String uri = request.getRequestURI(); // 요청 URI
		String contextPath = request.getContextPath(); // 요청 context path (Root directory info)
		String page = uri.substring(contextPath.length()); // 요청 URI - Context Path = 실제 요청 페이지
		
		Command cmd = map.get(page); // 실행할 명령 객체를 찾음 (실행할 커멘드) => new TestCommand(); 
		String viewPage = cmd.exec(request, response); // 명령을 실행하고 결과를 돌려받음 (보여줄 페이지 담김) 
		
		// 돌려받은 결과값의 마지막 문자열이 .do가 포함되어 있지 않다면, 
		if (!viewPage.endsWith(".do") && !viewPage.equals(null)) { // view resolve 
			// WEB-INF 밑에 있는 페이지는 서버에서만 접근 가능하기 때문에 서버에서 접근 가능하게 처리
			viewPage = "/WEB-INF/jsp/" + viewPage + ".jsp";
		}
		
		// 결과 페이지를 돌려보내주는 과정 (원래 전달하려는 값을 최종 페이지까지 전달 가능)
		RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage);
		dispatcher.forward(request, response);
	}
}
