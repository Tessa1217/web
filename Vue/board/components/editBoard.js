// 게시글 수정
let template = `<div>
                  <div class="titleContainer">
                    <h3>수정하기</h3>
                  </div>
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
    // 게시글 수정 (제목, 내용만 가능, 업데이트 일시 추가)
    modifyContent : function() {
      this.content.title = this.title;
      this.content.context = this.context;
      this.content.updated_at = new Date().toISOString().substring(0, 10);
      alert('수정이 완료되었습니다.');
      console.log(this.$parent);
      this.$parent.setShow(); 
      this.$router.push({name : 'detailedBoard', params : {content : this.content}});
    }
  }
}