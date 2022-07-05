let template = `<header>
                  <router-link tag="h3" :to="{name:'boardList'}">Vue.js 게시판</router-link>
                  <span><h4>자유게시판</h4></span>
                </header>`
  
export default {
  name : 'my-header',
  template : template
}