// ch03/object6.js

// 오브젝트: 속성=속성값, 속성=함수(메소드) 추가

const friends = ['김민식', '황성우']
let obj = {
  sname:'홍길동',
  age: 20,
  getInfo: function() {
    return `이름:${this.sname}, 나이:${this.age}`;
  }
}

obj.phone = '010-1111-2222';
obj.friends = friends;

console.log(obj);
console.log(obj.getInfo());
console.log(obj.friends[0]);

// 객체 복사
let obj2 = obj;

let obj3 = Object.assign({}, obj);

console.log(obj2);
console.log(obj3);

obj2.sname = '박길동';

console.log(obj.sname);
console.log(obj2.sname);
console.log(obj3.sname);

// defineProperty - 객체 제어를 위해 Getter, Setter 사용
Object.defineProperty(obj, 'score', {
  set: function(score) {
    if (score <= 0) {
      alert('성적은 0보다 낮을 수 없습니다.')
    } else if (score >= 100) {
      alert('성적은 100보다 클 수 없습니다.')
    } else {
    this._score = score;
    }
  },
  get: function() {
    return this._score;
  }
});

obj.age = -10;
console.log(obj.age);

// Setter를 통해 속성값을 제어
// obj.score = 101; 
// obj.score = -10;

// _score를 통해 속성값 변경할 경우에는 값 변경 가능
obj._score = 101;
console.log(obj);