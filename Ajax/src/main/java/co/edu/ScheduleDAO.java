package co.edu;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ScheduleDAO extends DAO {

	public List<Schedule> selectS() {
		List<Schedule> sList = new ArrayList<Schedule>();
		connect();
		String sql = "SELECT * FROM SCHEDULES ORDER BY 2";
		try {
			psmt = con.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				Schedule s = new Schedule();
				s.setTitle(rs.getString("title"));
				s.setStart(rs.getString("start_date"));
				s.setEnd(rs.getString("end_date"));
				sList.add(s);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return sList;
	}

	public Schedule insertS(Schedule s) {
		int insert = -1;
		connect();
		String sql = "INSERT INTO SCHEDULES VALUES(?, ?, ?)";
		try {
			psmt = con.prepareStatement(sql);
			psmt.setString(1, s.getTitle());
			psmt.setString(2, s.getStart());
			psmt.setString(3, s.getEnd());
			insert = psmt.executeUpdate();
			if (insert > 0) {
				System.out.println(insert + " 건 삽입되었습니다.");
				return s;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return null;
	}

	public Schedule updateS(Schedule s) {
		int update = -1;
		connect();
		String sql = "UPDATE SCHEDULES SET START_DATE = ?, END_DATE = ? WHERE TITLE = ?";
		try {
			psmt = con.prepareStatement(sql);
			psmt.setString(1, s.getStart());
			psmt.setString(2, s.getEnd());
			psmt.setString(3, s.getTitle());
			update = psmt.executeUpdate();
			if (update > 0) {
				System.out.println(update + " 건 수정되었습니다.");
				return s;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return null;
	}

	public Schedule deleteS(Schedule s) {
		int delete = -1;
		connect();
		String sql = "DELETE FROM SCHEDULES WHERE TITLE = ?";
		try {
			psmt = con.prepareStatement(sql);
			psmt.setString(1, s.getTitle());
			delete = psmt.executeUpdate();
			if (delete > 0) {
				System.out.println(delete + " 건 삭제되었습니다.");
				return s;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return null;
	}

}
