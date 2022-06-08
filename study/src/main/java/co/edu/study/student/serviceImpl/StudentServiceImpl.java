package co.edu.study.student.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.edu.study.common.DataSource;
import co.edu.study.student.service.StudentMapper;
import co.edu.study.student.service.StudentService;
import co.edu.study.student.vo.StudentVO;

public class StudentServiceImpl implements StudentService {
	
	private SqlSession sqlSession = DataSource.getInstance().openSession(true);
	private StudentMapper map = sqlSession.getMapper(StudentMapper.class);
	
	@Override
	public List<StudentVO> selectStudentList() {
		return map.selectStudentList();
	}

	@Override
	public StudentVO selectStudent(StudentVO vo) {
		return map.selectStudent(vo);
	}

	@Override
	public int insertStudent(StudentVO vo) {
		return map.insertStudent(vo);
	}

	@Override
	public int updateStudent(StudentVO vo) {
		return map.updateStudent(vo);
	}

	@Override
	public int deleteStudent(StudentVO vo) {
		return map.deleteStudent(vo);
	}

}
