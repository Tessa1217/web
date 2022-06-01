package co.edu;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DAO {

	Connection con;
	PreparedStatement psmt;
	ResultSet rs;
	private String url = "jdbc:oracle:thin:@localhost:1521:xe";
	private String driver = "oracle.jdbc.OracleDriver";
	private String url2 = "jdbc:oracle:thin:@javadb_high?TNS_ADMIN=/Users/tessa/Wallet_javadb";

	public void connect() {
		try {
			Class.forName(driver);
//			con = DriverManager.getConnection(url, "hr", "hr");
			con = DriverManager.getConnection(url2, "ADMIN", "myJavaDB0508");
			System.out.println("DB Connected");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e1) {
			e1.printStackTrace();
		}
	}

	public void disconnect() {
		try {
			if (rs != null) {
				rs.close();
			}
			if (psmt != null) {
				psmt.close();
			}
			if (con != null) {
				con.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
