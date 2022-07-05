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
                          <td @click="boardRead(item)">{{ item.title }}</td>
                          <td>{{ item.view }}</td>
                          <td><button @click="boardDelete(item.no)">삭제</button></td>
                        </tr>
                      </tbody>
                    </table>
                    <button style="float:right;" @click="boardWrite">글쓰기</button>
                  </div>`

export default {
  name : 'my-board-list',
  template : template,
  props : ['object'],
  methods : {
    // 게시글 읽기 event
    boardRead : function(info) {  
      this.$emit('board-read', info);
    },
    // 게시글 지우기 event
    boardDelete : function(idx) {
      console.log(idx);
      this.$emit('board-delete', idx);
    },
    // 게시글 쓰기 event
    boardWrite : function() {
      this.$emit('board-write');
    }
  }
}