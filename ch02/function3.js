// ch02/function3.js

// 고차함수 => 변수할당, 함수에서 반환되는 함수
let arr = [];

// 메소드의 매개값으로 함수 사용
arr.forEach(function() {

});

// 함수의 반환값으로 함수 사용 
function addFnc() {
  return function(a, b) {
    return a + b;
  }
}

let fnc = addFnc(); 
console.log(fnc(10, 20)); // 30

const s1 = {
  sno:'001',
  score: 80
}

const s2 = {
  sno:'002',
  score: 90
}

arr.push(s1);
arr.push(s2);

// 함수의 조건을 만족하는 새로운 배열을 만드는 함수
let newArry = arr.filter(function(val, idx, ary)  {
  return val.score >= 90; // 해당 조건을 만족하는 오브젝트를 반환
}); 

console.log(newArry); // [{...}] => 배열 요소 안에 오브젝트가 하나 있음이라는 의미
// 0: {sno:'002', score:90}
