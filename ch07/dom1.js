// ch07/dom1.js

// 매개값으로 들어온 요소를 만들어줌 (HTML = TAG, DOM = ELEMENT)
let li = document.createElement('li');
let cherry = document.createTextNode('Cherry'); 
// TextNode는 ElementNode의 자식이므로 appendChild()를 통해 자식 노드로 추가
li.appendChild(cherry);
console.log(li); // <li></li>

// index.html에서 ul 태그를 찾아 위의 li를 자식으로 집어넣기
let ul = document.querySelector('ul'); // 매개값으로 들어온 값 중 첫번째 값을 찾음 
// document.querySelectorAll('ul'); // 매개값으로 들어온 값을 전부 다 찾음
console.log(ul); // null, 아직 DOM 요소들을 다 읽기 전에 해당 값을 찾으려고 하니 null값 반환
document.addEventListener('DOMContentLoaded', function() {
  // DOM 요소들을 먼저 읽어드리는 이벤트를 추가해주어야 함
  // 매개값: 이벤트 이름, 실행할 함수
  // 도큐먼트의 로직을 다 다운로드해서 읽고난 후에 함수를 실행
  let li = document.createElement('li');
  let txt = document.createTextNode('Cherry');
  li.appendChild(txt);
  let ul = document.querySelector('ul');
  // console.log(ul);
  ul.appendChild(li);
}); 


