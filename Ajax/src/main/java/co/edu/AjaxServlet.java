package co.edu;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class AjaxServlet
 */
@WebServlet({ "/AjaxServlet", "/ajax.do" })
public class AjaxServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AjaxServlet() {
		super();
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException { // response 결과를 가지고 있는 객체
		response.setCharacterEncoding("utf-8"); // utf-8 인코딩
		response.setContentType("text/html;charset=utf-8"); // 컨텐트 타입은 html
		PrintWriter out = response.getWriter(); // 출력 스트림
		String job = request.getParameter("job"); // 요청 정보에서 job이라는 파라미터를 읽어옴
		if (job.equals("html")) {
			out.print("<h3>아작스페이지 입니다.</h3>"); // 위에서 컨텐트 타입과 인코딩 타입을 지정해주지 않으면 기본적으로 text
			out.print("<a href = 'index.html'>메인 페이지</a>");
		} else if (job.equals("json")) {
			// JSON 형식 데이터 [{"fname":?}, {"lname":?}, {"email":?} ...]
			EmpDAO dao = new EmpDAO();
			List<Employee> eList = dao.empList();
//			String json = "[";
//			for (int i = 0; i < eList.size(); i++) {
//				json += "{\"fname\":" + eList.get(i).getFirstName() + "}";
//				if (i != eList.size() - 1) {
//					json += ',';
//				}
//			}
//			json += "]";
//			out.print(json);
			Gson gson = new GsonBuilder().create();
			out.print(gson.toJson(eList));
		}
//		response.getWriter().append("Served at: ").append(request.getContextPath());
		// contextPath - 프로젝트 제일 상위 정보 (served at: /Ajax)
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=utf-8");
		String cmd = request.getParameter("cmd");
		String empId = request.getParameter("empId");
		String fname = request.getParameter("fname");
		String lname = request.getParameter("lname");
		String email = request.getParameter("email");
		String hdate = request.getParameter("hdate");
		String job = request.getParameter("job");

		Employee emp = new Employee();
		emp.setFirstName(fname);
		emp.setLastName(lname);
		emp.setEmail(email);
		emp.setHireDate(hdate);
		emp.setJobId(job);

		EmpDAO dao = new EmpDAO();

		if (cmd.equals("insert")) { // 데이터 삽입
			dao.insert(emp);
			System.out.println(emp);
		} else if (cmd.equals("update")) { // 수정
			emp.setEmployeeId(Integer.parseInt(empId));
			if (dao.update(emp) == null) {
				// {"retCode":"error"}
				System.out.println("error");
			} else {
				// {"retCode":"success"}
				System.out.println("success");
			}
		}
		Gson gson = new GsonBuilder().create();
		response.getWriter().print(gson.toJson(emp));
	}

}
