// ch02/function.js

// 1. 함수 선언식 정의
function sum(num1, num2) { // 매개 변수에는 자료형 지정 필요 X
  return num1 + num2;
}

let num1 = 10;
let num2 = 20;
let sum1 = sum(num1, num2);
console.log(sum()); // NaN (undefined + undefined)
console.log(sum1); // 30

// 1-1. 초기값 지정하기
function sum2(num1, num2) {
  if (num1 == undefined) {
    num1 = 0;
  }
  if (num2 == undefined) {
    num2 = 1;
  }
  return num1 + num2;
}

console.log(sum2()); // 1, 매개값으로 안 들어올 경우 초기값 지정 가능
console.log(sum2(10, 30)); // 40

// 2. 함수표현식
// 변수 = string, number, boolean, undefined, object, function
let mySum = function(val1 = 0, val2 = 0) { // 초기값 지정
  return val1 + val2;
}

// 2-1. 익명 함수 호출
console.log(mySum(10, 20)); // 30
let yourSum = mySum;
console.log(yourSum()); // 0
console.log(yourSum(11, 22)); // 33

// 3. 화살표 함수 -> 함수나 메소드 매개값으로 사용되어질 때 많이 사용
let otherSum = (val1, val2) => {
  return val1 + val2;
}

console.log(otherSum(10, 50)); // 60

let otherSum2 = (val1, val2) => val1 - val2;

console.log(otherSum2(40, 20)); // 20 (return 구문 생략 가능)

// 4. 배열의 forEach(); 
const arr = [10, 22, 17, 23, 34, 42];
arr.forEach(function(n1, n2, a1) {
  console.log(n1, n2, a1);
}); // n1 = 값, n2 = 요소의 인덱스, a1 = 배열
// forEach의 매개값 => first = value(number), second = index(number), third array(array)

arr.forEach(function(val, idx, ary) {
  console.log(`val:${val}`)
  console.log(`idx:${idx}`)
  console.log(`ary:${ary}`)
});

let sumAry = 0;
// 짝수만 출력하기
arr.forEach(function(val, idx, ary) {
  if (val%2 == 0) {
    sumAry += val;
  }
});
console.log(`짝수의 합:${sumAry}`);

// 짝수번째만 출력하기
arr.forEach(function(val, idx, ary) {
  if (idx%2 == 0) {
    console.log(`짝수번째 수:${val}`);
  }
});

// 함수를 매개변수로
function getOddSum(val, idx, ary) {
  if (idx%2 == 1) {
    sumOdd += val;
  }
};
let sumOdd = 0;
arr.forEach(getOddSum);
console.log(sumOdd);

