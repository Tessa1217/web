package co.edu.jspprj.web;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.edu.jspprj.employee.service.EmployeeService;
import co.edu.jspprj.employee.serviceImpl.EmployeeServiceImpl;
import co.edu.jspprj.employee.vo.EmployeeVO;

public class MemberListCommand implements Command {
	
	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// DB 처리하는 부분 작업
		EmployeeService dao = new EmployeeServiceImpl(); 
		List<EmployeeVO> empList = new ArrayList<EmployeeVO>(); 
		empList = dao.empSelectList();
		request.setAttribute("empList", empList);
		// 보여줄 페이지 리턴
		return "member/member";
	}
}
