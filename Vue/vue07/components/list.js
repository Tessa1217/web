// 게시판 리스트 
// 페이지 변환이 필요한 경우에는 router-link, 데이터 조작만을 하는 경우에는 router-link 쓸 필요 X
let template = `<div>
                    <table id="list">
                      <thead>
                        <tr>
                          <th style="width:50px;">글번호</th>
                          <th>글제목</th>
                          <th style="width:50px;">조회수</th>
                          <th style="width:70px;"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, idx) in object" v-bind:key="item.no">
                          <td>{{ item.no }}</td>
                          <router-link tag="td" :to="{name:'boardRead', params:{item:item}}">
                          {{ item.title }}
                          </router-link>
                          <td>{{ item.view }}</td>
                          <td><button @click="boardDelete(item.no)">삭제</button></td>
                        </tr>
                      </tbody>
                    </table>
                    <router-link tag="button" style="float:right;" :to="{name:'boardWrite'}">글쓰기</router-link>
                  </div>`

export default {
  name : 'my-board-list',
  template : template,
  data : function() {
    return {
      dataArray : [],
      object : []
    }
  },
  created : function() {
    this.dataArray = this.$parent.getParentData();
    this.object = this.dataArray['board'];
  },
  methods : {
    // 게시글 지우기 event
    boardDelete : function(no) {
      this.object = this.object.filter(elem => elem.no != no);
      this.dataArray['board'] = this.object;
      this.$parent.setParentData(this.dataArray);
    }
  }
}