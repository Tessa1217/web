// basic1.js
// 오브젝트 타입 + 배열 => [오브젝트1, 오브젝트2, 오브젝트3]

// 오브젝트 타입
// k:v 형식 
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

const members = [hong, hwang, park];

console.log(members.length)

// 배열: for of
for (let member of members) { // hong, hwang, park
  // 오브젝트: for in
  for (let field in member) { // memberId, memberNm, memberAge
    console.log(field + ' => ' + member[field]);
  }
}

document.write('<h3>Hello</h3>');
document.write('<ul>');
document.write('<li>사과</li>');
document.write('<li>오렌지</li>');
document.write('<li>바나나</li>');
document.write('</ul>')

let table = '<table border = 1px>';
table += '<tr><th>회원아이디</th><th>회원이름</th><th>회원나이</th></tr>'
for (let member of members) {
  table += '<tr>'
  for (let field in member) {
    table += '<td>' + member[field] + '</td>'
  }
  table += '</tr>'
}
table += '</table>'
document.write(table);
