document.addEventListener('DOMContentLoaded', formPrac);
function formPrac() {
  // id frm인 form의 name 속성들을 이용하여 값을 가지고 올 수 있음 
  // console.log(document.forms.frm.fname.value);
  // console.log(document.forms.frm.lname.value);
  // console.log(document.forms.frm.age.value);

  let members = [
    {first_name: '임경',
    last_name: '정',
    phone: '010-1111-2222',
    age: 20},
    {first_name: '근형',
      last_name: '박',
    phone: '010-3333-4444',
    age: 21},
    {first_name: '진형',
      last_name: '김',
    phone: '010-5555-6666',
    age: 20}];

    function dataInput(ary = []) {
      let tr, td, btn, chk;
      ary.forEach((elem, idx) => {
        tr = document.createElement('tr');
        console.log(tr);
        td = document.createElement('td');
        chk = document.createElement('input');
        chk.setAttribute('type', 'checkbox');
        td.append(chk);
        tr.append(td);
        for (let field in elem) {
          td = document.createElement('td');
          td.innerText = elem[field];
          tr.append(td);
        }
        td = document.createElement('td');
        btn = document.createElement('button');
        btn.innerText = "삭제";
        btn.addEventListener('click', (e) => e.target.parentElement.parentElement.remove())
        td.append(btn);
        tr.append(td);
        document.querySelector('#list').append(tr);
      })
    }
    dataInput(members);


 

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
  document.forms.frm.onsubmit = function(ev) {
    ev.preventDefault();
    // 사용자 입력값
    let first_name = this.fname.value;
    let last_name = this.lname.value;
    let phone = this.phone.value;
    let age = this.age.value;
    if (!first_name || !last_name || !phone || !age) {
      return alert("값을 입력해주세요");
    } else {
      let inputAry = [{first_name, last_name, phone, age}];
      dataInput(inputAry);
      console.log(this);
      this.fname.value = '';
      this.lname.value = '';
      this.phone.value = '';
      this.age.value = '';
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
}



