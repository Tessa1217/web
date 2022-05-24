// variable3.js

// 오브젝트 계층 구조
let parentObj = {
  fname: 'window',
  lname: 'close',
  childObj: {
    fname: 'document',
    lname: 'open',
    grandChildObj: {
      fname: 'doc',
      hobby: ['run', 'reading']
    }
  }
}
console.log(parentObj.childObj.grandChildObj.hobby[0]);

// window 함수 - Parsing
console.log(window);
let int1 = window.parseInt(3.234);
console.log(int1);
let int2 = window.parseInt('1.14');
console.log(int2);
let int3 = window.parseInt('Hello'); // 숫자 형태가 아니면 파싱이 불가능해서 NaN(not a number) 표시 
console.log(int3);

let double1 = parseFloat(3); // 윈도우 함수는 window. 생략 가능 
console.log(double1);
let double2 = parseFloat('2.45');
console.log(double2);
let double3 = parseFloat('1234Hello');
console.log(double3); // 1234 (바꿀 수 있는 곳까지 바꿔줌)
let double4 = parseFloat('Heeee1345.22');
console.log(double4); // 첫번째 값에 문자열이 들어오면 NaN
// 기본적으로 자바스크립스트는 읽어오는 숫자의 타입이 
// string이기 때문에 파싱하여서 처리 필요

console.log('3' + '7'); // 37
console.log(parseInt('3') + parseInt('7')); // 10

// window 함수 - 스트링 타입으로 변환
console.log(3);
console.log((3).toString());

let arr = [1, 2, 3, 4, 5];
console.log(arr); // (5) [1, 2, 3, 4, 5]
console.log(arr.toString()); // 배열 문자열로 변환 1,2,3,4,5
console.log(arr.join('-')) // 배열의 구분자를 , 에서 - 로 변경 => 1-2-3-4-5

// window.alert("Alert!");