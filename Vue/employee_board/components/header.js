let template = `<header>
                  <router-link tag="h3" :to="{name:'myEmpList'}">사원 관리 목록</router-link>
                </header>`

export default {
  name : 'my-header',
  template : template
}