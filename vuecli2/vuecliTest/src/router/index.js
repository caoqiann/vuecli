import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/Hi',
     //有子路由时 外部设置的name是没有作用的
      component: Hi,
      children:[
        {path:'/',name:'hello/hi',component:Hi},
        {path:'hi1',name:'hi1',component:Hi1},
        {path:'hi2',name:'hi2',component:Hi2}
      ]
    }
  ]
})


/*使用name传参的方法
1.在路由中配置name
2.使用$route.name来接收
*/