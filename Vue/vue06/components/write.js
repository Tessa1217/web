let template = `<div>
                  <div>
                    <table id="list">
                      <tr>
                        <td>글제목</td>
                        <td><input type="text" style="width:90%;" v-model="title"></td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <textarea style="width:100%;" v-model="content"></textarea>
                        </td>
                      </tr>
                    </table>
                    <button style="float:right;" @click="boardList">목록</button>
                    <button style="float:right;" @click="boardSubmit()">글등록</button>
                  </div>
                </div>`

export default {
  name : 'my-board-write',
  template : template, 
  data : function() {
    return {
      title : '',
      content : ''
    }
  }, 
  methods : {
     // 게시글 목록 event
     boardList : function() {
      this.$emit('board-list');
    }, 
    // 게시글 등록 event
    boardSubmit : function() {
      this.$emit('board-submit', this.title, this.content);
    }
  }
}