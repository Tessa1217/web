document.addEventListener('DOMContentLoaded', formPrac);
function formPrac() {
  // id frm인 form의 name 속성들을 이용하여 값을 가지고 올 수 있음 
  // console.log(document.forms.frm.fname.value);
  // console.log(document.forms.frm.lname.value);
  // console.log(document.forms.frm.age.value);

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
   

  // 선택 삭제
  let sdelete = document.querySelector('#delete');
  sdelete.addEventListener('click', delCheck);
    function delCheck() {
      let checkList = document.querySelectorAll('#list input[type="checkbox"]');
      checkList.forEach(chk => {
      if (chk.checked == true) {
        chk.parentElement.parentElement.remove(); 
      }
    })
  }

  // 변경 버튼
  let change = document.getElementById('revise');
  change.addEventListener('click', revision);
  function revision() {
    let key = document.forms.frm.member_id.value;
    let tr = document.getElementById('member_' + key);
    tr.children[4].innerText = document.forms.frm.phone.value;
    tr.children[5].innerText = document.forms.frm.age.value;
    removeElem(); 
  }

  // 입력이나 변경 후에 폼에 있는 요소 값들 지우기
  function removeElem() {
    let form = document.forms.frm;
    form.fname.value = '';
    form.lname.value = '';
    form.phone.value = '';
    form.age.value = '';
  }

  document.forms.frm.onsubmit = function(ev) {
    ev.preventDefault();
    // 사용자 입력값
    let first_name = this.fname.value;
    let last_name = this.lname.value;
    let phone = this.phone.value;
    let age = this.age.value;
    let id = parseInt(document.querySelector('#list > tr:last-Child').children[1].innerHTML) + 1;
    if (!first_name || !last_name || !phone || !age) {
      return alert("값을 입력해주세요");
    } else {
      let ary = [id, first_name, last_name, phone, age];
      makeRow(ary);
      removeElem();
    }
  }
      function makeRow(ary) {
        let tr, td, chk, btn;
        tr = document.createElement('tr');
        tr.setAttribute('id', 'member_' + ary[0]);
        tr.addEventListener('click', function() {
          document.forms.frm.member_id.value = tr.children[1].innerHTML;
          document.forms.frm.fname.value = tr.children[2].innerHTML;
          document.forms.frm.lname.value = tr.children[3].innerHTML;
          document.forms.frm.phone.value = tr.children[4].innerHTML;
          document.forms.frm.age.value = tr.children[5].innerHTML;
        }, false);
        ary.forEach((elem, ind) => {
          if (ind == 0) {
            td = document.createElement('td');
            chk = document.createElement('input');
            chk.setAttribute('type', 'checkbox');
            td.append(chk);
            tr.append(td);
          }
          td = document.createElement('td');
          td.innerText = elem;
          // tr.setAttribute('id', 'member_' + ary)
          tr.append(td);
          if (ind == ary.length - 1) {
            td = document.createElement('td');
            btn = document.createElement('button');
            btn.innerText = "삭제";
            btn.addEventListener('click', (e) => {
              e.stopPropagation(); 
              e.target.parentElement.parentElement.remove()}, true); // false:bubbling, true: capturing
            td.append(btn);
            tr.append(td);
            document.getElementById('list').append(tr);
          }
        })
    }
  

    
    // document.querySelectorAll('form>input').forEach(elem => {
    //   if (elem.type == 'text' || elem.type == 'number' || elem.type == 'tel') {
    //     inValues.push(elem.value);
    //   }
    // })
    
    
    // 태그
    // let trTag = document.createElement('tr');
    // let tdTag;
    // let chk; 
    // let btn;
    // inputAry.forEach((el, idx) => {
    //   if (idx == 0) {
    //     tdTag = document.createElement('td');
    //     chk = document.createElement('input');
    //     chk.setAttribute('type', 'checkbox');
    //     tdTag.append(chk);
    //     trTag.append(tdTag);
    //   }
    //   tdTag = document.createElement('td');
    //   tdTag.innerText = el;
    //   trTag.append(tdTag);
    //   if (idx == inputAry.length - 1) {
    //     tdTag = document.createElement('td');
    //     btn = document.createElement('button');
    //     // btn.addEventListener('click', deleteInfo);
    //     // function deleteInfo() {
    //     //   this.parentElement.parentElement.remove();
    //     // }

    //     // 화살표 함수를 쓸 경우에는 매개값으로 이벤트 안 넘겨주면 전체 다 삭제 (윈도우로 넘어감)
    //      // console.log(e.target); // 이벤트의 target = <button>삭제</button>
    //     btn.addEventListener('click', (e) => e.target.parentElement.parentElement.remove())
    //     btn.innerText = '삭제';
    //     tdTag.append(btn);
    //     trTag.append(tdTag);
    //   }
    // })
    // document.getElementById('list').append(trTag);
    
  }




