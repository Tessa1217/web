package co.edu.study.student.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.edu.study.common.Command;
import co.edu.study.student.service.StudentService;
import co.edu.study.student.serviceImpl.StudentServiceImpl;
import co.edu.study.student.vo.StudentVO;

public class Login implements Command {

	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) {
		StudentService dao = new StudentServiceImpl(); 
		StudentVO vo = new StudentVO();
		HttpSession session = req.getSession(); // 세션 객체 
		vo.setStudentId(req.getParameter("studentId"));
		System.out.println(vo.getStudentId());
		vo.setPassword(req.getParameter("password"));
		vo = dao.selectStudent(vo);
		System.out.println(vo.getStudentId());
		System.out.println(vo.getName());
		System.out.println(vo.getAddress());
		System.out.println(vo.getAuthor());
		System.out.println(vo.getMajor());
		if (vo != null) {
			session.setAttribute("studentId", vo.getStudentId()); // 아이디
			session.setAttribute("name", vo.getName()); // 사용자 이름
			session.setAttribute("author", vo.getAuthor()); // 사용자 권한
			req.setAttribute("message", vo.getName() + " 님 환영합니다.");
		} else {
			req.setAttribute("message", "아이디 또는 패스워드가 일치하지 않습니다.");
		}
		return "student/login";
	}

}
