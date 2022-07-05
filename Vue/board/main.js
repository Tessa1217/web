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
    subcommentAry : []
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
    // Getter & Setter
    getContentAry : function() {
      return this.contentAry;
    },
    setContentArray : function(dataArray) {
      this.contentArray = dataArray;
    },
    getCommentAry : function() {
      return this.commentAry;
    },
    setCommentAry : function(dataArray) {
      this.commentAry = dataArray;
    },
    getSubCommentAry : function() {
      return this.subcommentAry;
    },
    setSubCommentAry : function(dataArray) {
      this.subcommentAry = dataArray;
    }
  }
});

