document.addEventListener('DOMContentLoaded', mainFnc);

function mainFnc() {
	
	// DB에서 랜덤으로 문장 받아서 SPAN 생성하기
	fetch('../StrServlet')
		.then(result => result.json())
		.then(json => getStr(json))
		.then(strAry => makeSpan(strAry))
		.catch(err => console.log(err));
		
	function getStr(data) {
		let str = data;
		let strAry = str.split(' ');
		return strAry;
	}
	
	function makeSpan(strAry) {	
		strAry.forEach((elem) => {
			let span = document.createElement('span');
		  span.innerText = elem;
		  document.getElementById('container').append(span);
		})
	}
	
	// Timer, Text 인풋 태
	let text = document.querySelector('input[name="word"]');
	let timer = document.querySelector('input[name="timer"]');
	
	// 타이머 인터벌 생성
	function interval() {
		let second = parseInt(timer.value) + 1;
		timer.value = second;
	}
	
	// 타이머 멈추기 
	function stop(func) {
		clearInterval(func);
		timer.value = 0;
	}
	
	// 텍스트 인풋 태그 클릭하면 타이머 시작 	
	text.onclick = function() {
		timer.value = 0;
		let current = setInterval(interval, 1000);
		text.addEventListener('change', function() { // 인풋 태그에 CHANGE 이벤트 일어날 경우 
			let ary = document.querySelectorAll('span');
			ary.forEach((elem) => {
				if (text.value == elem.innerHTML) {
					elem.remove(); 
					text.value = '';
					stop(current);
				}
			})
		})
	}
	
}