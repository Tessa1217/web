document.addEventListener('DOMContentLoaded', function() {
  let xhtp = new XMLHttpRequest(); 
  const url = "https://jsonplaceholder.typicode.com/photos";
  xhtp.open('GET', url);
  xhtp.send();
  xhtp.onload = function() {
    let result = JSON.parse(xhtp.responseText);
    let th, td;
    let tr = document.createElement('tr');
    for (let field in result[0]) {
      th = document.createElement('th');
      th.innerText = field;
      tr.append(th);
    }
    document.querySelector('thead').append(tr);

    let filtered = result.filter(elem => elem.albumId == 1 && elem.id <= 10);
    console.log(filtered);
    for (let obj of filtered) {
      tr = document.createElement('tr');
      for (let field in obj) {
        if (field == 'thumbnailUrl') {
          td = document.createElement('td');
          let img = document.createElement('img');
          img.setAttribute('src', obj[field]);
          td.append(img);
        } else if (field == 'url') {
          td = document.createElement('td');
          let a = document.createElement('a');
          a.setAttribute('href', obj[field]);
          a.innerHTML = obj[field];
          console.log(a);
          td.append(a);
        } else {
          td = document.createElement('td');
          td.innerText = obj[field];
        }
        tr.append(td);
      }
      document.querySelector('tbody').append(tr);
    }
    let ul = document.createElement('ul');
    filtered.forEach((elem) => {
      let li = document.createElement('li');
      li.innerHTML = `${elem.albumId}, ${elem.id}, ${elem.title}, <span><img src = "${elem.thumbnailUrl}"></span>`;
      ul.append(li);
    })
    document.getElementById('show').append(ul);
  }
});

