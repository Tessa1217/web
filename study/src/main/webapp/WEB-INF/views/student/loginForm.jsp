<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
	#formContainer{
		width: 80%;
		margin: 0 auto;
		text-align: center;
	}
	table {
		width: 100%;
		text-align: center;
	}
	table caption {
		font-size: xx-large;
		font-weight: bold;
	}
	form tr th {
		width: 40%;
	}
	form tr td {
		width: 60%;
	}
</style>
</head>
<body>
	<div id="formContainer">
		<form id="frm" action="login.do" method="post">
			<table>
				<caption>로그인</caption>
				<tr><th>아이디</th><td><input type="email" name="studentId" id="studentId" placeholder="아이디를 입력하세요" required="required" autofocus></td></tr>
				<tr><th>비밀번호</th><td><input type="password" name="password" id="password" placeholder="비밀번호 입력하세요"></td></tr>
				<tr><td><input type="submit" value="로그인"></td><td><input type="reset" value="취소"></td></tr>
			</table>
		</form>
	</div>
</body>
</html>