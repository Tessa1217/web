package co.edu.study.student.command;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.edu.study.common.Command;
import co.edu.study.student.service.StudentService;
import co.edu.study.student.serviceImpl.StudentServiceImpl;
import co.edu.study.student.vo.StudentVO;

public class SelectStudentList implements Command {

	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) {
		StudentService dao = new StudentServiceImpl(); 
		List<StudentVO> list = new ArrayList<StudentVO>();
		list = dao.selectStudentList();
		req.setAttribute("students", list);
		return "student/selectStudentList";
	}

}
