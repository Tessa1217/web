let template = `<div>
                  <div id="insertForm">
                    <p> <label for="employee_id">사원번호</label>
                    <input type="number" v-model.number="employee.employee_id"></p>
                    <p><label for="first_name">이름</label>
                    <input type="text" v-model.trim="employee.first_name"></p>
                    <p><label for="last_name">성</label>
                    <input type="text" v-model.trim="employee.last_name"></p>
                    <p> <label for="email">이메일</label>
                    <input type="text" v-model.trim="employee.email"></p>
                    <p><label for="">직업</label>
                    <select v-model="employee.job_id">
                      <option v-for="job in jobList">{{ job.job_id }}</option>
                    </select>
                    <input type="text" v-model.trim="employee.job_id"></p>
                    <div class="btnContainer"> 
                      <button @click="updateEmployee">사원수정</button>
                      <button @click="deleteEmployee">사원삭제</button>
                    </div>   
                  </div>
                </div>`

export default {
  name : 'my-emp-modify',
  template : template,
  props : ['employee'],
  data : function() {
    return {
      jobList : []
    }
  },
  created : function() {
    this.jobList = this.$parent.getJobList(); 
  },
  methods : {
    updateEmployee() {
      let employee = this.employee;
      console.log(employee);
      let router = this.$router;
      $.ajax({
        url: 'http://192.168.0.29/myserver/empUpdate',
        type: 'POST',
        data: employee,
        dataType: 'json',
        success: function(data) {
          if (data != null) {
            alert('수정이 완료되었습니다.');
            router.push({name:'myEmpModify', params:{employee:employee}});
          }
        },
        error: function(reject) {
          console.log(reject);
        }
      })
    },
    deleteEmployee() {

    }
  }
}
