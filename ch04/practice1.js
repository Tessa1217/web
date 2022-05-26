// ch04/practice1.js


let friends = [{name:'라이언', age: 5}, {name:'어피치', age:3}, {name:'콘', age:4}, {name:'프로도', age:2}];
let newFriends = friends.map(function (val, idx) {
  let obj = {};
  obj.sname = val.name;
  obj.age = val.age * 2;
  obj.sno = ++idx;
  return obj;
})
console.log(newFriends);
console.log(newFriends.join(' | '));
let tag = '<ul>'; 
tag += '<li>' + newFriends.join('</li><li>') + '</li>';
tag += '</ul>';
document.write(tag);


let friendAry = friends.map(function (val, idx) {
  val.sno = ++idx;
  let obj = [val.name, val.age, val.sno];
  return obj;
})

console.log(friendAry);


function createTable(ary = []) {
  this.tag = '<table><caption>테이블1</caption>';
  this.ary = ary;
  for (let i of this.ary) {
    this.tag += '<tr><td>' + i.join('</td><td>') + '</td></tr>';
  }
  this.tag += '</table>';
  return this.tag;
}

let table = createTable(friendAry);
document.write(table);

function createTable2(ary = []) {
  this.tag = '<table><caption>테이블2</caption>';
  this.ary = ary;
  this.tag += `<tr>${this.ary.map(elem => {return `<td>${elem.sno}</td><td>${elem.age}</td><td>${elem.sname}</td>`}).join('</tr>')}</tr>`;
  this.tag += '</table>';
  return this.tag;
}

let table2 = createTable2(newFriends);
document.write(table2);

function createTable3(ary = []) {
  this.tag = '<table><caption>테이블3</caption>';
  this.ary = ary;
  this.tag += `${this.ary.map(elem => '<tr><td>' + elem.join('</td><td>') + '</td></tr>')}`;
  this.tag += '</table>';
  return this.tag;
}

let table3 = createTable3(friendAry);
document.write(table3);

// reduce
// 파라미터 (previousValue, currentValue, currentIdx, array

let sumAge = friends.reduce(function(accum, val, idx, ary) {
  console.log(`idx: ${idx}, age: ${val.age}, accum:${accum}`);
  return accum + val.age;
}, 0)
console.log(sumAge); //

let ary = friends.reduce(function(accum, val, idx, ary) {
  // console.log(accum, val)
  console.log(accum); // [] => [{...}] => [{...}, {...}] ...
  accum.push(val);
  return accum;
}, []);

console.log(ary);

let objAry = friends.reduce(function(accum, val, idx, ary) {
  let obj = {};
  obj.name = val.name;
  obj.age = val.age;
  obj.sno = val.sno;
  if (obj.age > 3) {
    accum.push(obj);
  }
  return accum;
}, []);

console.log(objAry);

// tag
//<table><tr><td>idx</td><td>name</td><td>age</td><tr>...</table>
let tableTag = friends.reduce(function(accum, val, idx, ary) {
  let tag = '';
  if (idx == 0) {
    tag += '<table><caption>Reduce 테이블</caption>';
  }
  tag += `<tr><td>${++idx}</td><td>${val.name}</td><td>${val.age}</td></tr>`;
  if (idx == ary.length) {
    tag += '</table>';
  }
  return accum + tag;
}, '');
console.log(tableTag);
document.write(tableTag);

tableTag = friends.reduce(function(accum, val, idx, ary) {
  let tag = '';
  let rows = [];
  for (let field in val) {
    rows.push([field, val[field]]);
  }
  if (idx == 0) {
    tag += `<table><thead><tr><th>${rows.map((elem) => elem[0]).join('</th><th>')}</th></tr></thead>`
    tag += '<tbody>'
  }
  tag += `<tr><td>${rows.map(elem => elem[1]).join('</td><td>')}</td></tr>`;
  if (idx == friends.length - 1) {
    tag += '</tbody></table>';
  }
  return accum + tag;
}, '');

document.write(tableTag);