package co.edu;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MessageDAO extends DAO {

	public Message getMessage(String user, String passwd) {
		Message msg = new Message();
		msg.setMsgId(100);
		msg.setContent("반갑습니다");
		msg.setWriter("admin");
		msg.setCreateDate("2022-06-03");
		return msg;
	}

	public List<Message> selectM() {
		List<Message> msgs = new ArrayList<Message>();
		connect();
		String sql = "select *\r\n" + "from messages\r\n" + "where create_date >= sysdate - (1/24/60)*30\r\n"
				+ "order by 1";
		try {
			psmt = con.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				Message msg = new Message();
				msg.setMsgId(rs.getInt("msg_id"));
				msg.setContent(rs.getString("content"));
				msg.setWriter(rs.getString("writer"));
				msg.setCreateDate(rs.getString("create_date"));
				msgs.add(msg);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return msgs;
	}

	public void insertM(Message msg) {
		connect();
		int insert = -1;
		String sql = "INSERT INTO MESSAGES VALUES (MS.NEXTVAL, ?, ?, SYSDATE)";
		try {
			psmt = con.prepareStatement(sql);
			psmt.setString(1, msg.getContent());
			psmt.setString(2, msg.getWriter());
			insert = psmt.executeUpdate();
			if (insert > 0) {
				System.out.println(insert + " 건이 삽입되었습니다.");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}

	}

}
