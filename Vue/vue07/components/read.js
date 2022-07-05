// 게시글 읽기 

let template = `<div> 
                  <table id="list">
                    <tr>
                      <td style="width:50px;">글제목</td>
                      <td>{{ $route.params.item.title }}</td>
                    </tr>
                    <tr style="height:300px">
                      <td colspan="2">{{ $route.params.item.title }}</td>
                    </tr>
                  </table>
                  <router-link tag="button" style="float:right;" :to="{name:'boardList'}">목록</router-link>
                </div>`

export default {
  name : 'my-board-read',
  template : template,
  created : function() {
    this.$route.params.item.view++;
  }
}

