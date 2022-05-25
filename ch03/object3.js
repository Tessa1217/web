// ch03/object3.js

// 인스턴스: 필드, 생성자, 메소드
// 프로토타입: 메소드(함수)의 참조값

let today = new Date(); // 현재 시점 기준으로 년원일 시분초 정보 생성
console.log(today); // Wed May 25 2022 현재 시간 GMT+0900 (한국 표준시)
// Date 클래스의 다양한 메소드 
console.log(today.toLocaleDateString()); // 2022. 5. 25
console.log(today.toDateString()); // Wed May 25 2022
console.log(today.toLocaleTimeString()); // 오후 몇 시 몇 분 몇 초
console.log(today.toLocaleString()); // toLocaleDateString + toLocaleTimeString 
console.log(today.getDay()); // 3 (수요일)
console.log(today.getFullYear()); // 2022

// 프로토타입으로 직접 정의한 메소드 추가/실행
Date.prototype.toCustomString = function() {
  let year = this.getFullYear();
  let month = this.getMonth() + 1; // 0~11
  let date = this.getDate(); 
  return `${year}년 ${month}월 ${date}일`;
}

let customToday = today.toCustomString(); 
console.log(customToday);

// yyyy-mm-dd 형식
today = new Date('2022-11-01');
Date.prototype.toCustomString2 = function() {
  let year = this.getFullYear(); 
  let month = ('0' + (this.getMonth() + 1)).slice(-2); // 세자리일 경우 뒤에서 2자리만 잘라서 가져옴 (11월의 경우는 011이므로 뒤에 2자리만 잘라옴)
  let date = this.getDate();
  return `${year}-${month}-${date}`;
}
console.log(today.toCustomString2());

// 요일 정보
today = new Date('2022-05-01');
console.log(today.getDay()); // 0~6

// 해당 월의 마지막 날 
today = new Date(2022, 5, 0); // 2022-5-31 (5월의 마지막날)
today = new Date(2022, 5, 1); // 2022-6-01 
console.log(today.getDay()); // 요일 정보 
console.log(today.getDate()); //날짜 정보

let year = 2022;
let month = 5; // 6월
today = new Date(year, month, 0); // 5월의 마지막 날
console.log(today.toCustomString2());
today = new Date(year, month, 1); 
console.log(today.toCustomString()); // 6월 첫째날
today = new Date(year, month+1, 0); 
console.log(today.toCustomString()); // 6월 마지막날

let day = today.getDay(); 
console.log(day);
let lastDate = today.getDate();
console.log(lastDate);

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']
function showCalendar(year, mon) {
  document.write(`<h3>${year}년 ${mon+1}월 달력</h3>`);
  let today = new Date(year, mon, 1);
  let lastdate = new Date(year, mon+1, 0);
  let day = new Date();
  tag = '<table><thead><tr>';
  for (let day of days) {
    tag += `<th>${day}</th>`
  }
  tag += '</thead></tr>';
  tag += '<tbody><tr>';
  for (let i = 0; i < today.getDay(); i++) {
    tag += `<td></td>`;
  }
  for (let date = 1; date <= lastdate.getDate(); date++) {
    console.log(day.getDate());
    // 오늘 날짜에 색깔 바꾸기
    // if (date == day.getDate()) {
    //   tag += `<td id = "colordate">${date}</td>`;
    //   continue;
    // }
    let dateOfToday = day.getDate();
    // 삼항 연산자 표현식
    tag += `${dateOfToday==date?'<td style = "color:violet;">':'<td>'}${date}</td>`;
    // tag += `<td>${date}</td>`;
    if ((date + today.getDay())%7 == 0) {
      tag += '</tr><tr>';
    }
  }
  tag += '</tr>';
  tag += '</table>';
  document.write(tag);
}

showCalendar(2022, 11);
