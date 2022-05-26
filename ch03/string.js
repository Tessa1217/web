// ch03/string.js

// string vs. objct
let str1 = '홍길동'; // string
let str2 = new String("홍길동"); // object

console.log(str1, str2);
console.log(typeof str1, typeof str2);
console.log(str1 == str2); // true (들어있는 값 비교)
console.log(typeof str1 == typeof str2); // false (타입 비교)
console.log(str1 === str2); // false (값과 타입까지 같아야만 true 반환)

// 문자열 관련 메소드

// replace  => 찾을 문자열을 대체문자로 변경 
// 정규표현식에서 s는 공백을 의미, +는 1개 이상을 의미
String.prototype.rtrim = function () {
  return this.replace(/\s+$/, '');
}
console.log(str1.rtrim());

str1 = '    how are you    to    day everyone.   ';
let noSpace = str1.trim(); 
console.log(noSpace); // 좌우 공백만 사라짐
noSpace = str1.trimStart(); 
console.log(noSpace); // 좌측 공백만 사라짐
noSpace = str1.trimEnd(); 
console.log(noSpace); // 우측 공백만 사라짐
noSpace = str1.replace('how', 'what').trim();
console.log(noSpace); // how => what으로 변경 
noSpace = str1.replace(/\s/g, ''); 
console.log(noSpace); // howareyoutodayeveryone, 공백을 전부 제거
noSpace = str1.replace(/\s+/g, ' '); // 연달아 있는 공백을 공백 하나로 변경, how are you to day everyone
console.log(noSpace);

// split() => 문자열을 매개값을 기준으로 잘라서 배열로 생성
// join(매개값) => 배열타입을 문자로 변경, 매개값을 구분자로 사용
str1 = "apple, banana, pineapple, watermelon"
let fruit = str1.split(', ');
console.log(fruit);
let backToStr = fruit.join(", ");
console.log(backToStr);
console.log(str1 === backToStr); // true

str1 = '     how are you    to day everyone.       ';
// filter() -> 파라미터로 반드시 함수가 들어옴
noSpace = str1.split(' ').filter(function(val, idx, arry) {return val != ''});
noSpace = str1.split(' ').filter(element => element != ''); // 화살표 함수식으로도 사용 가능
console.log(noSpace);
noSpace = noSpace.join(' ');
console.log(noSpace); // 배열의 값들을 공백을 기준으로 조인함


// trim - 공백 제거 
str1 = '  홍 길 동   ';
console.log(str1.trim()); // 좌우 공백만 제거
console.log(str1.trimEnd()); // 오른쪽 공백만 제거
console.log(str1.trimStart()); // 왼쪽 공백만 제거

// slice - 문자열 자르기
str1 = 'This is the only one story';
let str3 = str1.slice(8, 12);
console.log(str3, str3.length); // the'공백 있음' 4 
let str4 = str1.slice(8, 12).trim(); 
console.log(str4, str4.length); // the 3

// substring
// slice vs. substring: 인덱스 값 음수로 입력 시 subString은 음수 값을 0으로 대체하여 파라미터 순서를 바꾸어 문자열 반환
str3 = str1.slice(10, -8);
str4 = str1.substring(10, -8);
console.log(str3); // e only o
console.log(str4); // This is th (0~9까지 반환)

//substr
// 두번째 파라미터가 가져올 문자열 길이
str3 = str1.substr(8, 11);
console.log(str3, str3.length); // length = 11
// 길이에 음수는 사용할 수 없고 음수가 입력되면 0으로 변경되어 빈 문자열 반환
console.log(str1.substr(8, -11)); // 빈 문자열 

// 문자열 변환 메소드
// toString()

let num = 123;
console.log(typeof num); // number
console.log(num.toString()); // 123
console.log(typeof num.toString()); // string
let strNum = num.toString(); 
console.log(strNum == num); // true
console.log(strNum === num); // false (타입이 같지 않음)


// 문자열 찾기
// String.indexOf(); => 찾은 문자열의 시작 위치 얻기
// String.lastIndexOf(); => 문자열 찾기를 뒤에서부터 검색

str1 = 'good morning, good after, good evening, and good night';
let idx = str1.indexOf('good');
console.log(idx); // 0
let lastIdx = str1.lastIndexOf('good');
console.log(lastIdx); // 44
// 찾는 문자열 없을 경우에는 -1 반환
console.log(str1.indexOf('aaaaa')); // -1

// 배열에서 문자열 찾기
let strAry = ['good', 'morning', 'good', 'afternoon', 'bad', 'evening'];
console.log(strAry.indexOf('morning')); // 1
console.log(strAry.lastIndexOf('good')); // 2
console.log(strAry.indexOf('baddd')); // -1

// 특정 위치의 문자 1개를 얻기
// charAt(idx)
let character = str1.charAt(20);
console.log(character); // f

// 특정 문자열이 포함되어 있는지 찾기
// includes() => boolean 타입 반환
let inc = str1.includes('good');
console.log(inc); // true
inc = str1.includes('bad');
console.log(inc); // false


// 대소문자 구분 없이 문자열 위치 찾기
str1 = 'Good morning, Good afternoon, Good evening';
console.log(str1.includes('good')); // false
// 대소문자로 변환 메소드 = toUpper, toLower
console.log(str1.toUpperCase().includes('GOOD')); // true
console.log(str1.toLowerCase().includes('good')); // true
// 대소문자 구분 없이 찾기
// /찾는문자열/i = i=> 대소문자를 무시하는 정규 표현식 
console.log(str1.search(/good/i)); // 0을 반환

// 정규표현식과 일치하는 문자열 찾기
// match(); 
console.log(str1.match(/good/gi)); // g => 전체 문자열을 탐색해서 모든 일치를 반환
console.log(str1.match(/good\s\w+/gi)); // w+ => 단어 1개가 있음
// 해당 정규 표현식: 'good' 뒤에 공백이 1개 있고 단어가 1개 있는 패턴을 문장에서 대소문자 구분 없이 전부 찾음
// Good morning, Good after, Good evening 반환 