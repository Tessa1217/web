import app from './app.js'
import router from './router.js'

console.log(app);
console.log(router);

new Vue({
  el : '#app',
  router, 
  template : '<app/>',
  components : {
    app
  }
})