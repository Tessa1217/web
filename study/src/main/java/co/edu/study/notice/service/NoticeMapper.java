package co.edu.study.notice.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import co.edu.study.notice.vo.NoticeVO;

public interface NoticeMapper {

	// CRUD
	List<NoticeVO> noticeSelectList(); // search list
	List<NoticeVO> noticeSearchList(@Param("key") String key, @Param("val") String val); // 내용, 작성자 등 검색용 메소드
	NoticeVO noticeSelect(NoticeVO vo); // select 
	int noticeInsert(NoticeVO vo); // insert
	int noticeUpdate(NoticeVO vo); // update
	int noticeDelete(NoticeVO vo); // delete
	
	// 조회수 증가 메소드
	int noticeHitUpdate(int id);
	
}
