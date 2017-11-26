import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '@/components/App'

Vue.use(VueRouter)

const routes = [
  {
    path: '/hello',
    component: HelloWorld
  },
  {
    path: '/',
    component: App
  }
]

const router = new VueRouter({
	routes
})

export default router;
