import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/icon/iconfont.css'
import '@/assets/icon/home/iconfont.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
