import Vue from 'vue'// vue实例
import Router from 'vue-router' //vue router


import Home from '../components/pages/Home/Home' //某一个组件 
import Main_1 from '../components/pages/Home/Main_1' 
import Recommend from '../components/pages/Recommend/Recommend' 
import OrderBy from '../components/pages/OrderBy/OrderBy'
import Tuijian from '../components/pages/Home/Tuijian'
import My from '../components/pages/My/My'
import Share from '../components/pages/Inform/Inform'
import Collection from '../components/pages/Inform/Share'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',//匹配的hash地址
      redirect:'Home'//重定向，检测到如果是跟路径的话，直接跳到home页面
    },
    {
      path: '/Home',//匹配的hash地址
      name: 'Home',//路由的名字
      component: Home,// 该路由所引用的组件
      children:[
         {path: '/',name: 'Tuijian',component: Tuijian},//一进去就默认推荐页
    	   {path:'Recommend',name:'Recommend',component:Recommend},
    	   {path:'OrderBy',name:'OrderBy',component:OrderBy},
    	   {path:'Tuijian',name:'Tuijian',component:Tuijian},
    	   ]
    }, 
     {
      path: '/My',//匹配的hash地址
      name: 'My',//路由的名字
      component: My,// 该路由所引用的组件
    },
    {
      path: '/Share',//匹配的hash地址
      name: 'Share',//路由的名字
      component: Share,// 该路由所引用的组件
    },
    {
      path: '/Collection',//匹配的hash地址
      name: 'Collection',//路由的名字
      component: Collection,// 该路由所引用的组件
    },
    
  ]
  
})