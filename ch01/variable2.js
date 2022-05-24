// variable2.js
// 원시형 vs. 참조형
// 원시형: string, number, boolean, undefined
// 참조형: object {}, array [], function ()
// 참조 타입은 값 변경 시 참조하는 값 자체도 변경될 수 있으므로 반드시 주의 필요

let str1 = 'Hello';
let str2 = str1;
console.log(`str1: ${str1}, str2: ${str2}`); // ``하면 표현식으로 읽어올 수 있음

str2 = 'Nice';
console.log(`str1: ${str1}, str2: ${str2}`);

let obj1 = {
  fname: 'Hong'
}

let obj2 = obj1;
console.log(`obj1 => ${obj1.fname}, obj2 => ${obj2.fname}`); // Hong, Hong
obj2.fname = 'Hwang';
console.log(`obj1 => ${obj1.fname}, obj2 => ${obj2.fname}`); // Hwang, Hwang 
// obj2가 참조하는 값은 obj1이기 때문에 obj2.fname의 값을 바꾸면 obj1.fname도 변경
obj2 = {
  fname: 'Park'
}
console.log(`obj1 => ${obj1.fname}, obj2 => ${obj2.fname}`); // Hwang, Park

const obj3 ={
  fname: 'Kim'
}
console.log(obj3.fname);
// obj3 = {
//   fname: 'NewPark'
// }

obj3.fname = 'New';
console.log(obj3.fname);
// 상수 오브젝트 자체는 변경할 수 없지만 오브젝트 내의 필드값은 변경 가능


// Symbol 타입 (새롭게 추가된 타입)
let sym1 = Symbol('text');
let sym2 = Symbol('text');
console.log(sym1 == sym2); // false
// 주로 오브젝트의 키 값으로 쓸 때 사용
let hong = {
  sym1: '홍길동'
}

