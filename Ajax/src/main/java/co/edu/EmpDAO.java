package co.edu;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EmpDAO extends DAO {

	// 차트
	public Map<String, Integer> getMemberByDept() {
		connect();
		Map<String, Integer> map = new HashMap<String, Integer>();
		String sql = "SELECT D.DEPARTMENT_NAME, COUNT(1) AS CNT FROM EMPLOYEES E, DEPARTMENTS D WHERE E.DEPARTMENT_ID = D.DEPARTMENT_ID GROUP BY D.DEPARTMENT_NAME";
		try {
			psmt = con.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				map.put(rs.getString("department_name"), rs.getInt("cnt"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return map;
	}

	// 리스트 가져오기
	public List<Employee> empList() {
		String sql = "SELECT * FROM EMP_TEMP ORDER BY 1";
		List<Employee> eList = new ArrayList<Employee>();
		connect();
		try {
			psmt = con.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				Employee emp = new Employee();
				emp.setEmployeeId(rs.getInt("employee_id"));
				emp.setFirstName(rs.getString("first_name"));
				emp.setLastName(rs.getString("last_name"));
				emp.setEmail(rs.getString("email"));
				emp.setJobId(rs.getString("job_id"));
				emp.setHireDate(rs.getString("hire_date"));
				eList.add(emp);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return eList;
	}

	// 입력
	public Employee insert(Employee emp) {
		int insert = -1;
		String sql = "INSERT INTO EMP_TEMP(EMPLOYEE_ID, FIRST_NAME, LAST_NAME, EMAIL, JOB_ID, HIRE_DATE) "
				+ "VALUES (?, ?, ?, ?, ?, ?)";
		String seqSql = "SELECT EMPLOYEES_SEQ.NEXTVAL FROM DUAL";
		connect();
		int nextSeq = -1;
		try {
			psmt = con.prepareStatement(seqSql);
			rs = psmt.executeQuery();
			if (rs.next()) {
				nextSeq = rs.getInt(1);
			}
			psmt = con.prepareStatement(sql);
			psmt.setInt(1, nextSeq);
			psmt.setString(2, emp.getFirstName());
			psmt.setString(3, emp.getLastName());
			psmt.setString(4, emp.getEmail());
			psmt.setString(5, emp.getJobId());
			psmt.setString(6, emp.getHireDate());
			insert = psmt.executeUpdate();
			System.out.println(insert + "건이 입력되었습니다.");
			emp.setEmployeeId(nextSeq);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return emp;
	}

	// 수정
	public Employee update(Employee emp) {
		int update = -1;
		String sql = "UPDATE EMP_TEMP SET FIRST_NAME = ?, " + "LAST_NAME = ?, EMAIL = ?, HIRE_DATE = ? WHERE "
				+ "EMPLOYEE_ID = ?";
		connect();
		try {
			psmt = con.prepareStatement(sql);
			psmt.setString(1, emp.getFirstName());
			psmt.setString(2, emp.getLastName());
			psmt.setString(3, emp.getEmail());
			psmt.setString(4, emp.getHireDate());
			psmt.setInt(5, emp.getEmployeeId());
			update = psmt.executeUpdate();
			if (update > 0) {
				System.out.println(update + "건 수정되었습니다.");
				return emp;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return null;
	}

	// 삭제
	public Employee delete(Employee emp) {
		int delete = -1;
		String sql = "DELETE FROM EMP_TEMP WHERE EMPLOYEE_ID = ?";
		connect();
		try {
			psmt = con.prepareStatement(sql);
			psmt.setInt(1, emp.getEmployeeId());
			delete = psmt.executeUpdate();
			if (delete > 0) {
				System.out.println(delete + "건 삭제되었습니다.");
				return emp;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return null;
	}

//	// 한 건 조회
//	public Employee search() {
//		String sql = "";
//		connect();
//		try {
//			psmt = con.prepareStatement(sql);
//		} catch (SQLException e) {
//			e.printStackTrace();
//		} finally {
//			disconnect();
//		}
//	}

}
