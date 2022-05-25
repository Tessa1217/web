// ch02/function2.js

// 함수의 파라미터
function sum(n1, n2, n3) {
  return n1 + n2 + n3;
}

console.log(`결과:${sum(10)}`); // NaN (매개변수가 다 들어오지 않더라도 오류는 나지 않음)

function sum2(n1, n2 = 10, n3 = 10) {
  return n1 + n2 + n3;
}

console.log(`결과:${sum2(10)}`); // 결과 30

// 들어오는 매개 변수의 개수만큼 처리 (arguments 객체)
function sum3() {
  let sumElement = 0;
  for (let i = 0; i < arguments.length; i++) {
    sumElement += arguments[i];
  }
  return sumElement;
}

console.log(`결과:${sum3(10)}`); // 10
console.log(`결과:${sum3(10, 20)}`); // 30
console.log(`결과:${sum3(10, 20, 30)}`); // 60
console.log(`결과:${sum3(10, 20, 30, 40)}`); // 100

// 펼침 연산자
function sum4(a1, a2, ...arg) {
  if (a1 == undefined) {
    return 0; // return 구문 만나면 밑에 부분은 실행 안 됨
  }
  if (a2 == undefined) {
    return a1;
  }
  let result = 0;
  arg.forEach((val) => {
    result += val;
  });
  return a1 + a2 + result;
};

console.log(sum4(10)); // a1, a2 값이 없을 경우에는 NaN
//초기값 지정 후
console.log(sum4()); // 0
console.log(sum4(10, 20));
console.log(sum4(10, 20, 30, 40, 50)); // 150

// ...arg: 펼침연산자
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2[3] = 4;
console.log(arr1, arr2);
// 배열은 참조 타입이기 때문에 arr1의 3번째 인덱스에도 4 추가

let arr3 = [...arr1]; // 주소값 참조가 아닌 새로운 배열을 만들었기 때문에 
arr3.push(5);
console.log(arr1, arr3);
// arr3에는 5, arr1에는 5가 추가되지 않음
