import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../components/App'
import User from '../components/User'
import ArticleOpen from '../components/ArticleOpen'
import ArticleCreate from '../components/ArticleCreate'
import ArticleUpdate from '../components/ArticleUpdate'
import Father from  '../components/Father'
import Son from '../components/Son'

Vue.use(VueRouter)

const routes = [
  {
    path: '/p/create',
    component: ArticleCreate
  },
  {
    path: '/p/:id_article/update',
    component: ArticleUpdate
  },
  {
    path: '/p/:id_article',
    component: ArticleOpen
  },
  {
    path: '/login',
    component: User
  },
  {
    path: '/father',
    component: Father
  },
  {
    path: '/son',
    component: Son
  },
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router;

