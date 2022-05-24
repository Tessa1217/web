// variable.js

// 전역객체(가장 상위 객체: window), 전역변수

var avar = '안녕'; // 전역변수
let alet = '안녕'; 

console.log(this); // Window
// Window 오브젝트의 메소드 
// window.alert('반갑습니다.')
console.log(this.avar); // 안녕 => 윈도우가 가지고 있는 소속
console.log(this.alet); // undefined => let 변수는 window 객체의 소속이 되지 않음 

function run() {
  console.log(this.avar); // 안녕
  console.log(this.alet); // undefined
  console.log(avar); // 안녕
  console.log(alet); // 안녕
}
run();
