package co.edu.study.student.service;

import java.util.List;

import co.edu.study.student.vo.StudentVO;

public interface StudentService {
	
	List<StudentVO> selectStudentList();
	StudentVO selectStudent(StudentVO vo);
	int insertStudent(StudentVO vo); 
	int updateStudent(StudentVO vo); 
	int deleteStudent(StudentVO vo); 
	
}
