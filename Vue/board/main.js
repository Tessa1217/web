import router from './router.js'
import myHeader from './components/header.js'
import information from './index.js'

let template = `<div>
                  <my-header></my-header>
                  <router-view></router-view>
                </div>`

new Vue({
  el :'#app',
  template : template,
  router,
  data : {
    userAry : [],
    contentArray : [],
    commentAry : [],
    subcommentAry : [],
    loginUser : {}
  },
  components : {
    myHeader
  },
  created : function() {
    // index.js에서 데이터 받아오기
    this.userAry = information.User;
    this.contentArray = information.Content;
    this.commentAry = information.Comment;
    this.subcommentAry = information.SubComment;
    this.loginUser = this.userAry[0];
  },
  computed : {
    // 작성자 필드 생성
    contentAry : function() {
      return this.contentArray.map(content => {
        content.name = this.userAry.filter(user => {
          return user.user_id == content.user_id
        })[0].name;
        return content;
      });
    }
  },
  methods : {
    // Getter
    getData : function() {
      return {
        userAry : this.userAry,
        contentAry : this.contentAry,
        commentAry : this.commentAry,
        subcommentAry : this.subcommentAry
      }
    },
    getLoginInfo : function() {
      return this.loginUser;
    },
    // Setter
    setContentArray : function(dataArray) {
      this.contentArray = dataArray;
    },
    setCommentAry : function(dataArray) {
      this.commentAry = dataArray;
    },
    setSubCommentAry : function(dataArray) {
      this.subcommentAry = dataArray;
    }
  }
});

