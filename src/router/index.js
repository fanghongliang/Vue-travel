import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/Home/home.vue'   
import City from '@/pages/city/City.vue'   
import Detail from '@/pages/detail/Detail.vue'   
  
   
//@b别名src目录

Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'home',
      component:home
    },
    {
    	path: '/city',
    	name: 'City',
    	component: City
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component:Detail
    }],
    scrollBehavior(to,from,savedPosition) {
      return { x:0 , y:0 }
    }
})
