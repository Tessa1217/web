// 게시글 쓰기
let template = `<div>
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
                    <button @click="saveBoard">글 저장</button>
                  </div>
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
    // 게시글 저장
    saveBoard : function() {
      let contentAry = this.$parent.getData().contentAry;
      // 배열 비었을 경우 첫번째 값 지정 
      let user_id = this.$parent.getLoginInfo().user_id;
      let content_id = 1;
      // 배열 비어있지 않을 경우 마지막 아이디 + 1
      if (contentAry.length > 0) {
        let idx = contentAry.length - 1;
        content_id = parseInt(contentAry[idx].content_id) + 1;
      }
      // 게시물 객체
      let content = {
        content_id : content_id,
        user_id : user_id,
        title : this.title,
        context : this.context,
        created_at : new Date().toISOString().substring(0, 10),
        updated_at : null
      }
      contentAry.push(content);
      // 새로운 게시물 저장된 배열 뷰 컴포넌트에 업데이트
      this.$parent.setContentArray(contentAry);
      alert('게시물이 저장되었습니다.');
      this.$router.push({name : 'boardList'});
    }
  }

}