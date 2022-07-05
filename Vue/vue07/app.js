import router from './router.js'
import myHeader from './components/header.js'

let template = `<div>
                  <my-header v-bind:parentData.sync="this.$data"></my-header>
                  <router-view></router-view>
                </div>`
new Vue({
  el :'#app',
  router,
  template : template,
  data : {
    dataArray : []
  },
  components : {
    myHeader
  },
  methods : {
    // Getter & Setter
    // 각각의 라우터에 연계된 컴포넌트가 뷰 컴포넌트와 분리되어 있기 때문에
    // 각각의 컴포넌트(독립된 객체)의 데이터에 접근할 때 Getter, Setter를 
    // 통해 접근
    getParentData : function() {
      return this.dataArray;
    },
    setParentData : function(dataArray) {
      this.dataArray = dataArray;
    }
  }
});