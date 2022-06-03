package co.edu;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ToDoDAO extends DAO {

	public List<ToDo> todoList() {
		connect();
		List<ToDo> list = new ArrayList<ToDo>();
		String sql = "SELECT * FROM TODOLIST";
		try {
			psmt = con.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				ToDo td = new ToDo();
				td.setTodo(rs.getString("todo"));
				td.setChecked(rs.getString("checked"));
				list.add(td);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}

	public void insertToDo(ToDo td) {
		connect();
		int insert = -1;
		String sql = "INSERT INTO TODOLIST VALUES (?, ?)";
		try {
			psmt = con.prepareStatement(sql);
			psmt.setString(1, td.getTodo());
			psmt.setString(2, td.getChecked());
			insert = psmt.executeUpdate();
			if (insert > 0) {
				System.out.println(insert + " 건 삽입 되었습니다.");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
	}

	public void updateToDo(ToDo td) {
		connect();
		int update = -1;
		String sql = "UPDATE TODOLIST SET CHECKED = ? WHERE TODO = ?";
		try {
			psmt = con.prepareStatement(sql);
			psmt.setString(1, td.getChecked());
			psmt.setString(2, td.getTodo());
			update = psmt.executeUpdate();
			if (update > 0) {
				System.out.println(update + " 건 업데이트 되었습니다");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
	}

	public void deleteToDo(ToDo td) {
		connect();
		int delete = -1;
		String sql = "DELETE FROM TODOLIST WHERE TODO = ?";
		try {
			psmt = con.prepareStatement(sql);
			psmt.setString(1, td.getTodo());
			delete = psmt.executeUpdate();
			if (delete > 0) {
				System.out.println(delete + " 건 삭제되었습니다.");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
	}

}
