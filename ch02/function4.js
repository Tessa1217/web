// ch02/function4.js

var a = 1;
var b = 5;

function outerFunc() {
  function innerFunc() {
    a = b; 
  }
  console.log(a, b); // 1, 5
  a = 3;
  b = 4;
  console.log(a, b); // 3, 4
  innerFunc();
  console.log(a, b); // 4, 4
}

outerFunc(); 