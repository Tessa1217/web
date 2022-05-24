// calendar.js

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

let table = '<table border = 1>';
table += '<tr>'
for (let day of days) { 
  table += '<th>' + day + '</th>';
}
table += '</tr><tr>';
for (let day = 1; day <= 31; day++) {
  table += '<td>' + day + '</td>'
  if (day % 7 == 0) {
    table += '</tr><tr>'
  }
}
table += '</tr></table>';
console.log(table);
document.write(table);
