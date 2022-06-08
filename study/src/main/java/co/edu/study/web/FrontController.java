package co.edu.study.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.edu.study.common.Command;
import co.edu.study.home.HomeCommand;
import co.edu.study.notice.command.NoticeSelect;
import co.edu.study.notice.command.NoticeSelectList;
import co.edu.study.student.command.LogOut;
import co.edu.study.student.command.Login;
import co.edu.study.student.command.LoginForm;
import co.edu.study.student.command.SelectStudentList;

@WebServlet("*.do")
public class FrontController extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	private Map<String, Command> map = new HashMap<String, Command>(); 
	
	
    public FrontController() {
        super();
    }
    
    // 요청 map 집합 
    @Override
    public void init(ServletConfig config) throws ServletException {
    	map.put("/home.do", new HomeCommand()); // 홈페이지
    	map.put("/noticeSelectList.do", new NoticeSelectList()); // 공지사항
    	map.put("/noticeSelect.do", new NoticeSelect()); // 세부내역
    	map.put("/selectStudentList.do", new SelectStudentList());
    	map.put("/loginForm.do", new LoginForm());
    	map.put("/login.do", new Login());
    	map.put("/logOut.do", new LogOut());
    }
    
    // 요청 분석부
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    	req.setCharacterEncoding("UTF-8");
    	String uri = req.getRequestURI(); 
    	String contextPath = req.getContextPath();
    	String page = uri.substring(contextPath.length());
    	
    	Command cmd = map.get(page);
    	String viewPage = cmd.exec(req, resp);
    	
    	// View Resolve
    	if (!viewPage.endsWith(".do") && !viewPage.equals(null)) {
    		//viewPage = "/WEB-INF/views/" + viewPage + ".jsp";
    		viewPage = viewPage + ".tiles";
    	}
    	System.out.println(viewPage);
    	
    	RequestDispatcher dispatcher = req.getRequestDispatcher(viewPage);
    	dispatcher.forward(req, resp);
    }
}
