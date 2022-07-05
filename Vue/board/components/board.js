let template = `<div>
                  <b-table id="my-table" :items="contentAry" :per-page="perPage" :current-page="currentPage" small>
                    <thead>
                      <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>작성일</th>
                      </tr>
                    </thead>
                    <tbody>
                      <router-link tag="tr" v-for="(content, idx) in contentAry.reverse()" :to="{name:'detailedBoard', params:{content : content, writer : userName[idx]}}">
                        <td>{{ content.content_id }}</td>
                        <td>{{ content.title }}</td>
                        <td>{{ userName[idx] }}</td>
                        <td>{{ content.created_at }}</td>
                    </router-link>
                    </tbody>
                  </b-table>
                    <div class="overflow-auto">
                      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                      aria-controls="my-table"></b-pagination>
                    </div>
                  <div class="btnContainer">
                  <router-link tag="button" :to="{name:'boardWrite'}">글쓰기</router-link>
                  </div>
               </div>`

export default {
  name : 'my-board-list',
  template : template,
  data : function() {
    return {
      contentAry : [],
      userAry : [],
      userName : [],
      perPage : 10,
      currentPage : 1
    }
  },
  computed : {
    rows : function() {
      return this.contentAry.length;
    }
  },
  created : function() {
    this.contentAry = this.$parent.getContentAry(); 
    this.userAry = this.$parent.getUserAry(); 
    this.contentAry.forEach(elem => {
      this.userAry.forEach(user => {
        if (elem.user_id == user.user_id) {
          this.userName.push(user.name);
        }
      })
    });
  }
}

