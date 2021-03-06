// 사원 등록 컴포넌트 
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
                    <p> <button @click="insertEmployee">사원등록</button></p>   
                  </div>
                </div>`


export default {
  name : 'my-emp-insert',
  template : template,
  data : function() {
    // 사원 객체
    return {
      employee : {
        last_name : '',
        first_name : '',
        employee_id : 0,
        job_id : '',
        email : ''
      },
      // 직원 코드
      jobList : []
    }
  },
  props: ['function']
  ,created : function() {
    this.jobList = this.$parent.getJobList(); 
  },
  methods : {
    // 사원 등록
    insertEmployee: function() {
      let employee = this.employee;
      let router = this.$router;
      // ajax 재호출 함수
      let func = this.function; 

      $.ajax({
        url : 'http://192.168.0.29/myserver/empInsert',
        type: 'POST',
        dataType: 'json',
        data : employee,
        success: function(data) {
          if (data != null) {
            alert('입력이 완료되었습니다.');
            // ajax 호출하여 변경한 리스트로 업데이트
            func();
            router.push({name : 'myEmpList'});
          }
        }, 
        error : function(reject) {
          alert(reject);
        }
      });
    }
  }
  
}

