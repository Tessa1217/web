let template = `<div>
                  <textarea v-model.trim="context" placeholder="코멘트를 달아주세요" rows="1" max-rows="6"></textarea>
                  <div class="btnContainer">
                    <button @click="createComment">작성하기</button>
                  </div>
                </div>`

export default {
  name : 'comment-create',
  template : template,
  props : ['contentId', 'reloadComment'],
  data : function() {
    return {
      user : this.$parent.$parent.$parent.getLoginInfo(),
      context : ''
    }
  },
  methods : {
    createComment: function() {
      let commentAry = this.$parent.$parent.$parent.getData().commentAry;
      let id = 1;
      if (commentAry.length > 0) {
        id = parseInt(commentAry[commentAry.length - 1].comment_id) + 1;
      }
      let comment = {
        comment_id : id,
        content_id : this.contentId,
        user_id : this.user.user_id,
        context : this.context,
        created_at : new Date().toISOString().substring(0, 10),
        updated_at : null
      } 

      commentAry.push(comment);
      this.$parent.$parent.$parent.setCommentAry(commentAry);
      this.context = '';
      alert("댓글이 성공적으로 저장되었습니다.")
      this.reloadComment(); 
    }
  }
}