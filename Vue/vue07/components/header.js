// 헤더 component 

let template = `<div>
                  <h2>간단한 게시판 만들기</h2>
                  <p>게시판 데이터 json 파일 읽기</p>
                  <input type="file" @change="loadData">
                  <button @click="saveData">게시판 저장하기</button>
                </div>`

export default {
  name : 'my-header',
  template : template,
  // Vue 인스턴스 프로퍼티 값 받기 위해 props 설정 
  props : ['parentData'],
  methods : {
    loadData : function(event) {
      let fileName = event.target.files[0].name;
      fileName = '/vue07/' + fileName;
      if (fileName) {
        fetch(fileName)
          .then(response => response.json())
          .then(data => {
            this.parentData.dataArray = data;
            if(this.parentData.dataArray != null && this.parentData.dataArray['board'].length > 0) {
                this.parentData.listOk = true;
            }
            this.$emit('update:parentData', this.parentData);
            this.$router.push({name:'boardList'});
          })
          .catch(err => console.log(err));
        }
    },
    saveData : function() {
      let data = this.parentData.dataArray;
      if (data.length == 0) {
        alert('저장할 게시물이 없습니다.');
        return;
      } 
      if (typeof data === 'object') {
        data = JSON.stringify(data, undefined, 4);
      }
      let blob = new Blob([data], {type:'text/json'});
      let a = document.createElement('a');
      a.download = 'board.json';
      a.href = window.URL.createObjectURL(blob);
      a.click(); 
    }
  }
}