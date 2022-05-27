// ch05/array1.js

// String.indexOf() => 인덱스/-1
// Array.indexOf() => 인덱스/-1
// Array.find() => 찾은 값/undefined

let arr1 =['펭수', '라이언', '어피치', '콘', '브라운', '무지'];
console.log(arr1.indexOf('펭수')); // 0
console.log(arr1.indexOf('펭수', 3)) // 두번째 매개값 = 시작위치, -1


let find_arr = arr1.find(el => el == '라이언');
console.log(find_arr);

let arr4 = ['펭수', '라이언', '어피치', '콘', '브라운', '무지', '라이언', '어피치', '콘', '콘'];
let index = -1;
do {
  index = arr4.indexOf('콘', index+1);
  console.log(index);
  arr4[index] = '네온';
  
} while (index >= 0);
console.log(arr4);

// Array.some(함수) => 조건 1건 true/false
// Array.every(함수) => 조건 모두 true/false

let true_false = arr1.some(el => el.length >= 3);
console.log(true_false); // true

let true_false_all = arr1.every(el => el.length >= 3);
console.log(true_false_all); // false (모든 요소들이 이 조건을 만족하지 않음)

let arr = [3, 4, 5, 6, 7];
arr = arr.every(el => el > 2);
console.log(arr); // true

// Array.sort(); 
console.log(arr1.sort());
console.log(arr1.sort().reverse());

let arr2 = [1, 3, 6, 7, 2, 4, 6];
console.log(arr2.sort());
console.log(arr2.sort().reverse());
arr2.sort((a, b) => {
  // a, b => 0보다 큰 값이 반환 b, a
  // a, b => 0보다 작은 값이 반환 a, b
  // if (a - b > 0) {
  //   return 100;
  // } else if (a - b < 0) {
  //   return -10;
  // }
  return a - b;
})

console.log(arr2);

let arr3 = [{name:'김민수', age:25}, {name:"최익수", age:23}, {name:"이민기", age:27}];
arr3.sort((el1, el2) => el1.age - el2.age);
arr3.sort((el1, el2) => el1.name > el2.name ? 1 : -1);
console.log(arr3);

let names = "정임경, 박근형, 김진형, 황하경, 류미래";
let nameAry = names.split(", ");
console.log(nameAry);
nameAry.sort((el1, el2) => el1 > el2 ? 1 : -1);
console.log(nameAry);