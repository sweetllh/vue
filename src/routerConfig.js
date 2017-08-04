import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import Article from './components/Article.vue'
import UserInfo from './components/UserInfo.vue'
import UserLogin from './components/UserLogin.vue'
import UserReg from './components/UserReg.vue'

export default [
	{
		path:'/home',
		component:Home
	},
	{
		path:'/follow',
		component:Follow
	},
	{
		path:'/column',
		component:Column
	},
	{
		path:'/article/:id',
		component:Article
	},
	{
	    path:'/user-info',
	    component:UserInfo
	},
	{
	    path:'/user-login',
	    component:UserLogin
	},
	{
	    path:'/user-reg',
	    component:UserReg
	},
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '*',
		redirect: '/home'
	}
]
