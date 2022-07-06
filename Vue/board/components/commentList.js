import commentListItem from './commentListItem.js'
import commentCreate from './commentCreate.js'

let template = `<div class="comment">
                  <div v-for="item in comments" v-bind:key="item.comment_id">
                    <comment-list-item v-bind:commentObj="item"></comment-list-item>
                  </div>
                  <comment-create v-bind:contentId="contentId" v-bind:reloadComment="reloadComment"></comment-create>
                </div>`

export default {
  template : template, 
  components : {
    commentListItem, commentCreate
  },
  props : ['contentId'],
  data : function() {
    return {
      comments : this.$parent.$parent.getData().commentAry.filter(comment => {
        return comment.content_id == this.contentId;
      })
    }
  },
  methods : {
    // function도 props 사용 가능
    reloadComment : function() {
      this.comments = this.$parent.$parent.getData().commentAry.filter(comment => {
        return comment.content_id == this.contentId;
      })
    }
  }
}