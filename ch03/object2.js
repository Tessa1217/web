// ch03/object2.js

// 함수 table 생성
class Table {
  constructor(data) {
    this.ary = data;
    this.tag = '';
  }
  createThead() {
    let thead = '<thead><tr>';
    for (let field in this.ary[0]) {
      thead += `<th>${field}</th>`;
    }
    thead += '</tr></thead>';
    return thead;
  }
  createTbody() {
    let tbody = '<tbody>';
    for (let student of this.ary) {
      tbody += '<tr>'
      for (let field in student) {
        tbody += `<td>${student[field]}</td>`
      }
      tbody += '</tr>'
    }
    tbody += '</tbody>'
    return tbody;
  }
  createTable() {
    this.tag = '<table>';
    this.tag += this.createThead();
    this.tag += this.createTbody();
    this.tag += '</table>';
    return this.tag;
  }
}

// 메소드 추가 prototype 
Table.prototype.getTagInfo = function() {
  console.log(this.tag);
};
// 클래스 내에 직접 선언하지 않아도 Class.prototype.method를 통해 추가 가능 

let ary = [{sno:'1001', sname:'홍길동', score:80}, {sno:'1002', sname:'박길동', score:90}, {sno:'1003', sname:'최길동', score:60}];
let table = new Table(ary); 
let str = table.createTable();

document.write(str);
table.getTagInfo(); 