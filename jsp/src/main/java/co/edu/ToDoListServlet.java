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

@WebServlet("/toDoServ")
public class ToDoListServlet extends HttpServlet {

	private ToDoDAO dao = new ToDoDAO();

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		resp.setCharacterEncoding("utf-8");
		resp.setContentType("text/json; charset=utf-8");

		Gson gson = new GsonBuilder().create();

		List<ToDo> list = dao.todoList();
		resp.getWriter().print(gson.toJson(list));

	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		resp.setCharacterEncoding("utf-8");
		resp.setContentType("text/json; charset=utf-8");
		String todo = req.getParameter("todo");
		String checked = req.getParameter("checked");
		String cmd = req.getParameter("cmd");

		ToDo td = new ToDo();
		td.setTodo(todo);
		td.setChecked(checked);

		if (cmd.equals("insert")) {
			dao.insertToDo(td);
		} else if (cmd.equals("update")) {
			dao.updateToDo(td);
		} else if (cmd.equals("delete")) {
			dao.deleteToDo(td);
		}

	}

}
