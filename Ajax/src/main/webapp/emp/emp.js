document.addEventListener('DOMContentLoaded', mainFunc);
function mainFunc() {
	
	function ajaxPost(CallBackFunc) {
		let paramName = ['empId', 'cmd', 'fname', 'lname', 'email', 'hdate', 'job'];
		let empId = myform.empId.value;
		let fname = myform.fname.value;
  		let lname = myform.lname.value;
  		let email = myform.email.value;
  		let hdate = myform.hdate.value;
  		let job = myform.job.value;
  		if (CallBackFunc == ajaxChange) {
			myform.cmd.value = 'update';
		} else if (CallBackFunc == ajaxDelete) {
			myform.cmd.value = 'delete';
		}
  		let cmd = myform.cmd.value;
  		let paramAry = [empId, cmd, fname, lname, email, hdate, job];
  		let params = '';
  		if (CallBackFunc == ajaxInsert) {
			for (let i = 1; i < paramAry.length; i++) {
				params += `${paramName[i]}=${paramAry[i]}`;
				if (i != paramAry.length - 1) {
					params += '&';
				}
			}
		} else if (CallBackFunc == ajaxChange || CallBackFunc == ajaxDelete){
			paramAry.forEach((parameter, idx) => {
				params += `${paramName[idx]}=${parameter}`;
				if (idx != paramAry.length - 1) {
					params += '&';
				}
			});	
		} 
		let xhtp = new XMLHttpRequest(); 
		xhtp.open('POST', '../ajax.do');
		xhtp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhtp.send(params);
		xhtp.onload = function() {
			let data = JSON.parse(xhtp.responseText);
			CallBackFunc(data);
		}
		resetValue(); 
	}
	
	function ajaxInsert(data) {
		let tbody = document.getElementById('list');
		tbody.append(makeTr(data));
	}
	
	function ajaxChange(data) {
		let oldTr = document.getElementById('key_' + data.employeeId);
		let newTr = makeTr(data);
		oldTr.parentNode.replaceChild(newTr, oldTr);
	}
	
	function ajaxDelete(data) {
		let deleteTr = document.getElementById('key_' + data.employeeId);
		deleteTr.remove(); 
	}
	
	function resetValue() {
		for (let i = 0; i < 10; i++) {
			myform.children[i].value = '';
		}
	}
	
	let fields = ['employeeId', 'firstName', 'lastName', 'email', 'hireDate', 'jobId'];
	let tbody = document.getElementById('list');
	let myform = document.forms.frm;
	let xhtp = new XMLHttpRequest(); 
	xhtp.open('GET', '../ajax.do?job=json');
	xhtp.send(); 
	xhtp.onload = function() {
		console.log(xhtp.responseText);
		let data = JSON.parse(xhtp.responseText);
		data.forEach((emp) => {
			tbody.append(makeTr(emp));
		})
	}
	myform.onsubmit = function(ev) {
		ev.preventDefault(); 
		ajaxPost(ajaxInsert);
	}
	
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
		return tr;
	};
	function trClick() {
		myform.empId.value = this.children[0].innerText;
		myform.fname.value = this.children[1].innerText;
		myform.lname.value = this.children[2].innerText;
  		myform.email.value = this.children[3].innerText;
  		myform.hdate.value = this.children[4].innerText.substring(0, 10);
  		myform.job.value = this.children[5].innerText;
  		document.getElementById('delete').style.visibility = "visible";
	}
	
	let change = document.getElementById('modify');
	change.addEventListener('click', function(ev) {
		ev.preventDefault(); 
		ajaxPost(ajaxChange);
	});
	
	let deleteEmp = document.getElementById('delete');
	deleteEmp.addEventListener('click', function(ev) {
		ev.preventDefault(); 
		ajaxPost(ajaxDelete);
	});
}