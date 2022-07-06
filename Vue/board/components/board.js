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
    this.contentAry = this.$parent.getData().contentAry;
  }
}


/*
Paging
<!-- html -->
<ul>
<li v-for="page in pagingInfo.totalPage" v-on:click="this.currentPage = page">{{ page }}</li>
</ul>

// Javascript
export default {
	template : template,
	data : function() {
		return {posts:[], currentPage:1}
	},
	computed : {
		// data 속성을 필요에 따라 산출해서 또 다른 프로퍼티 > 읽기 전용
    pagingInfo : function() {
      let perData = 10;
      let totalPage = Math.ceil(this.posts.length/perData);

      let totalPageArray = [];
      for (let i=1; i <= totalPage; i++) {
        totalPageArray.push(i);
      }
      return {
        perData : perData,
        totalPage : totalPageArray
      }

    },
    // 현재 페이지에 따라 출력될 데이터 
    currentData : function() {
      let firstIndex = (this.currentPage - 1) * this.pagingInfo.perData;
      let lastIndex = firstIndex + this.pagingInfo.perData - 1;
      return this.posts.filter((elem, idx) => {
        return idx >= firstIndex ? (idx <= lastIndex ? true : false) : false;
      })
    }

	},
	watch : {
		// 프로퍼티 변화를 감지해서 진행해야 하는 프로세스 정의
	},
	// 인스턴스 라이프사이클 중에서 어느 시점에 진행해야 하는 프로세스 정의
	created : function() {
	this.posts = this.$parent.getData().contentAry;
	}
} 
*/
