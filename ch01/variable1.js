// variable1.js
// 변수의 호이스팅
// var sum2; => var 변수의 경우 변수의 선언부를 위쪽으로 끌어올리고 밑에서 값을 할당
// var myName; => 함수도 마찬가지
// console.log(sum); Error cannot access sum before initialization
let sum = 10;
console.log(sum);

console.log(sum2); // undefined (에러가 뜨지 않음)
var sum2 = 100; // 변수의 호이스팅 (변수를 끌어올림)

console.log(myName()); // 함수는 참조값이라 바로 가져옴

// object(참조타입 변수) => object, array, function ... 
function myName() {
  return '홍길동';
}


// 전역 변수 (Global variable)
var result = 100;
// 지역 변수 (Local Variable)
function run() {
  var result = 0;
  console.log(result); // 0
}
run(); 
// console.log(result); Error: result is not defined;
console.log(result); // 100

var result2 = 100;
function run() {
  result2 = 0;
  console.log(result2); // 0 (전역 변수에 0이라는 값 할당)
}
run(); 
console.log(result2); // 0

// 블록 레벨
{
  var result = 50;
}
console.log(result); // 50

let rlet = 100;
{
  let rlet = 50; // let => 블록 단위의 스코프
  console.log(rlet);
}
console.log(rlet) // 100
