let template = `<header>  
                  <div class="navbar navbar-default">
                    <div class="navbar-header">
                      <h1><router-link v-bind:to="{name : 'iMain'}">{{ sitename }}</router-link></h1>
                    </div>
                    <div class="nav navbar-nav navbar-right cart">
                      <router-link active-class="active" tag="button" class="btn btn-default btn-lg"
                      v-bind:to="{name : 'iform'}">
                        <span class="glyphicon glyphicon-shopping-cart">{{ cartItemCount }}</span>
                        <span>체크아웃</span>
                      </router-link>
                    </div>
                  </div>
                </header>`
;
export default {
  name : 'my-header',
  template : template,
  data : function() {
    return {
      sitename : 'Vue.js 애완용품샵'
    }
  }, 
  props : ['cartItemCount']
}