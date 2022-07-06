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
                        <td colspan=4 rowspan=5><textarea :value="content.context" style="width:100%;" :readonly="true"></textarea></td>
                      </tr>
                    </table>
                    <div class="btnContainer">
                      <button @click="modifyBoard">수정</button>
                      <button @click="deleteBoard">삭제</button>
                    </div>
                    <comment-list v-bind:contentId="content.content_id"></comment-list>
                  </div>
                </div>`

import subComment from './subComment.js'
import commentList from './commentList.js'

export default {
  name : 'detail-board',
  props : ['content'],
  data : function() {
    return {
      comment : '',
      commentAry : [],
      show : true,
      commentShow : false
    }
  },
  computed : {
    subComments : function() {
      console.log(this.currentcomment);
      return this.$parent.getData().subcommentAry;
    }
  },
  template : template,
  components : {
    subComment,
    commentList
  },
  // 해당 작성자의 커맨트 배열 받아오기
  created : function() {
    this.commentAry = this.$parent.getData().commentAry.filter(elem => elem.content_id == this.content.content_id);
  },
  methods : {
    // 수정 클릭 시 수정 컴포넌트 열고 상세 컴포넌트 감추기
    modifyBoard : function() {
      this.setShow(); 
      this.$router.push({name : 'edit'});
    },
    // 게시물 삭제
    deleteBoard : function() {
      let contentAry = this.$parent.getData().contentAry;
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
    },
    // 답글 달기
    addSubComment : function(comment) {
      console.log(comment);
      if (comment != null) {
        this.commentShow = !this.commentShow;
      }
    },
    setShow : function() {
      this.show = !this.show;
    }
  }
}