// ch03/object5.js

// 랜덤 숫자 생성
Math.random(); 
for (let i = 0; i < 5; i++) {
  let temp = parseInt(Math.random() * 10) + 1; 
  console.log(temp);
}

// 파이
console.log(Math.PI); // => 정적 속성 (property)

// 올림, 버림 
console.log(Math.ceil(3.3)); // 4
console.log(Math.floor(3.3)); // 3
console.log(Math.trunc(3.3)); // 3
console.log(Math.round(3.3)); // 3
console.log(Math.round(3.5)); // 4

// floor vs. trunc (음수일 경우)
console.log(Math.floor(-3.3)); // -3~-4 사이의 바닥값이므로 -4
console.log(Math.trunc(-3.3)); // -3 trunc => 무조건 소숫점 자르기 때문에 -3

// Closure: 함수가 실행되는 시점의 변수의 값을 기억
function outerFunc(name) {
  let saying = 'hello ' + name;
  return  function() {
    return saying;
  }
}

let f1 = outerFunc('Jordy'); 
// outerFunc이 끝났음에도 saying에 name이 그대로 담겨서 출력됨
console.log(f1());

let f2 = outerFunc('ChunShik');
console.log(f2());

function initFnc() {
  let cnt = 0;
  return function addCnt() {
    cnt += 1;
    console.log(cnt);
  }
  // addCnt();
  // console.log(cnt);
}
let add = initFnc(); 
add();
add(); 
add();
add();

let add2 = initFnc(); 
add2(); 
add2(); 
add2(); 
add2(); 
add2(); 
