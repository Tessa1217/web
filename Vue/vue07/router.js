import myBoardMain from './components/main.js'
import myBoardList from './components/list.js'
import myBoardRead from './components/read.js'
import myBoardWrite from './components/write.js'

export default new VueRouter({
  mode : 'history', // default : 'hash' => "#/url"
  routes : [
    // main
    {
      path : '/',
      name : 'boardMain',
      component : myBoardMain,
      props : true
    },
    // boardList
    { 
      path : '/boardList',
      name : 'boardList',
      component : myBoardList,
      props : true
    },
    // boardRead
    {
      path : '/boardRead/:item',
      name : 'boardRead',
      component : myBoardRead,
      props : true
    },
    //boardWrite
    {
      path : '/boardWrite',
      name : 'boardWrite',
      component : myBoardWrite,
      props : true
    },
    {
      path : '*',
      redirect : '/'
    }
  ]
});


