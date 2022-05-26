  // ch04/practice3.js

  let lorem = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime illum rerum minima alias velit, aliquid tenetur, facere voluptates, numquam magnam excepturi odit ipsa eos cupiditate at quos quas vitae quae?`;
  let strAry = lorem.split(' ');
  console.log(strAry);

  for (let word of strAry) {
    console.log(word);
  }

  // startsWith(); 주어진 문자열로 시작하는 단어 찾아서 배열에 담기

  let find = prompt('찾을 문자열을 입력하세요 >>> ');
  let ary = [];
  for (let word of strAry) {
    let bool = word.startsWith(find);
    if (bool == true) {
      ary.push(word);
    }
  }
  console.log(ary);


  // includes(); 주어진 문자열이 포함되어있는지 찾기 

  let find2 = prompt('찾을 문자열을 입력하세요 >>> ');
  let newAry = [];
  for (let word of strAry) {
    let bool = word.includes(find2);
    if (bool == true) {
      newAry.push(word);
    }
  }
  console.log(newAry);

  // include 안 쓰고 주어진 문자열에 포함되어있는지 찾기

  let find3 = prompt('찾을 문자열을 입력하세요 >>> ');
  newAry = [];
  let bool = false;
  for (let word of strAry) {
    for (let i = 0; i < word.length; i++) {
      bool = word.startsWith(find3, i);
      if (bool == true) {
        newAry.push(word);
        break;
      }
    }
  }
  console.log(newAry);

  // 안 쓰고 찾기 2
  let findWord = prompt('단어 >>> ');
  let newAry2 = strAry.filter(elem => elem.indexOf(findWord) != -1);
  console.log(newAry2);