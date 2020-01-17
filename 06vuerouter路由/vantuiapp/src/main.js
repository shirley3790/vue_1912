import Vue from 'vue'
import App from './App.vue'

import '../node_modules/vant/lib/index.css';
import router from './routers/index';
import axios from "axios";
import store from './store/index';
Vue.prototype.$axios = axios;

//引入ui框架：引入所有vant组件，上线之前要按需引入做优化:真正做项目需要这样做优化，可以让我们的前端项目非常小
// import { Grid, GridItem,Card  } from 'vant';
// Vue.use(Grid).use(GridItem).use(Card);

import vant from 'vant';
Vue.use(vant);

Vue.config.productionTip = false

new Vue({
  router,//注入router，this.$router
  store,//this.$store 找到vuex存储数据
  render: h => h(App),
}).$mount('#app')
