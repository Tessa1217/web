let template = `<div>
                  <h3>수정하기</h3>
                  <table id="list">
                    <tr>
                      <td>글제목</td>
                      <td><input type="text" v-model.trim="title" style="width: 80%;"></td> 
                    </tr>
                    <tr>
                      <td colspan=2><textarea style="rows:10;width:100%;" v-model.trim="context"></textarea></td>
                    </tr>
                  </table>
                  <div class="btnContainer">
                    <button @click="modifyContent">글 수정</button>
                  </div>
                </div>`
export default {
  name : 'editBoard',
  data : function() {
    return {
      title : this.content.title,
      context : this.content.context
    }
  },
  props : ['content'],
  template : template,
  methods : {
    modifyContent : function() {
      this.content.title = this.title;
      this.content.context = this.context;
      this.content.updated_at = new Date().toISOString().substring(0, 10);
      alert('수정이 완료되었습니다.');
      this.$router.push({name : 'boardList'});
    }
  }
}