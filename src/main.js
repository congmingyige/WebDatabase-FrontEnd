// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'
import App from './components/App'
import HelloWorld from './components/HelloWorld' 
import Test from './components/Test'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(router)

new Vue({
    el: '#app',
    router,
    template: '<Test />',
    components: { Test, App, HelloWorld }
})
