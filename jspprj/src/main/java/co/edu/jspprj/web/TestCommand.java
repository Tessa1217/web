package co.edu.jspprj.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class TestCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// test.do로 들어왔을 때 처리하는 곳 (실제 처리 명령들을 작성한 후 최종적으로 보여줄 페이지를 리턴)
		return "test1";
	}
}
