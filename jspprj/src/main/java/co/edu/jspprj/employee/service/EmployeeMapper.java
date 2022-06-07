package co.edu.jspprj.employee.service;

import java.util.List;

import co.edu.jspprj.employee.vo.EmployeeVO;

public interface EmployeeMapper {
	
	List<EmployeeVO> empSelectList(); // 전체리스트
	EmployeeVO empSelect(EmployeeVO emp); // 한 명 조회
	int empInsert(EmployeeVO emp); // 추가
	int empUpdate(EmployeeVO emp); // 변경
	int empDelete(EmployeeVO emp); // 삭제

}
