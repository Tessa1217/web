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
    contentAry : [],
    commentAry : [],
    subcommentAry : []
  },
  components : {
    myHeader
  },
  created : function() {
    this.userAry = information.User;
    this.contentAry = information.Content;
    this.commentAry = information.Comment;
    this.subcommentAry = information.SubComment;
  },
  methods : {
    // Getter & Setter
    // 각각의 라우터에 연계된 컴포넌트가 뷰 컴포넌트와 분리되어 있기 때문에
    // 각각의 컴포넌트(독립된 객체)의 데이터에 접근할 때 Getter, Setter를 
    // 통해 접근
    getUserAry : function() {
      return this.userAry;
    },
    setUserAry : function(dataArray) {
      this.userAry = dataArray;
    },
    getContentAry : function() {
      return this.contentAry;
    },
    setContentAry : function(dataArray) {
      this.contentAry = dataArray;
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

/* computed : {
  postData : function() {
    return this.contentData.map(content => {
      let name = this.userData.filter(user => {
        return (user.user_id == content.user_id)
      })[0].name;
      content.name = name;
      return content;
    })
  }
}

*/