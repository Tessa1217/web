import form from './components/form.js'
import main from './components/main.js'
import product from './components/product.js'
import editProduct from './components/editProduct.js'
//import product from '/components/product.js'
//import editProduct from './components/editProduct.js'

export default new VueRouter({
  // history 모드 : 히스토리 접근 가능 (뒤로가기 등)
  // hash 모드 : 해시가 앞에 붙음
  mode : 'history',
  routes : [
    {
    // redirect
      path : '*', 
      redirect : '/'
    },
    // name 속성을 지정하면 라우터 링크에 이름으로 연결도 가능
    // props : true => $route.params -> props로 사용 가능

    // 1차 컴포넌트들에 대한 경로
    {
      path : '/', 
      name : 'iMain', 
      component : main, 
      props : true
    },
    {
      path : '/form',  
      name : 'iform',
      component : form,
      props : true
    },
    {
      path : '/product/:id', // /가 있는 경우에는 메인 사이트 뒤에 붙음
      name : 'id',
      component : product,
      props : true, 
      // Nested Routes 
      // 메인에서 바로 들어가는 게 아니라 중간을 거쳐서 들어가는 경우
      // URL에 표시 필요
      children : [
        { 
          path : 'edit', // -> /product/:id/edit (route), 메인 사이트 주소에 못 붙기 때문에 / 사용 X
          name : 'edit', 
          component : editProduct,
          props : true
        }
      ]
    }
  ]
})