import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../components/App'
import User from '../components/User'
import Article from '../components/Article'
import ArticleCreate from '../components/ArticleCreate'
import ArticleUpdate from '../components/ArticleUpdate'

Vue.use(VueRouter)

const routes = [
  {
    path: '/p/create',
    component: ArticleCreate
  },
  {
    path: '/p/:id_article(\\d+)/update',
    component: ArticleUpdate
  },
  {
    path: '/p/:id_article(\\d+)',
    component: Article
  },
  {
    path: '/login',
    component: User
  },
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router;

