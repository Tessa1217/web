<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h3>반갑습니다.</h3>
	<form action = "sample.html" method = "post">
		<input type="text" name="name" value="유진"><br>
		<input type="number" name="age" value="27"><br>
		<input type="submit" value="요청"> <!-- 포스트 방식 -->
	</form>
	<a href = "sample.html?name=홍길동&age=20">Sample 페이지</a> <!-- GET 방식 -->
	<script>
		let xhtp = new XMLHttpRequest(); 
		xhtp.open('GET', 'testServ'); 
		xhtp.send(); 
		xhtp.onload = function() {
			// XML 데이터
			let result = xhtp.responseXML;
			console.log(result);
			let names = result.getElementsByTagName('name');
			console.log(names);
			for(let i = 0; i < names.length; i++) {
				console.log(names[i].textContent);
				let p = document.createElement('p');
				p.textContent = names[i].textContent;
				document.body.append(p);
			}
		}
	</script>
</body>
</html>