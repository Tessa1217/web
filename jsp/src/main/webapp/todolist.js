document.addEventListener('DOMContentLoaded', mainFnc);

function mainFnc() {
	// 전역변수 선언 
	let ul = document.getElementById('myUL');
	let cmd = document.querySelector('input[name="cmd"]');
	let frm = document.forms.todoForm;
	
	// 전체 리스트 받아오기 ('GET')
	fetch("toDoServ")
		.then(result => result.json())
		.then(json => json.forEach(elem => makeLi(elem)))
		.catch(err => console.log(err));
	
	// 새로운 LI 생성 (elem이 오브젝트일 때 스트링일 때)
	function makeLi(elem) {
		let li = document.createElement('li');
		if (typeof elem == "object") { 
			li.innerText = elem.todo;
			if (elem.checked == 'y') {
				li.setAttribute('class', 'checked');
			}
		} else if (typeof elem == "string") { 
			li.innerText = elem;
		}
		let span = makeSpan(); 
		li.append(span);
		ul.append(li);
	}
	
	// SPAN 생성
	function makeSpan() {
		let span = document.createElement('span');
		span.append(document.createTextNode("\u00D7"));
		span.className = "close";
		span.addEventListener('click', function(e) {
			deleteFnc(e);
		});
		return span;
	}
	
	// SPAN 클릭 시 삭제 
	function deleteFnc(e) {
		cmd.value = "delete";
		let li = e.target.parentElement; // event SPAN의 부모 => LI
		let param = `todo=${li.childNodes[0].data}&checked=n&cmd=${cmd.value}`;
		fetchFnc(param);
		li.remove(); 
	}
	
	// LI 체크 시 체크 이벤트 생성 + 업데이트 
	ul.addEventListener('click', function(ev) {
	  if (ev.target.tagName === 'LI') {
	    ev.target.classList.toggle('checked');
	    let check = ev.target.getAttribute('class');
	    let checked;
	    if (!check) {
	    	checked = 'n';
	    } else if (check == 'checked') {
	    	checked = 'y';
	    }
	    cmd.value = "update";
	    let param = `todo=${ev.target.childNodes[0].data}&checked=${checked}&cmd=${cmd.value}`;
	    fetchFnc(param);
	  }
	}, false);
	
	// 데이터 삽입 + 새로운 LI 생성
	frm.onsubmit = function(e) {
		e.preventDefault();
		let todo = document.getElementById("myInput").value;
		cmd.value = "insert";
		if (todo === '') {
			alert("You must write something!");
		} else {
			let param = `todo=${todo}&checked=n&cmd=${cmd.value}`;
			fetchFnc(param);
			makeLi(todo);
			document.getElementById("myInput").value = '';
		}
	}
	
	// FETCH ('POST')
	function fetchFnc(param) {
		fetch('toDoServ', {
			method: 'POST',
			headers: {'Content-Type':'application/x-www-form-urlencoded'},
			body: param
		})
		.catch(err => console.log(err));
	}
}