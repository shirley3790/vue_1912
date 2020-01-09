import Vue from 'vue'
import App from './App.vue'
//引入ui框架：引入所有vant组件，上线之前要按需引入做优化
import Vant from 'vant';
import '../node_modules/vant/lib/index.css';
import router from './routers/index';

Vue.use(Vant);//调用UI框架

Vue.config.productionTip = false

new Vue({
  router,//注入router
  render: h => h(App),
}).$mount('#app')
