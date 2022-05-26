// 문자열 1개 바꾸기 => replace() 
let str1 = 'Good morning, Good afternoon, good evening, and good night';
console.log(str1.replace('Good', 'Bad')); // replace는 대소문자 구분함
console.log(str1.toLowerCase().replace('good', 'bad')); // 대소문자 구분 없이 바꾸려면 lowercase 사용
console.log(str1.replace(/good/i, 'bad'));

// 문자열 전체에서 찾아 모두 바꾸기
console.log(str1.replace(/good/gi, 'Bad')); // Good, good 전부 Bad로 변경 

// 문자열 합치기 메소드
// concat

str1 = 'hello';
let str2 = 'world';
console.log(str1.concat(str2)); //helloworld
console.log("".concat(str1, str2)); // helloworld
console.log("".concat(str1, ' ', str2)); // hello world

// 배열을 concat으로 합치기
let strAry = ['hello', ' ', 'world', '!'];
console.log(''.concat(...strAry)); // ... => spread argument (배열 요소들을 파라미터로 확장해주는 기능)

// 문자열 리터럴
let str = new String("hello");
console.log(str);

// 템플릿 리터럴
str = 'good';
let template = `${str} morning, ${str} afternoon, ${str} evening`; // 템플릿 리터럴을 반드시 역따옴표로 감싸야 함
console.log(template); 




