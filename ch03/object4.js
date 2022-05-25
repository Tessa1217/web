// ch03/object4.js

// 오브젝트: class 활용 
// 객체 리터럴 => let obj = {sname:'홍길동', score:80}
// 생성자 함수 function Student() {}


function Student(sname, age, score) {
  this.sname = sname;
  this.age = age;
  this.score = score;
  this.friends = [];
  this.getInfo = function() {
    return `이름:${this.sname}, 나이:${this.age}, 점수:${this.score}`;
  }
  this.addFriend = function(sname, age) {
    let friend = {};
    friend.sname = sname;
    friend.age = age;
    this.friends.push(friend);
  }
}

let s1 = new Student('홍길동', 20, 80);
console.log(s1);
let sInfo = s1.getInfo(); 
console.log(sInfo);
s1.addFriend('김민수', 21);
console.table(s1);

