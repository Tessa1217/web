<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
	#show {
		width: 300px;
		padding: 20px;
		border: 2px dotted #000;
		margin: 10px;
	}
</style>
</head>
<body>
	<%
		String user = request.getParameter("user");
	%>
	<div id="show">
		<div class="row">Message</div>
	</div>
	내용: <input type="text" name="content">
	작성자: <input type="text" name="writer" value="<%=user%>">
	<input type="button" name="submit" value="SUBMIT">
	<script>
	let lastMsg = -1;
		setInterval((e) => {
			fetch('message')
				.then(result => result.json())
				.then(json => {
					
					let divs = document.querySelectorAll('#show div');
					divs.forEach((elem) => elem.remove());
					
					fitAry = json.filter(elem => {
						return elem.msgId > lastMsg - 14;
					});
					
					fitAry.forEach((elem) => {
						lastMsg = elem.msgId;
						console.log(lastMsg);
						document.getElementById('show').append(createRow(elem))
					});
					
				})
				.catch(err => console.log(err))
		}, 3000);
		
		function createRow(data) {
			let div = document.createElement('div');
			div.setAttribute('class', 'row');
			let txt = document.createTextNode(data.writer + '> ' + data.content);
			div.append(txt);
			return div;
		}
		
		let btn = document.querySelector('input[type="button"]');
		btn.addEventListener('click', function(e) {
			e.preventDefault(); 
			fetchFnc();
		});
		
		function fetchFnc() {
			let content = document.querySelector('input[name="content"]').value;
			let writer = document.querySelector('input[name="writer"]').value;
			let params = 'content=' + content + '&writer=' + writer;
			fetch('message', {
				method: 'POST',
				headers: {'Content-Type':'application/x-www-form-urlencoded'},
				body: params
			}).then(result => {
				document.querySelector('input[name="content"]').value = '';
				// document.querySelector('input[name="writer"]').value = '';
				})
			.catch( err => console.log(err) )
		}
		
	</script>
</body>
</html>