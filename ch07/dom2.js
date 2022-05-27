document.addEventListener('DOMContentLoaded', function() {
  // 친구 배열 생성 
  let friendAry = ['김민서', '권유진', '김종혁', '우영원', '정임경', '류미래'];
  // 친구 배열 이름 순으로 정렬 
  friendAry.sort((el1, el2) => el1 > el2 ? 1 : -1);
  // 친구 배열 forEach 문 돌면서 리스트 태그 생성하여 ul 태그 밑에 자식으로 추가
  friendAry.forEach((friend) => {
    let li = document.createElement('li');
    li.addEventListener('mouseover', function() {
      // console.log(this); // Event에서 This = <li>text</li> (이벤트를 받는 대상)
      this.style.background = 'Red';
    });
    li.addEventListener('mouseout', function() {
      this.style.background = 'None';
    })
    let fName = document.createTextNode(friend);
    li.appendChild(fName);
    document.querySelector("#newfriends").appendChild(li);

    let button = document.createElement('button');
    button.innerText = '삭제';
    li.appendChild(button);

    button.addEventListener('click', function() {
      // li.remove(); 
      this.parentElement.remove(); // 버튼 태그의 부모 요소
    })
  })
  let friends = document.querySelectorAll("#friends > li");
  friends.forEach((friend) => {
    friend.addEventListener('mouseover', function() {
      this.style.background = 'lightblue';
    });
    friend.addEventListener('mouseout', function() {
      this.style.background = 'none';
    })
  });
  let conn = document.querySelectorAll('.keyword > li');
  conn.forEach((keyword) => {
    keyword.addEventListener('mouseover', function() {
      this.style.background = 'lightgreen';
    })
    keyword.addEventListener('mouseout', function() {
      this.style.background = 'none';
    })
  })
})
