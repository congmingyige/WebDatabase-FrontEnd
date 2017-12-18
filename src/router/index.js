import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../components/App'
import User from '../components/User'
import Article from '../components/Article'
import ArticleCreate from '../components/ArticleCreate'
import ArticleUpdate from '../components/ArticleUpdate'
import Mainpage from '../components/mainpage'
import Test from '../components/Test'

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
    path: '/p',
    component: Mainpage
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/',
    component: User
  }
]

const router = new VueRouter({
	routes,
	mode: 'history',
})

export default router;
