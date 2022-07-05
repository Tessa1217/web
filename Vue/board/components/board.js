// 게시물 전체 리스트
let template = `<div>
                  <div class="overflow-auto">
                    <table id="boardTable">
                        <thead>
                          <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>글쓴이</th>
                            <th>작성일</th>
                          </tr>
                        </thead>
                        <tbody>
                          <router-link tag="tr" v-for="(content, idx) in currentAry" :to="{name:'detailedBoard', params:{content : content}}">
                            <td>{{ content.content_id }}</td>
                            <td>{{ content.title }}</td>
                            <td>{{ content.name }}</td>
                            <td>{{ content.created_at }}</td>
                        </router-link>
                        </tbody>
                    </table>
                    <div id="paging">
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                    aria-controls="boardTable" size="lg"></b-pagination>
                    </div>
                  </div>
                  <!--</b-table>-->
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
      perPage : 10,
      currentPage : 1
    }
  },
  computed : {
    // Pagination (showing 10 posts per page)
    currentAry : function() {
        return this.contentAry.slice((this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage)
    },
    rows : function() {
      return this.contentAry.length;
    }
  },
  // contentAry 받아오기
  created : function() {
    this.contentAry = this.$parent.getContentAry(); 
  }
}

