package co.edu.study.home;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.edu.study.common.Command;

public class HomeCommand implements Command {

	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) {
		return "home/home";
	}
	
}
