package co.edu;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/formServlet")

public class FormServlet extends HttpServlet {

	private MessageDAO dao = new MessageDAO();

	@Override
	public void init() throws ServletException {
		super.init();
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("doGet()");
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		PrintWriter out = resp.getWriter();

		resp.setContentType("text/html; charset=EUC-KOR");
		resp.setCharacterEncoding("EUC-KOR");

		String user = req.getParameter("user");
		String passwd = req.getParameter("passwd");
		String cmd = req.getParameter("cmd");

		Message msg = dao.getMessage(user, passwd);
		if (cmd.equals("search")) {
			out.print("<h3>Message Info</h3>"); // html => DOM이 페이지를 적절하게 만들어줌
			out.print("<p>Message Content: " + msg.getContent() + "</p>");
			out.print("<p>Writer: " + msg.getWriter() + "</p>");
			out.print("<p>Create Date: " + msg.getCreateDate() + "</p>");
		} else if (cmd.equals("insert")) {
			out.print("<p>User Info " + user + "</p>");
			out.print("<p>Password Info " + passwd + "</p>");
		}

		// Multipart Request

	}

	@Override
	public void destroy() {
		super.destroy();
	}
}
