let template = `<div>
                  <div v-show="show">
                    <table class="detail">
                      <tr>
                        <td colspan=4>상세 게시판</td>
                      </tr>
                      <tr>
                        <td colspan=2>게시글 번호: {{ content.content_id }}</td>
                        <td>작성일시: {{ content.created_at }}</td>
                        <td>작성자: {{writer}}</td>
                      </tr>
                      <tr>
                        <td colspan=4 rowspan=5><textarea :value="content.context" style="width:100%;" :readonly="modify"></textarea></td>
                      </tr>
                    </table>
                    <router-view></router-view>
                    <div class="btnContainer">
                      <button v-if="modify" @click="modifyBoard">수정</button>
                      <button @click="deleteBoard">삭제</button>
                    </div>
                    <div v-if="commentAry.length > 0">
                      <table class="detail">
                        <tr>
                          <td colspan=2>댓글창</td>
                        </tr>
                        <tr v-for="comment in commentAry">
                          <td style="width:85%;">{{ comment.context }}</td>
                          <td>{{ comment.created_at }}</td>
                        </tr>
                      </table>
                    </div>
                    <div>
                      <table class="detail">
                        <tr>
                          <th>{{ writer }}</th>
                          <td style="width:80%;"><input type="text" v-model.trim="comment"></td>
                          <td style="width:10%;"><button @click="saveComment">작성하기</button></td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div v-show="!show">
                    <router-view></router-view>
                  </div>
                </div>`

export default {
  name : 'detail-board',
  props : ['content', 'writer'],
  data : function() {
    return {
      comment : '',
      commentAry : [],
      modify: true,
      show : true
    }
  },
  template : template,
  created : function() {
    this.commentAry = this.$parent.getCommentAry().filter(elem => elem.content_id == this.content.content_id);
  },
  methods : {
    modifyBoard : function() {
      this.show = false;
      this.$router.push({name : 'edit'});
    },
    deleteBoard : function() {
      let contentAry = this.$parent.getContentAry(); 
      let idx = contentAry.indexOf(this.content);
      contentAry.splice(idx, 1);
      this.$parent.setContentAry(contentAry);
      alert('삭제가 완료되었습니다.');
      this.$router.push({name : 'boardList'});
    },
    saveComment : function() {
      let commentAry = this.commentAry;
      let comment_id = 1;
      if (commentAry.length > 0) {
        let idx = commentAry.length - 1;
        comment_id = parseInt(commentAry[idx].comment_id) + 1;
      } 
      let comment = {
        comment_id : comment_id,
        content_id : this.content.content_id,
        user_id : this.content.user_id,
        context : this.comment,
        created_at : new Date().toISOString().substring(0, 10),
        updated_at : null
      }
      commentAry.push(comment);
      this.$parent.setCommentAry(commentAry);
      alert('커맨트가 저장되었습니다.');
      this.comment = '';
    }
  }
}