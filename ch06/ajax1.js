// ch06/ajax1.js

// Asynchronous Javascript And XML

// 동기 방식 vs. 비동기 방식
// 동기 방식의 경우 first - second - third (첫번째 함수가 끝나면 두번째 함수를 실행) - 차례차례 처리
// 비동기 방식의 경우 first - third - second (여러 요청)

// setTimeout(e => {
//   console.log('first');
// }, 1000);

// setTimeout(e => {
//   console.log('second');
// }, 3000);

// setTimeout(e => {
//   console.log('third');
// }, 2000);

// // 동기 방식의 예
// setTimeout(e => {
//   console.log('first');
//   setTimeout(e => {
//     console.log('second');
//     setTimeout(e => {
//       console.log('third');
//     }, 2000);
//   }, 3000);
// }, 1000);

// let xhtp = new XMLHttpRequest(); 
// console.log(xhtp);
// // 첫번째 매개값: 요청 방식, 두번째 매개값: 서버 페이지
// xhtp.open('GET', 'ajax.txt'); // 서버 페이지 요청
// xhtp.send();
// // on_ => 이벤트 관련 메소드
// xhtp.onload = function() {
//   let result = xhtp.responseText;
//   document.write(result);
// }

let xhtp2 = new XMLHttpRequest();
xhtp2.open('GET', 'MOCK_DATA.json');
xhtp2.send(); 

xhtp2.onload = function() {
  let jsonObj = JSON.parse(xhtp2.responseText); // JSON -> object 타입으로 변경 
  console.log(jsonObj);
  for (let obj of jsonObj) {
    let tr = document.createElement('tr');
    for (let field in obj) {
      let td = document.createElement('td');
      td.innerText = obj[field];
      tr.append(td);
    }
    document.querySelector('tbody').append(tr);
  }
}