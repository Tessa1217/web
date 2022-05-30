document.addEventListener('DOMContentLoaded', mainFunc);
function mainFunc() {
  let dataAry = '';
  const url = "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&returnType=JSON&serviceKey=jURKW9z9ksBiM4BeCxd5pl2EIvjXSIBl9o2SnGJliMEKNbgVPk6B%2BH8r%2FT2aZWsnR%2B%2Fzd7NZFirXBlx%2F5sTR0g%3D%3D";
  const xhtp = new XMLHttpRequest();
  xhtp.open('GET', url);
  xhtp.send(); 
  // client <--> server 요청 상태 볼 수 있는 메소드
  xhtp.onreadystatechange = function() {
    console.log(`요청상태:${xhtp.readyState}, 서버상태:${xhtp.status}`); // 2 200, 3 200, 4 200
    if (xhtp.readyState == 4 && xhtp.status == 200) {
      let result = JSON.parse(xhtp.responseText);
      dataAry = result.data;
      let sido = dataAry.reduce((ary, el) => {
        return ary.concat(el.sido);
      }, []);
      sido = new Set(sido);
      console.log(sido);
      let select = document.createElement('select');
      select.setAttribute('id', 'selection');
      sido.forEach((el) => {
        let option = document.createElement('option');
        option.setAttribute('value', el);
        option.innerText = el;
        select.append(option);
      })
      document.querySelector('#show').append(select);
      let search = document.querySelector('#selection');23
      let optionList = document.querySelectorAll('option');
      search.addEventListener('change', function() {  
        optionList.forEach((elem) => {
          if (elem.selected == true) {
            let fAry = dataAry.filter((data) => {return data.sido == elem.innerText});
            document.getElementById('tbl').append(makeBody(fAry, 1));
            makePage(fAry);
          }
        })
      });
      
      // 테이블 생성 
      let table = document.createElement('table');
      table.setAttribute('border', '1px solid #000');
      table.setAttribute('id', 'tbl');
      // 테이블 헤더 부분 자식으로 추가
      table.append(makeHeader());
      // 테이블 바디 부분 자식으로 추가
      table.append(makeBody(dataAry, 1));
      // division에 테이블 추가
      document.getElementById('show').append(table);
      makePage(dataAry);
  }
};

  let srchButton = document.querySelector("#show > input[type='button']"); 
  srchButton.addEventListener('click', searchCenter);
  function searchCenter() {
      let center = this.previousElementSibling.value;
      if (center == '') { // center 값이 빈 상태로 누르면 전체 목록 다시 불러오기
        document.getElementById('tbl').append(makeBody(dataAry, 1));  
        makePage(dataAry);
      } else { // 센터 찾기에 특정 센터 값이 있으면 그 목록 출력하기
        let fAry = dataAry.filter(elem => {return elem.sido == center});
        document.getElementById('tbl').append(makeBody(fAry, 1));
        makePage(fAry);
      }
    }
  

  // 전체 목록 버튼 누르면 전체 목록으로 돌아가기
  let backButton = document.querySelector('#show > input[name="back"]');
  backButton.addEventListener('click', backList);
  function backList() {
    document.getElementById('tbl').append(makeBody(dataAry, 1));
    makePage(dataAry);
    this.previousElementSibling.previousElementSibling.value = '';
  }
  let fields = ['id', 'centerName', 'sido','address', 'phoneNumber'];
  // header
  function makeHeader() {
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    fields.forEach(field => {
      let th = document.createElement('th');
      th.innerText = field.toUpperCase();
      tr.append(th);
    })          
    thead.append(tr);
    return thead;
  }
  // body
  function makeBody(ary, page) {
    // page => 1page: 1~10
    let startCnt = (page-1) * 10;
    let endCnt = page * 10;
    if (document.querySelector('#tbl > tbody') != null) {
      document.querySelector('#tbl > tbody').remove();
    };
    let tbody = document.createElement('tbody');
    ary.forEach((elem, idx) => {
      if (idx >= startCnt && idx < endCnt) {
        tbody.append(makeTr(elem))
      }
    })
    return tbody;
  }

  function makePage(ary) {
    if (document.querySelector('#show > a') != null) {
      let aList = document.querySelectorAll('#show > a');
      aList.forEach(elem => elem.remove());
    }
    let show = document.getElementById('show');
    // ary => 12 : 1, 2 page
    // if data = 20, 2pages
    // if data = 21, (2.1page) => 3pages
    let totalPage = Math.ceil(ary.length/10);
    let page = 1;
    for (let i = 1; i <= totalPage; i++) {
      let a = document.createElement('a');
      a.addEventListener('click', function(e) {
        e.preventDefault(); 
        let page = e.target.innerText;
        document.getElementById('tbl').append(makeBody(ary, page));
      });
      a.innerText = i;
      a.setAttribute('href', '#');
      show.append(a);
    }
  }

  function makeTr(elem) {
    let tr = document.createElement('tr');
    fields.forEach(field => {
      if (field == 'address') {
        let td = document.createElement('td');
        let a = document.createElement('a');
        a.setAttribute('href', `daumapp.html?name=${elem.centerName}&xpos=${elem.lat}&ypos=${elem.lng}`);
        a.setAttribute('target', '_blank');
        a.innerText = elem[field];
        td.append(a);
        tr.append(td);
      } else {
        let td = document.createElement('td');
        td.innerText = elem[field];
        tr.append(td);
      }
    });
    return tr;
  }
}
