// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import App from './components/App'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(router)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
