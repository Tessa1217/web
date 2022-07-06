import myEmpList from './components/empList.js'
import myEmpInsert from './components/empInsert.js'
import myEmpModify from './components/empModify.js'

export default new VueRouter({
  mode : 'history',
  routes : [
    {
      path : '*',
      redirect : '/'
    },
    {
      path : '/',
      name : 'myEmpList',
      component : myEmpList,
      props : true
    },
    {
      path : '/empInsert',
      name : 'myEmpInsert',
      component : myEmpInsert,
      props : true
    },
    {
      path : '/empModify',
      name : 'myEmpModify',
      component : myEmpModify,
      props : true
    }
  ]
});