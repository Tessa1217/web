package co.edu.jspprj.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MemberListCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// DB 처리하는 부분 작업
		// 보여줄 페이지 리턴
		return "member/member";
	}

}
