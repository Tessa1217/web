let template = `<div>
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
                    <router-link tag="button" style="float:right;" :to="{name:'boardList'}">목록</router-link>
                    <button style="float:right;" @click="boardSubmit()">글등록</button>
                </div>`

export default {
  name : 'my-board-write',
  template : template, 
  data : function() {
    return {
      title : '',
      content : '',
      dataArray : this.$parent.getParentData()
    }
  }, 
  methods : {
    // 게시글 등록
    boardSubmit : function() {
      let no = 1;
      if (this.dataArray['board'].length > 0) {
        no = parseInt(this.dataArray['board'][this.dataArray['board'].length-1].no) + 1;
      }
      let object = {
        no : no, 
        title : this.title,
        content : this.title,
        view : 1
      };
      this.dataArray['board'].push(object);
      this.$parent.setParentData(this.dataArray);
      this.$router.push({name : 'boardList'});
    }
  }
}
