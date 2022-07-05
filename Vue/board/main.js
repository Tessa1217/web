import router from './router.js'
import myHeader from './components/header.js'
import information from './index.js'

let template = `<div>
                  <my-header></my-header>
                  <router-view></router-view>
                </div>`


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
    this.userAry = information.User;
    this.contentArray = information.Content;
    this.commentAry = information.Comment;
    this.subcommentAry = information.SubComment;
  },
  computed : {
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
    // 각각의 라우터에 연계된 컴포넌트가 뷰 컴포넌트와 분리되어 있기 때문에
    // 각각의 컴포넌트(독립된 객체)의 데이터에 접근할 때 Getter, Setter를 
    // 통해 접근
    getContentAry : function() {
      console.log(this.contentAry);
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

