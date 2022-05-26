// ch03/object7.js

// 객체의 복사

let friend = {
  fname: '죠르디',
  age: '15',
  getName: function() {return this.fname}
}

// 참조 주소값
let refFriend = friend;

// 객체 복사
let copyFriend = Object.assign({}, friend); // 새로운 오브젝트를 생성
copyFriend.fname = '춘식이';

console.log(copyFriend.getName(), friend.getName());

// 동일한 속성이 있을 경우 원본 객체의 값 덮어씀 + 없을 경우에는 그대로 생성
let copyFriend2 = Object.assign({fname:'라이언', hobby:'독서'}, friend);
console.log(copyFriend2); // 죠르디, 15, 독서, getName 메소드 
