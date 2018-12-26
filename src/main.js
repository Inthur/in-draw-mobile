import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import polyfill from 'babel-polyfill'

Vue.use(VueRouter);



// 组件
import inDraw from './components/draw.vue'

// 路由器实例
// 配置路由规则
const router = new VueRouter({
  routes: [
    { path: '/',component: inDraw },
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
