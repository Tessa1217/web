package co.edu.study.student.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.edu.study.common.Command;

public class LogOut implements Command {

	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) {
		HttpSession session = req.getSession(); 
		session.invalidate();
		req.setAttribute("message", "정상적으로 로그아웃 되셨습니다.");
		return "student/logOut";
	}

}
