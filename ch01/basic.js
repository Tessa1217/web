// basic.js
// ES2015 => let, const
// 변수의 선언 : var, let
var fname = 'hello'; //string
console.log(typeof fname);
fname = 100; // number
console.log(typeof fname);
fname = true; // boolean
console.log(typeof fname);
fname = null; // '', 0 => null : object
console.log(typeof fname);

var lname;
console.log(typeof lname); // undefined (선언 전 상태)

var lname = 'Hong';
console.log(lname); // var로 변수 선언 시 동일명 변수 두 개 선언해도 에러 발생하지 않음

console.clear(); 
// let lname = 'Kim'; 
// Error: identifier 'lname' has already been declared

// let => 블록 단위 스코프 (지역 변수)
{
  let lname = 'Hwang';
  console.log(lname); // Hwang
}
{
  let lname = 'Park';
  console.log(lname); // Park
}
console.log(lname); // Hong

const age = 10; // 상수 선언
// age = 20; // Error: assignment to constant variable

// 학생: 이름, 나이, 학생 번호 (복합적인 데이터)
const student = {
  fname: '홍길동',
  age: 20,
  sno: '22-0001',
  //method
  info: function() {
    return this.fname + ', ' + this.age + ', ' + this.sno;
  }
} // object 타입으로 변수 선언
console.log(typeof student); // object
console.log(student); // k:v 형식으로 로그 출력
console.log(student.fname); // 홍길동 (fname 속성값)
console.log(student['age']); // 20 (age 속성값)
let fieldName = 'sno';
console.log(student[fieldName]); // 22-0001 (sno 속성값)
console.log(student.info()); // method() => method 실행

// 배열: 
const numAry = [10, 34, 15, 22];
console.log(numAry); // (4) [10, 34, 15, 22]
console.log(numAry[0]); // 10
console.log(numAry.length); // 4

// for문을 통해 배열 요소 출력
for (let i = 0; i < numAry.length; i++) {
  console.log(numAry[i]);
}

// 확장 for문 => for... of 문 
for (let num of numAry) {
  console.log(num);
} 

debugger;
// 오브젝트 확장 for문 => for ... in 문
for (let field in student) {
  console.log(field + ': ' + student[field]);
}
// field = "fname", student[field] = student["fname"]

