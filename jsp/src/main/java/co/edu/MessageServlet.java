package co.edu;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@WebServlet("/message")

public class MessageServlet extends HttpServlet {

	private MessageDAO dao = new MessageDAO();

	@Override
	public void init() throws ServletException {
		System.out.println("Init 호출");
	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("서비스 호출");
		// 요청 인코딩
		req.setCharacterEncoding("UTF-8");
		// 응답 인코딩
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/json; charset=utf-8");

		// JSON 객체를 위해 GSON 객체 생성
		Gson gson = new GsonBuilder().create();

		if (req.getMethod().equals("GET")) { // GET 방식일 경우

			List<Message> msgs = dao.selectM();
			resp.getWriter().print(gson.toJson(msgs));

		} else if (req.getMethod().equals("POST")) { // POST 방식일 경우

			String content = req.getParameter("content");
			String writer = req.getParameter("writer");

			Message msg = new Message();
			msg.setContent(content);
			msg.setWriter(writer);

			dao.insertM(msg);

		}
	}

	@Override
	public void destroy() {
		System.out.println("Destroy 호출");
	}
}
