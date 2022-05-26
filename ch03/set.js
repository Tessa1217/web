// ch03/set.js

// Set

// 속성 => 속성값: map
// 속성 => 속성: set

let set = new Set(); 
set.add("홍길동");
set.add(20);
set.add({});
set.add("홍길동"); // 중복된 값은 허용하지 않음
console.log(set.size);

console.log(set.entries()); // {'홍길동' => '홍길동', 20 => 20, {…} => {…}}

for (let [key, val] of set.entries()) {
  console.log(`key:${key} => val:${val}`);
}

set.keys(); // 키 반환
set.values(); // 값 반환

let obj1 = {name:"Hong"};
let obj2 = {name:"Hong"};
let obj3 = obj2;

set.add(obj1);
set.add(obj2);
set.add(obj3);

console.log(set.size);
for (let [key, val] of set.entries()) {
  console.log(key + ":" + val);
}