document.addEventListener('DOMContentLoaded', mainFunc);
function mainFunc() {
	
	// fetch는 promise 객체를 반환
	// promise 객체의 첫번째 파라미터: 성공했을 때 함수, 두번째 파라미터: 실패했을 때 함수
	let promise = new Promise(function(resolve, reject) {
		setTimeout(e=> {
			resolve('success');
		}, 2000);
	});
	// promise fulfilled(처리 완료), pending(처리 중), rejected(실패)
	// promise.then(). (정상 처리 시 실행할 메소드)
	// promise.catch(). (실패하였을 때 실행할 메소드)
	promise.then(function(result) { // resolve
		console.log(result)
	}).catch(function(error) { // reject
		console.log(error);
	}); 
	
	// 전체 리스트 출력 (GET 방식)
	fetch('../ajax.do?job=json')
			.then((result) => result.json()).then((json) => showList(json))
			.catch(function(fail) {
				console.log(fail);
			});
	
	function showList(json) {
		let list = document.getElementById('list');
		json.forEach(elem => list.append(makeTr(elem)));
	}
	
	// Fetch (POST 방식)
	function fetchFnc(CallBackFunc) {
		let formData = new FormData(myform);
		let params = [];
		for (let data of formData.entries()) {
			params.push(`${data[0]}=${data[1]}`);
		}
		params = params.join('&');
		console.log(params);
		fetch ('../ajax.do', {
			method: 'POST',
			headers: {'Content-Type':'application/x-www-form-urlencoded'},
			body: params
		}).then( result => result.json() )
		.then( json => CallBackFunc(json) )
		.catch( err => console.log(err) );
	}
	
	// INSERT (저장)
	function addList(data) {
		document.getElementById('list').append(makeTr(data));
	}
	
	let myform = document.forms.frm;
	myform.addEventListener('submit', function(e) {
		e.preventDefault();
		fetchFnc(addList);
	});
	
	// MODIFY (수정)
	function modifyList(data) {
		let oldTr = document.getElementById('key_' + data.employeeId);
		let newTr = makeTr(data);
		oldTr.replaceWith(newTr);
	}
	
	let change = document.getElementById('modify');
	change.addEventListener('click', function() {
		myform.cmd.value = 'update'; 
		fetchFnc(modifyList);	
	});
	
	// DELETE (삭제)
	function deleteList(data) {
		let tr = document.getElementById('key_' + data.employeeId);
		tr.remove(); 
	}
	
	let del = document.getElementById('delete');
	let valFields = ['empId', 'fname', 'lname', 'email', 'hdate', 'job'];
	del.addEventListener('click', function() {
		let delCheck = document.querySelectorAll('tr input[type="checkbox"]');
		for (let check of delCheck) {
			if (check.checked == true) {
				let param = 'cmd=delete&';
				let child = check.parentElement.parentElement.children;
				valFields.forEach((field, idx) => {
					if (idx == 4) {param += `${field}=${child[idx].innerText.substring(0, 10)}`;} 
					else {param += `${field}=${child[idx].innerText}`;}
					if (idx < child.length - 2) {
						param += '&';
					} 
				})
				fetch ('../ajax.do', {
					method: 'POST', 
					headers: {'Content-Type':'application/x-www-form-urlencoded'},
					body: param
				})
					.then(result => result.json())
					.then(json => deleteList(json))
					.catch(err => console.log(err))
			}
		}
	});

	
	let fields = ['employeeId', 'firstName', 'lastName', 'email', 'hireDate', 'jobId'];
	let tbody = document.getElementById('list');
	
	function makeTr(emp) {
		let tr = document.createElement('tr');
		let td;
		tr.addEventListener('click', trClick);
		tr.setAttribute('id', 'key_' + emp.employeeId);
		fields.forEach((field) => {
			td = document.createElement('td');
			td.innerText = emp[field];
			tr.append(td);
		});
		td = document.createElement('td');
		chk = document.createElement('input');
		chk.setAttribute('type', 'checkbox');
		td.append(chk);
		tr.append(td);
		return tr;
	};
	
	function trClick() {
		myform.empId.value = this.children[0].innerText;
		myform.fname.value = this.children[1].innerText;
		myform.lname.value = this.children[2].innerText;
  	myform.email.value = this.children[3].innerText;
  	myform.hdate.value = this.children[4].innerText.substring(0, 10);
  	myform.job.value = this.children[5].innerText;
	}
}