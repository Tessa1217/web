<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title><tiles:getAsString name="title"/></title>
<style>
	#whole {
		width: 80%;
		position: relative;
		margin: 0 auto;
	}
	menu {
		width: 100%;
		height: 150px;
		margin: 0;
		padding: 2%;
	}
	section {
		width: 100%;
		height: 400px;
		padding: 2%;
	}
	footer {
		width: 100%;
		height: 150px;
		background: #eee;
		padding: 2%;
		line-height: 120px;
		text-align: center;
	}
</style>
</head>
<body>
<div id="whole">
	<menu><tiles:insertAttribute name="menu"/></menu>
	<section><tiles:insertAttribute name="body"/></section>
	<footer><tiles:insertAttribute name="footer"/></footer>
</div>
</body>
</html>