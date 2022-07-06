import myHeader from './components/header.js'
import myEmpList from './components/empList.js'
// import myEmpModify from './components/empModify.js'
import myEmpInsert from './components/empInsert.js'
import router from './router.js'

let template = `<div>
                  <my-header></my-header>
                  <router-view></router-view>
                </div>`

let v1 = new Vue({
  el : '#app',
  template : template,
  router,
  components : {
    myHeader, myEmpInsert
  },
  data : {
    jobList : []
  },
  created : function() {
    let jobList = this.jobList;
    $.ajax({
      url : 'http://192.168.0.29/myserver/empDeptJob',
      dataType : 'json',
      success: function(data) {
        console.log(data);
        $(data.jobs).each((idx, elem) => {
          jobList.push(elem);
        });
      }
    });
  },
  methods : {
    getJobList : function() {
      return this.jobList;
    }
  }
});