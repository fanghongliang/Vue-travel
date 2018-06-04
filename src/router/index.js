import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/Home/home.vue'   
  
   
//@指src目录

Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'home',
      component:home
    }
  ]
})
