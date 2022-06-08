<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
	#container {
		width: 80%;
		margin: 3% auto;
	}
	header {
		width: 100%;
		background: #eee;
		padding: 1%;
	}
	header h3 {
		text-align: center;
	}
	
	header p {
		display: inline-block;
	}
	header p:first-Child {
		float:left;
	}
	header p:last-Child {
		float: right;
	}
	section{
		width: 100%;
		height: 90%;
		padding: 1%;
		border: 1px solid #eee;
	}
	#button {
		width: 100%;
		text-align: center;
		margin-top: 2%;
	}
</style>
</head>
<body>
	<div id="container">
		<header>
			<h3>글제목: ${notice.title}</h3>
			<p>글작성자: ${notice.writer}</p>
			<p>작성일시: ${notice.wdate}</p>
		</header>
		<section>
			<p>내용: ${notice.subject}</p>
		</section>
		<div id="button">
			<button type="button" onclick="location.href='noticeSelectList.do'">목록으로</button>		
		</div>
	</div>
</body>
</html>