package co.edu.study.notice.command;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.edu.study.common.Command;
import co.edu.study.notice.service.NoticeService;
import co.edu.study.notice.serviceImpl.NoticeServiceImpl;
import co.edu.study.notice.vo.NoticeVO;

public class NoticeSelectList implements Command {

	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) {
		NoticeService dao = new NoticeServiceImpl(); 
		List<NoticeVO> notices = new ArrayList<NoticeVO>();  
		notices = dao.noticeSelectList();
		req.setAttribute("notices", notices);
		return "notice/noticeSelectList";
	}

}
