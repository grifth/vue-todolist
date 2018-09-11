import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    // el.focus()
    // el 就是作用了 v-focus 的 DOM 元素
    console.log(el)
    el.focus()
  }
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
