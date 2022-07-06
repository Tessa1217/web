import boardList from './components/board.js'
import boardWrite from './components/boardWrite.js';
import detailedBoard from './components/detailedBoard.js'
import editBoard from './components/editBoard.js'
import subcomment from './components/subComment.js'

export default new VueRouter({
  mode : 'history',
  routes : [
    {
      path : '*',
      redirect : '/'
    },
    {
      path : '/',
      name : 'boardList',
      component : boardList,
      props : true
    },
    {
      path : '/detailedBoard/:content',
      name : 'detailedBoard',
      component : detailedBoard,
      props : true,
      children : [{
        path: 'edit',
        name : 'edit',
        component : editBoard,
        props : true
      }]
    },
    {
      path : '/boardWrite',
      name : 'boardWrite',
      component : boardWrite,
      props : true
    }
  ]
});