// ch03/object8.js

// Map

let obj = {
  sname: 'Hong',
  age:10
}

let map = new Map();
map.set('sname', 'hong');
map.set(10, 2);
map.set(obj, 3);

console.log(map);
console.log(map.keys()); // Map의 키값
console.log(map.values()); // Map의 value값
console.log(map.size); // 맵 요소 몇 개인지 체크하는 메소드

let val = map.get('sname');
console.log(val); // Get 메소드를 통해 값 호출

// 맵에는 같은 블록 레벨에서는 중복된 값을 넣을 수 없음
map.set('sname', 'hwang'); // 새롭게 요소를 추가하는 것이 아닌 기존 sname을 변경

console.log(map);

// For문을 통해 Map의 entry, key, val값 출력
for (let [key, val] of map.entries()) {
  console.log(key + ": " + val);
}

for (let key of map.keys()) {
  console.log(key);
}

for (let val of map.values()) {
  console.log(val);
}

map.clear(); // 요소들 지우기
console.log(map.size); // 0

console.clear(); 

const friends = [["홍길동", 20], ["김민수", 22], ["최민식", 25]];
map = new Map(friends);
console.log(map);
for (let [key, val] of map.entries()) {
  console.log(`이름:${key}, 나이:${val}`);
}


function createList(map = new Map()) {
  /// <li>속성 - 속성값</li>
  this.tag = '<ul>';
  for (let [key, val] of map.entries()) {
    this.tag += `<li>${key}-${val}</li>`;
  }
  this.tag += '</ul>';
  return this.tag;
}

let tag = createList(map);
document.write(tag);

