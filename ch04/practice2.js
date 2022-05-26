// ch04/string2.js

let today = new Date(); 
console.log(today);
console.log(today.toDateString());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.toISOString());

Date.prototype.customFormat = function() {
  let yyyy = this.getFullYear(); 
  let mm = ('0' + (this.getMonth() + 1)).slice(-2);
  let dd = ('0' + this.getDate()).slice(-2);
  let hh = ('0' + this.getHours()).slice(-2); 
  let mi = ('0' + this.getMinutes()).slice(-2); 
  let ss = ('0' + this.getSeconds()).slice(-2); 
  return yyyy + '-' + mm + '-' + dd + ` ${hh}:${mi}:${ss}`;
}

console.log(today.customFormat());

// 파라미터 => 실행할 함수, 반복 실행할 주기
// setInterval(function(){
//   let today = new Date(); 
//   console.log(today.customFormat());
// }, 1 * 1000);

Date.prototype.customFormat2 = function() {
  twoDigits = function(number) {
    return ('0' + number).slice(-2);
  }
  let yyyy = this.getFullYear(); 
  let mm = twoDigits(this.getMonth() + 1);
  let dd = twoDigits(this.getDate());
  let hh = twoDigits(this.getHours());
  let mi = twoDigits(this.getMinutes());
  let ss = twoDigits(this.getSeconds());
  return yyyy + '-' + mm + '-' + dd + ` ${hh}:${mi}:${ss}`;
}

setInterval(function() {
  let today = new Date(); 
  document.write(today.customFormat2());
  document.close();
}, 1 * 1000);

  // 시간 보기
  Date.prototype.customFormat3 = function() {
    twoDigits = function(number) {
      return ('0' + number).slice(-2);
    }
    let yyyy = this.getFullYear(); 
    let mm = twoDigits(this.getMonth() + 1);
    let dd = twoDigits(this.getDate());
    let hh = twoDigits(this.getHours());
    let mi = twoDigits(this.getMinutes());
    let ss = twoDigits(this.getSeconds());
    // return yyyy + '-' + mm + '-' + dd + ` ${hh}:${mi}:${ss}`;
    return [yyyy, mm, dd, hh, mi, ss];
  }
  
  timeFunc = function(ary = []) {
    this.template = `<h3>${ary[0]}년 ${ary[1]}월 ${ary[2]}일</h3><h3>${ary[3]}:${ary[4]}:${ary[5]}</h3>`;
    return this.template;
  }

  setInterval(function() {
    let today = new Date(); 
    let time = timeFunc(today.customFormat3());
    document.write(time);
    document.close();
  }, 1 * 1000);