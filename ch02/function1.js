// ch02/function1.js

const hong = {
  memberId: '001', 
  memberNm: '홍길동',
  memberAge: 20
}

const hwang = {
  memberId: '002',
  memberNm: '황길동',
  memberAge: 30
}

const park = {
  memberId: '003',
  memberNm: '박길동', 
  memberAge: 25
}

const friends = [hong, hwang, park];


// 테이블 생성
function createTable(ary=[]) { // 초기값으로 배열 선언
  let tag = '<table border = 1>';
  // tr, td 생성
  for (let i = 0; i < ary.length; i++) {
    if (i == 0) {
      tag += createHeader(ary[i]);
    }
    // tag += '<tbody><tr>'
    // for (let field in ary[i]) {
    //   tag += `<td>${ary[i][field]}</td>`;
    // }
    // tag += '</tr></tbody>';
    tag += createTr(ary[i]);
  }
  tag += '</table>';
  return tag;
}

document.write(createTable(friends));

// obj => 속성
function createHeader(obj = {}) {
  let thead = '<thead>';
  thead += '<tr>'
  for (let field in obj) {
    thead += `<th>${field}</th>`;
  }
  thead += '</tr></thead>';
  return thead;
}

function createTr(obj = {}) {
  let tbody = '<tbody>';
  tbody += '<tr>';
  for (let field in obj) {
    tbody += `<td>${obj[field]}</td>`;
  }
  tbody += '</tr></tbody>';
  return tbody;
}