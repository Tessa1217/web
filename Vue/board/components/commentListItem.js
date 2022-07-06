let template = `<div>
                  <div>
                    <span>{{ name }}</span>
                    <span>{{ commentObj.created_at }}</span>
                  </div>
                  <div>{{ commentObj.context }}</div>
                  <div>
                    <button>수정</button>
                    <button>삭제</button>
                  </div>
                </div>`

export default {
  name : 'comment-list-item',
  template : template,
  props : ['commentObj'],
  data : function() {
    return {
      name : this.$parent.$parent.$parent.getData().userAry.filter(user => {
        return user.user_id == this.commentObj.user_id;
      })[0].name
    }
  }
}