document.addEventListener('DOMContentLoaded', mainFunc);
function mainFunc() {
    let members = [
        {member_id: 1, 
        first_name: '임경',
        last_name: '정',
        phone: '010-1111-2222',
        age: 20
        },
        {member_id: 2, 
        first_name: '근형',
        last_name: '박',
        phone: '010-3333-4444',
        age: 21},
        {member_id: 3, 
        first_name: '진형',
        last_name: '김',
        phone: '010-5555-6666',
        age: 20}];
    
    members.forEach((member) => {
        let ary = [];
        for (let field in member) {
            ary.push(member[field]);
        }
        makeRow(ary);
    });
       
    document.forms.frm.onsubmit = function(ev) {
        ev.preventDefault(); 
        // Page 이동 기능 차단
        let fname = this.fname.value;
        let lname = this.lname.value;
        let phone = this.phone.value;
        let age = this.age.value;
        let id = parseInt(document.querySelector('#list > tr:last-Child').children[1].innerText) + 1;
        let ary = [id, fname, lname, phone, age];
        ary.forEach(el => {
            if (!el) {
                return alert('값을 입력해주세요');
            }
        });
        makeRow(ary);
        removeElem(); 
    }

    let change = document.getElementById('revise');
    console.log(change);
    change.addEventListener('click', revision);
    function revision() {
    let key = document.forms.frm.member_id.value;
    let tr = document.getElementById('member_' + key);
    tr.children[4].innerText = document.forms.frm.phone.value;
    tr.children[5].innerText = document.forms.frm.age.value;
    removeElem(); 
    }    

    let sdelete = document.querySelector('#delete');
    sdelete.addEventListener('click', function() {
        let checks = document.querySelectorAll('#list input[type="checkbox"]');
        checks.forEach((chk) => {
            if (chk.checked == true) {
                chk.parentElement.parentElement.remove(); 
            }
        })
    });
}

function makeRow(ary = []) {
    let frm = document.forms.frm;
    let tr, td, chk, btn;
    tr = document.createElement('tr');
    tr.setAttribute('id', 'member_' + ary[0]);
    tr.addEventListener('click', function() {
        frm.member_id.value = tr.children[1].innerText;
        frm.fname.value = tr.children[2].innerText;
        frm.lname.value = tr.children[3].innerText;
        frm.phone.value = tr.children[4].innerText;
        frm.age.value = tr.children[5].innerText;
    }, false);
    ary.forEach((elem, idx) => {
        if (idx == 0) {
            td = document.createElement('td');
            chk = document.createElement('input');
            chk.setAttribute('type', 'checkbox');
            td.append(chk);
            tr.append(td);
        }
        td = document.createElement('td');
        td.innerText = elem;
        tr.append(td);
        if (idx == ary.length - 1) {
            td = document.createElement('td');
            btn = document.createElement('button');
            btn.innerText = "삭제";
            btn.addEventListener('click', (e) => {
                e.stopPropagation(); 
                e.target.parentElement.parentElement.remove()
            }, true);
            td.append(btn);
            tr.append(td);
        }
        document.getElementById('list').append(tr);
    })
}

function removeElem() {
    let frm = document.forms.frm;
    frm.fname.value = '';
    frm.lname.value = '';
    frm.phone.value = '';
    frm.age.value = '';
}


