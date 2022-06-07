package co.edu.jspprj.employee.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.edu.jspprj.DataSource;
import co.edu.jspprj.employee.service.EmployeeMapper;
import co.edu.jspprj.employee.service.EmployeeService;
import co.edu.jspprj.employee.vo.EmployeeVO;

public class EmployeeServiceImpl implements EmployeeService {
	
	// true 하면 autocommit
	private SqlSession sqlSession = DataSource.getInstance().openSession(true);
	// Mapper Instance
	private EmployeeMapper map = sqlSession.getMapper(EmployeeMapper.class);
	
	@Override
	public List<EmployeeVO> empSelectList() {
		return map.empSelectList();
	}

	@Override
	public EmployeeVO empSelect(EmployeeVO emp) {
		return map.empSelect(emp);
	}

	@Override
	public int empInsert(EmployeeVO emp) {
		return map.empInsert(emp);
	}

	@Override
	public int empUpdate(EmployeeVO emp) {
		return map.empUpdate(emp);
	}

	@Override
	public int empDelete(EmployeeVO emp) {
		return map.empDelete(emp);
	}

}
