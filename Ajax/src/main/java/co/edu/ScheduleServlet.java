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

/**
 * Servlet implementation class ScheduleServlet
 */
@WebServlet("/ScheduleServlet")
public class ScheduleServlet extends HttpServlet {

	private ScheduleDAO sdao = new ScheduleDAO();

	private static final long serialVersionUID = 1L;

	public ScheduleServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/json; charset=utf-8");

		List<Schedule> sList = sdao.selectS();
		Gson gson = new GsonBuilder().create();
		response.getWriter().print(gson.toJson(sList));

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");

		String job = request.getParameter("job");
		String title = request.getParameter("title");
		String startDate = request.getParameter("start");
		String endDate = request.getParameter("end");

		Schedule s = new Schedule();
		s.setTitle(title);
		s.setStart(startDate);
		s.setEnd(endDate);

		if (job.equals("add")) {
			s = sdao.insertS(s);
			// {"retCode":"Success"}
			response.getWriter().print("{\"retCode\":\"Success\"}");
		} else if (job.equals("mod")) {
			s = sdao.updateS(s);
			response.getWriter().print("{\"retCode\":\"Success\"}");
		} else if (job.equals("del")) {
			s = sdao.deleteS(s);
			response.getWriter().print("{\"retCode\":\"Success\"}");
		} else {
			response.getWriter().print("{\"retCode\":\"No Request\"}");
		}

	}

}
