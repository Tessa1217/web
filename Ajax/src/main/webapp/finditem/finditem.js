document.addEventListener('DOMContentLoaded', mainFnc);

function mainFnc() {
	
	let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel velit metus. Vivamus faucibus sollicitudin sem, rutrum porttitor diam. Nam vulputate ac nunc vel rutrum. Ut nec rhoncus orci, non.';
	let strAry = str.split(' ');
	makeSpan(strAry);
	
	function makeSpan(strAry) {	
		strAry.forEach((elem) => {
			let span = document.createElement('span');
		  span.innerText = elem;
		  document.getElementById('container').append(span);
		})
	}
	
	let text = document.querySelector('input[name="word"]');
	
	text.addEventListener('change', function() {
		let ary = document.querySelectorAll('span');
		ary.forEach((elem) => {
			if (text.value == elem.innerHTML) {
				elem.remove(); 		
			}
			text.value = ''; 
		});
	})
	
	let timer = document.querySelector('input[name="timer"]');
	
}