// 전체 헤더
let template = `<header class="active">
                  <router-link tag="h3" :to="{name:'boardList'}">Vue.js 게시판</router-link>
                  <router-link tag="h5" :to="{name:'boardList'}">자유게시판</router-link>
                </header>`
  
export default {
  name : 'my-header',
  template : template
}