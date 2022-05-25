let data = `[{"id":1,"first_name":"Germaine","last_name":"Partlett","email":"gpartlett0@dailymail.co.uk","gender":"Male","salary":96},
{"id":2,"first_name":"Winfield","last_name":"Kift","email":"wkift1@about.com","gender":"Male","salary":66},
{"id":3,"first_name":"Griffin","last_name":"Grubey","email":"ggrubey2@histats.com","gender":"Bigender","salary":72},
{"id":4,"first_name":"Robina","last_name":"Giacomini","email":"rgiacomini3@hud.gov","gender":"Bigender","salary":61},
{"id":5,"first_name":"Frazer","last_name":"Richings","email":"frichings4@patch.com","gender":"Male","salary":92},
{"id":6,"first_name":"Rollin","last_name":"Rosenberger","email":"rrosenberger5@opensource.org","gender":"Male","salary":55},
{"id":7,"first_name":"Francisco","last_name":"Staniford","email":"fstaniford6@wordpress.com","gender":"Genderfluid","salary":85},
{"id":8,"first_name":"Ailyn","last_name":"Ramsby","email":"aramsby7@skype.com","gender":"Female","salary":89},
{"id":9,"first_name":"Gavin","last_name":"Bayman","email":"gbayman8@liveinternet.ru","gender":"Male","salary":77},
{"id":10,"first_name":"Demetri","last_name":"Spinola","email":"dspinola9@pbs.org","gender":"Male","salary":67}]`;

data = JSON.parse(data); // JSON => 오브젝트 변형
console.log(data);

let over80 = data.filter(function(val, idx, arr) { // val => 각각의 오브젝트 타입
  return val.salary > 80;
});

let over70 = data.filter((val) => {
  return val.salary > 70;
});
console.log(over80);
console.log(over70);

// 여성만 출력
let females = data.filter((val) => {
  return val.gender == 'Female';
})
// let females = data.filter(obj => obj.gender == 'Female');
console.log(females);

console.clear(); 

let males = data.filter(obj => obj.gender == 'Male');
let tag = createTable(males);
document.write(tag);
