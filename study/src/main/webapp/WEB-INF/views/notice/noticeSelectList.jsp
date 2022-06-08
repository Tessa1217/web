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
		margin: 2% auto;
		text-align: center;
	}
	table {
		width: 100%;
		border: 1px solid #000;
		border-collapse: collapse;
		text-align: center;
	}
	caption {
		font-size: xx-large;
		font-weight: bold;
		margin-bottom: 3%;
	}
	tbody tr:hover {
		background: #aaa;
		color: white;
		font-weight: bold;
	}
	th, td {
		width: 20%;
		border: 1px solid #000;
	}
	#button {
		width: 80%;
		margin: 2% auto;
		text-align: center;
	}
</style>
</head>
<body>
<div id = "container">
	<table>
		<caption>공지사항 목록</caption>
		<thead>
			<tr>
				<th>ID</th>
				<th>WRITER</th>
				<th>TITLE</th>
				<th>WDATE</th>
				<th>HIT</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${notices}" var="no">
			<tr onclick="noticeSelect(${no.id})">
				<td>${no.id}</td>
				<td>${no.writer}</td>
				<td>${no.title}</td>
				<td>${no.wdate}</td>
				<td>${no.hit}</td>
			</tr>
			</c:forEach>
		</tbody>
	</table>
</div>	
<div>
	<form id="frm" action="noticeSelect.do" method="post">
		<input type="hidden" id="id" name="id">
	</form>
</div>
<div id="button">
	<button type="button" onclick="location.href='home.do'">HOME</button>
</div>
<script>
	function noticeSelect(id) {
		frm.id.value=id;
		frm.submit(); 
		//location.href="noticeSelect.do?id="+id;
	}
</script>
</body>
</html>