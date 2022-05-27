// ch05/array.js

// 인덱스(주소)

let arr = new Array();
arr = [];

// 자바스크립트는 다양한 타입의 값을 배열에 담을 수 있음

arr.push('홍길동');
arr.push(20);
arr.push({name:"Hwang", id:"1001"});
arr.push([1, 2, 3, 4, 5]);
arr.push(["사슴", "고양이", "강아지"]);
console.log(arr);

// filter 메소드
let stringAry = arr.filter(elem => typeof elem == 'string');
console.log(stringAry);

// 0번째 추가 (요소들 하나씩 밀림)
arr.unshift(["사슴", "고양이"]);
console.log(arr);

// 0번째 인덱스의 값을 test로 덮어씀 
arr[0] = "test";
console.log(arr);

// 0번째부터 하나씩 지움
arr.shift(); 
console.log(arr);

// 마지막 요소 제거
arr.pop(); 
console.log(arr);

// 특정한 위치에 추가하기
// 매개값: 위치값, 대체할 요소의 개수(크기), 대체할 요소(새로운 값)
arr.splice(1, 0, "김길동");
console.log(arr);
arr.splice(1, 1, "박길동");
console.log(arr);
arr.splice(1, 2, "최길동");
console.log(arr);
// 특정 위치의 값만 삭제할 경우 대체할 요소를 넣지 않으면 됨
arr.splice(0, 1);
console.log(arr); // 0번째 요소 삭제

arr.splice(1, 0, "add");
arr.splice(1, 0, "add1");
arr.splice(1, 0, "add2");
console.log(arr);
arr.splice(1, 3);
console.log(arr);

// 배열 합치기
let arr1 = ['a', 'b', 'c', 'd'];
let arr2 = ['d', 'e', 'f', 'g'];
arr1.forEach(el => arr2.push(el));
console.log(arr2);

let arr3 = arr1.concat(arr2);
console.log(arr3);

// 누적합 구하기
arr1 = [1, 2, 3, 4, 5];
let sum = arr1.reduce((accum, val, idx, ary) => {
  return accum + val;
}, 0);
console.log(sum);

let conciseSum = arr1.reduce((accum, val) => {return accum + val}, 0);
console.log(conciseSum);


let forSum = 0;
arr1.forEach(el => forSum += el);
console.log(forSum);

forSum = 0;
arr1.forEach(function(el) {
  forSum += el;
})
console.log(forSum);

// 중첩 배열 단일 배열로 변환
arr2 = [1, [2, 3], 4, [5, 6, 7]];
let arr2_concat = arr2.reduce((accum, val, idx, ary) => {
  return accum.concat(val);
}, []);
console.log(arr2_concat);

arr2 = [1, 2, [3, 4], [5, 6, 7, [10, 11, {name:"hong", age:20}]]];
arr2[0]; // 1
arr2[2] // [3, 4]
arr2[2][0]; // 3
arr2[3][3][2]['name'];

let arr_concat = arr2.reduce((accum, el) => {
  return accum.concat(el);
}, []);
console.log(arr_concat)

arr2 = [1, [2, 3], 4, [5, 6, [7, 8, 9]]];
arr_concat = arr2.reduce((accum, el) => {
  return accum.concat(el); 
}, [])
console.log(arr_concat);
console.log(arr2.join().split(","));