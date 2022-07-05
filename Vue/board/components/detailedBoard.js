// 게시글 상세보기 페이지
let template = `<div>
                  <div v-show="show">
                    <div class="titleContainer">
                      <h3>게시물 상세보기</h3>
                    </div>
                    <table id="list">
                      <tr>
                        <td colspan=2>게시글 번호: {{ content.content_id }}</td>
                        <td v-if="!content.updated_at">작성일시: {{ content.created_at }}</td>
                        <td v-else>작성일시: {{ content.created_at }}<br>수정일시: {{ content.updated_at }}</td>
                        <td>작성자: {{ content.name }}</td>
                      </tr>
                      <tr>
                        <td colspan=4 rowspan=5><textarea :value="content.context" style="width:100%;" :readonly="modify"></textarea></td>
                      </tr>
                    </table>
                    <router-view></router-view>
                    <div class="btnContainer">
                      <button @click="modifyBoard">수정</button>
                      <button @click="deleteBoard">삭제</button>
                    </div>
                    <div>
                      <table class="detail">
                        <tr>
                          <th>{{ content.name }}</th>
                          <td style="width:80%;"><input type="text" v-model.trim="comment" style="width:100%;"></td>
                          <td style="width:10%;"><button @click="saveComment">작성하기</button></td>
                        </tr>
                      </table>
                    </div>
                    <div v-if="commentAry.length > 0">
                      <table class="detail" id="comment">
                        <tr>
                          <td colspan=2>댓글창</td>
                        </tr>
                        <tr v-for="comment in commentAry">
                          <td style="width:85%;">{{ comment.context }}</td>
                          <td>{{ comment.created_at }}</td>
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
  props : ['content'],
  data : function() {
    return {
      comment : '',
      commentAry : [],
      show : true
    }
  },
  template : template,
  // 해당 작성자의 커맨트 배열 받아오기
  created : function() {
    this.commentAry = this.$parent.getCommentAry().filter(elem => elem.content_id == this.content.content_id);
  },
  methods : {
    // 수정 클릭 시 수정 컴포넌트 열고 상세 컴포넌트 감추기
    modifyBoard : function() {
      this.show = false;
      this.$router.push({name : 'edit'});
    },
    // 게시물 삭제
    deleteBoard : function() {
      let contentAry = this.$parent.getContentAry(); 
      contentAry.splice(contentAry.indexOf(this.content), 1);
      this.$parent.setContentArray(contentAry);
      alert('삭제가 완료되었습니다.');
      this.$router.push({name : 'boardList'});
    },
    // 댓글 저장
    saveComment : function() {
      let commentAry = this.commentAry;
      let comment_id = 1;
      if (commentAry.length > 0) {
        let idx = commentAry.length - 1;
        comment_id = parseInt(commentAry[idx].comment_id) + 1;
      } 
      // 댓글 객체
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