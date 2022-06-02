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

@WebServlet("/StrServlet")
public class StrServlet extends HttpServlet {
	private StrDAO dao = new StrDAO(); 
	private static final long serialVersionUID = 1L;

    public StrServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/json; charset=utf-8");
		
		String str = dao.selectStr();
		System.out.println(str);
		Gson gson = new GsonBuilder().create();
		response.getWriter().print(gson.toJson(str));
	}

}
