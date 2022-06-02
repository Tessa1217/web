package co.edu;

import java.sql.SQLException;
import java.util.List;

public class StrDAO extends DAO {
	
	public String selectStr() {
		connect();
		String sql = "SELECT * FROM (SELECT * FROM RANDOMSTR ORDER "
				+ "BY DBMS_RANDOM.VALUE) WHERE ROWNUM = 1";
		String str = "";
		try {
			psmt = con.prepareStatement(sql);
			rs = psmt.executeQuery();
			if (rs.next()) {
				str = rs.getString("str");
				return str;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return null;
		
	}

}
