let template = `<div>
                  <table>
                    <thead>
                      <tr>
                        <th>성</th>
                        <th>이름</th>
                        <th>사원번호</th>
                        <th>부서코드</th>
                        <th>부서이름</th>
                        <th>매니저</th>
                        <th>커미션(백분율)</th>
                        <th>연봉</th>
                        <th>업무코드</th>
                        <th>입사정보</th>
                        <th>연락처</th>
                        <th>이메일</th>
                      </tr>
                    </thead>
                    <tbody>
                      <router-link tag="tr" v-for="employee in currentData" :to="{name:'myEmpModify', params:{employee:employee}}">
                        <td>{{ employee.last_name }}</td>
                        <td>{{ employee.first_name }}</td>
                        <td>{{ employee.employee_id }}</td>
                        <td>{{ employee.department_id }}</td>
                        <td>{{ employee.department_name }}</td>
                        <td>{{ employee.manager_id }}</td>
                        <td>{{ employee.commission_pct }}</td>
                        <td>{{ employee.salary }}</td>
                        <td>{{ employee.job_id }}</td>
                        <td>{{ employee.hire_date }}</td>
                        <td>{{ employee.phone_number }}</td>
                        <td>{{ employee.email }}</td>
                      </router-link>
                      <!--<tr v-for="employee in currentData" ></tr>-->
                    </tbody>
                  </table>
                  <ul class="pagination">
                    <template>
                      <li class="page-item" v-for="page in pagingInfo.totalPage" v-on:click="currentPage=page">{{ page }}</li>
                    </template>
                  </ul>
                  <div class="btnContainer">
                    <router-link tag="button" :to="{name:'myEmpInsert', params:{function:listChange}}">사원등록</router-link>
                  </div>
                </div>`

export default {
  name : 'my-emp-list',
  template : template, 
  data : function() {
    return {
      empList : [], 
      currentPage : 1
    }
  },
  created : function() {
    let emp = this.empList;
    $.ajax({
      url : 'http://192.168.0.29/myserver/empSelect',
      dataType : 'json',
      success : function(data) {
        $(data).each((idx, obj) => {
          emp.push(obj);
        })
      },
      error : function(reject) {
        console.log(reject);
      }
    });
  },
  computed : {
    pagingInfo : function() {
      let perData = 10;
      let totalPage = Math.ceil(this.empList.length/perData);
      let totalPageArray = [];
      for (let i = 1; i <= totalPage; i++) {
        totalPageArray.push(i);
      }
      return {
        perData : perData,
        totalPage : totalPageArray
      }
    },
    currentData : function() {
      console.log(this.currentPage);
      let firstIdx = (this.currentPage - 1) * this.pagingInfo.perData;
      let lastIdx = firstIdx + this.pagingInfo.perData - 1;
      return this.empList.filter((elem, idx) => {
        return idx >= firstIdx ? (idx <= lastIdx ? true : false) : false;
      })
    }
  },
  methods : {
    listChange : function() {
      this.empList = this.created; 
    }
  }
}

