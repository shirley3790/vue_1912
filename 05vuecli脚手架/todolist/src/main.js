import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// new Vue({
//   // el: '#app', //el:把数据放在#app的节点里面再渲染
//   // template: '',//结构+数据=>覆盖组件<app-head></app-head> 优先级比el
//   // render: h => h(App),//render 编译好再渲染 优先级比template
// }).$mount('#app');