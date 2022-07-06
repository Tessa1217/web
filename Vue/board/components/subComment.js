// 답글 달기 

let template = `<div class="commentContainer">
                  <div>
                    <p v-for="subcomment in subcomments"> ㄴ 답글 : {{ subcomment.context }}</p>
                  </div>
                  <textarea v-model.trim="context" placeholder="답글을 입력해보세요."></textarea>
                  <button @click="saveComment">답글달기</button>
                </div>`

export default {
  name : 'sub-comment',
  props : ['comment'],
  template : template,
  data : function() {
    return {
      context : ''
    }
  },
  computed : {
    subcomments : function() {
      let subcommentAry = this.$parent.$parent.getData().subcommentAry;
      return subcommentAry.filter(elem => {return this.comment.comment_id == elem.comment_id});
    }
  },
  methods : {
    saveComment : function() {
      let subCommentAry = this.$parent.$parent.getData().subcommentAry;
      let sub_id = 1;
      if (subCommentAry.length > 0) {
        let idx = subCommentAry.length - 1;
        sub_id = parseInt(subCommentAry[idx].subcomment_id) + 1;
      }
      let subComment = {
        subcomment_id : sub_id,
        comment_id : this.comment.comment_id,
        user_id : 3,
        context : this.context,
        created_at : new Date().toISOString().substring(0, 10),
        updated_at : null
      }
      subCommentAry.push(subComment);
      this.$parent.$parent.setSubCommentAry(subCommentAry);
      alert('답글 저장이 완료되었습니다.');
    }
  }
}
