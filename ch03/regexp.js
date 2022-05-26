// ch03/regexp.js

// Regular Expression

let re = new RegExp(); 
re = /[0-9]/g
str1 = 'My phone number is 010-2222-4444';
console.log(str1.match(re)); // ['0', '1', '0', '2', '2', '2', '2', '4', '4', '4', '4']

str1 = "nice12 hello23";
str1 = str1.replace(/\d/g, ' '); // 숫자를 공백으로 변경
console.log(str1);
str1 = str1.replace(/\D/g, '*'); // 숫자 아닌 것들을 모두 *으로 변경
console.log(str1)

// regular expression => /expression/

// Modifiers
let modifier = [];
modifier.push({key:'g', val:'global math, find all matches'});
modifier.push({key:'i', val:'case-insensitive matching'});
modifier.push({key:'m', val:'perform multiline matching'});

// brackets
let brackets = [{key:'[abc]', val:'find any character between the brackets'}, 
{key:'[^abc]', val:'find any character NOT between the brackets'}, 
{key:'[0-9]', val:'find any digit (character between the brackets)'},
{key:'^[0-9]', val:'find any non-digit'},
{key:'(x|y)', val:'find any of the alternatives specified'}]; 


// map method (배열)
// map: A->B
let friends = [{name:'라이언', age: 5}, {name:'어피치', age:3}, {name:'콘', age:4}, {name:'프로도', age:2}];
let newFriends = friends.map(function (val, idx) {
  let obj = {};
  obj.sname = val.name;
  obj.age = val.age * 2;
  obj.sno = ++idx;
  return obj;
})
console.log(newFriends);

// filter - 조건을 만족하는 요소만 필터링해서 처리
let filterFriend = friends.filter(function(val, idx) {
  return idx > 2;
})
console.log(filterFriend);

// reduce - 두번째 파라미터: 누적하기 위한 초기값
newFriends = friends.reduce(function(a, b, c, d) {
  console.log(a, b, c, d);
  return b;
}, {})


// 탬플릿 리터럴사용
function tableTemplate(ary = []) {
  this.tag = '<table>';
  this.ary = ary;
  this.template = `<tr>${this.ary.map(function(k){return `<th>${k.key}</th>`})}</tr>
  <tr>${this.ary.map(function(v){return `<td>${v.val}</td>`})}</tr>`;
  this.tag += this.template;
  this.tag += '</table>';
  return this.tag;
}

let tag = tableTemplate(modifier);
document.write(tag);
tag = tableTemplate(brackets);
document.write(tag);