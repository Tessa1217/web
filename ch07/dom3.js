document.addEventListener('DOMContentLoaded', events);
function events() {
  let button = document.querySelector("button");
    // button.addEventListener('click', function() {

    // }) => 이런 형태도 가능하고 
    // 이런 형태도 가능
    button.addEventListener('click', addContent);
    function addContent() { // Call Back Function
      // console.log(this);

      // ul의 하위요소 li 추가
      // let li = document.createElement('li');
      let vname = document.getElementById('name').value;
      let vage = document.getElementById('age').value;
      console.log(vname, vage);
      if (!vname) { // 값이 0, '', null, undefined => false로 취급됨 
        return alert('이름값이 없습니다!');
      } else if (!vage) {
        return alert('나이값이 없습니다.')
      }
      // li.innerText = `${vname}, ${vage}`;
      // document.getElementById('list').append(li);

      // 테이블에 요소 추가
      let trTag = document.createElement('tr');
      let elAry = [`${vname}`, `${vage}`];
      for (let i = 0; i < elAry.length; i++) {
        let tdTag = document.createElement('td');
        tdTag.innerText = elAry[i];
        trTag.appendChild(tdTag);
      }
      console.log(trTag);
      document.getElementById('list').append(cloneElement());

      // 입력 항목 초기화
      document.getElementById('name').value = '';
      document.getElementById('age').value = '';
      document.getElementById('name').focus(); // autofocus 기능
    }
    
    // 클론하여 값만 변경하여 요소 추가하기 
    function cloneElement() {
      // cloneNode() = clonning method
      let cloneTr = document.getElementById('result').cloneNode(true); // true를 넣으면 하위 요소까지 다 카피
      cloneTr.firstElementChild.innerText = document.getElementById('name').value;
      cloneTr.lastElementChild.innerText = document.getElementById('age').value;
      return cloneTr;
    }

    // 클론 요소 연습
    // true일 경우 바디에 있는 태그들 전체 다 카피 가능
    // function cloneElement2() {
    //   let cloneBody = document.querySelector('body').cloneNode(true);
    //   console.log(cloneBody);
    //   cloneBody = document.querySelector('body').cloneNode(false);
    //   console.log(cloneBody);
    // }

    // cloneElement2();

}