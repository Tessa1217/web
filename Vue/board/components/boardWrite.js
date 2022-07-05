let template = `<div>
                  <table class="detail">
                    <tr>
                      <td>글제목</td>
                      <td><input type="text" v-model.trim="title" style="width: 80%;"></td> 
                    </tr>
                    <tr>
                      <td colspan=2><textarea style="rows:10;width:100%;" v-model.trim="context"></textarea></td>
                    </tr>
                  </table>
                  <button @click="saveBoard">글 저장</button>
                </div>`

export default {
  name : 'board-write',
  template : template,
  data : function() {
    return {
      title : '',
      context : ''
    }
  },
  methods : {
    saveBoard : function() {
      let contentAry = this.$parent.getContentAry(); 
      let user_id = 1;
      let content_id = 1;
      if (contentAry.length > 0) {
        let idx = contentAry.length - 1;
        content_id = parseInt(contentAry[idx].content_id) + 1;
      }

      let content = {
        content_id : content_id,
        user_id : user_id,
        title : this.title,
        context : this.context,
        created_at : new Date().toISOString().substring(0, 10),
        updated_at : null
      }
      contentAry.push(content);
      this.$parent.setContentAry(contentAry);
      this.$router.push({name : 'boardList'});
    }
  }

}