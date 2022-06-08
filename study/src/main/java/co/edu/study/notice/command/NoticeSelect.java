package co.edu.study.notice.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.edu.study.common.Command;
import co.edu.study.notice.service.NoticeService;
import co.edu.study.notice.serviceImpl.NoticeServiceImpl;
import co.edu.study.notice.vo.NoticeVO;

public class NoticeSelect implements Command {

	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) {
		// 세부 목록 보기
		NoticeVO vo = new NoticeVO(); 	
		NoticeService dao = new NoticeServiceImpl();
		vo.setId(Integer.valueOf(req.getParameter("id")));
		System.out.println(vo.getId());
		vo = dao.noticeSelect(vo);
		req.setAttribute("notice", vo);
		return "notice/noticeSelect";
	}

}
