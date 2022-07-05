import myHeader from './components/header.js'
import myBoardList from './components/list.js'
import myBoardRead from './components/read.js'
import myBoardWrite from './components/write.js'

let template = `
<div>
  <!-- parentData.sync => this(Vue)의 데이터 -->
  <my-header v-bind:parentData.sync="this.$data"></my-header>
  <my-board-list v-if="listOk" :object="dataArray['board']" 
  v-on:board-read="boardRead" v-on:board-write="boardWrite" v-on:board-delete="boardDelete"></my-board-list>
  <my-board-read v-if="readOk" :object="boardInfo" v-on:board-list="boardList"></my-board-read>
  <my-board-write v-if="writeOk" v-on:board-list="boardList" v-on:board-submit="boardSubmit"></my-board-write>
</div>`

let v1 = new Vue({
  el : '#app',
  data : {
    dataArray : [],
    listOk : false,
    readOk : false,
    writeOk : false,
    boardInfo : {}
  },
  components : {
    myHeader,
    myBoardList,
    myBoardRead,
    myBoardWrite
  }, 
  template : template
  ,
  methods : {
    // 게시판 읽기 모드
    boardRead : function(info) {
      console.log(info);
      this.listOk = false;
      this.readOk = true;
      this.boardInfo = info;
      this.boardInfo.view = parseInt(this.boardInfo.view) + 1;
    },
    // 게시판 쓰기 모드
    boardWrite : function() {
      this.listOk = false;
      this.writeOk = true;
    },
    // 게시판 글 지우기
    boardDelete : function(idx) {
      this.dataArray['board'].forEach(elem => {
        if (elem.no == idx) {
          this.dataArray['board'].splice(this.dataArray['board'].indexOf(elem), 1);
        }
      })
    },
    // 게시판 목록 모드
    boardList : function() {
      this.listOk = true;
      this.readOk = false;
      this.writeOk = false;
    },
    // 게시글 등록
    boardSubmit : function(title, content) {
      let obj = {};
      // 게시글 목록 비었을 경우에는 1로 디폴트 값 세팅 
      obj.no = 1;
      // 게시글 목록이 비어있지 않을 경우 목록의 마지막 번호 + 1로 등록
      if (this.dataArray['board'].length != 0) {
        obj.no = parseInt(this.dataArray['board'][this.dataArray['board'].length -1].no) + 1;
      }
      obj.title = title;
      obj.content = content;
      obj.view = 1;
      this.dataArray['board'].push(obj);
      alert('글 등록이 완료되었습니다.');
      this.boardList(); 
    }
  }
});