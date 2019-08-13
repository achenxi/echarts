import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'


import Main from '@/components/Main'
import List from '../components/main/List'
import List2 from '../components/main/List2'
import List3 from '../components/main/List3'
import List4 from '../components/main/List4'


 import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
 
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
		path: '/main',
		meta: {
			//meta元素
			 requireAuth: true,  
			},   
		component: Main,
		redirect: '/main/list',
		children: [
			{
				path: 'list',
				name: 'List',
				component: List
			},
			{
				path: 'list2',
				name: 'List2',
				component: List2
			},
			{
				path: 'list3',
				name: 'List3',
				component: List3
			},
			{
				path: 'list4',
				name: 'List4',
				component: List4
			}
		]
	} 
  ]
})
