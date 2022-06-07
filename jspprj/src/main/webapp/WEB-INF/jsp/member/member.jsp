<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>회원목록</h1>
<!-- EL 표현식 -->
	<c:forEach items="${empList}" var="e">
		${e.employeeId} : ${e.firstName} : ${e.lastName} : ${e.hireDate} : ${e.jobId} : ${e.salary} <br>
	</c:forEach>
</body>
</html>