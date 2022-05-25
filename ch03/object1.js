// ch03/object.js

let obj = new Object();
obj.sname = '홍길동';
obj.age = 10;
obj['score'] = 80;
obj.getInfo = function() {
  return `이름:${this.sname}, 나이:${this.age}, 성적:${this.score}`;
}

console.log(obj.getInfo());

// ES2015
class Student {
  constructor(sno, sname, score) {
    this.sno = sno;
    this.sname = sname;
    this.score = score;
  }
  // 메소드
  getName() {
    return this.sname;
  }
  setName(sname) {
    this.sname = sname;
    return `새로운 이름: ${this.sname}`;
  }
  getInfo = function() {
    return `학번:${this.sno}, 이름:${this.sname}, 성적:${this.score}`;
  }

  setPhone(phone) {
    this.phone = phone;
  }

  // Setter (속성 숨기기)
  set gender(gen) {
    this._gender = gen;
  }
  // Getter
  get gender() {
    return this._gender;
  }

  getFullInfo = function() {
    if (this.phone != undefined) {
      return `학번:${this.sno}, 이름:${this.sname}, 성적:${this.score}, 연락처${this.phone}`;
    } else {
      return this.getInfo();
    }
  }
}

let s1 = new Student('001', '홍길동', 80);
console.log(`학생이름: ${s1.sname}`);
console.log(`학생점수:${s1.score}`);
s1.gender = 'Male';
console.log(s1.gender); // undefined로 숨길 수 있음 => Getter 생성 후 Male을 return
// Getter 또는 값을 리턴해주는 별도의 메소드가 없을 경우에는 undefined로 값 숨길 수 있음
console.log(s1.getName());
console.log(s1.setName('박길동'));
console.log(s1.getInfo());

let students = [];
students.push(s1);
students.push(new Student('002', '김민수', 83));
students[1].setPhone('010-3333-4444');
for (let student of students) { // 배열 for of
  console.log(student.getInfo());
}

students.forEach(val => {
  console.log(val.getInfo());
})

students.forEach(val => {
  console.log(val.getFullInfo());
})

class Estimate {
  constructor(param) {
    this.unit = param; // {type, price}
  }
  getInfo() {
    return this.unit; 
  }
  getEstimate(unittype, width, height) {
    let priceinfo = this.unit.find(item => item.type == unittype);
    return priceinfo.price * width * height;
  }
  addUnit(unit) {
    this.unit.push(unit);
  }
}
let unitinfo = [{type:"wood", price:100}, {type:"iron", price:300}, {type:"plastic", price:200}];
const estimator = new Estimate(unitinfo);
console.log(estimator.getInfo());

let result = estimator.getEstimate('plastic', 20, 20);
console.log(result);
estimator.addUnit({type:"metal", price:400});
console.log(estimator.getInfo());
