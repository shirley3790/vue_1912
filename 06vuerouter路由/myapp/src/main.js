import Vue from 'vue'
import App from './App-router.vue'
import axios from "axios";
import router from './routers/index';//导入router

Vue.config.productionTip = false

Vue.prototype.$axios = axios;//把axios方法挂在Vue的原型下面
//new出来的实例对象就可以调用该方法了，因为实例和原型对象之间有原型链
//以后在子组件里面：this.$axios.get(url,{params:{username:'malin'}})  this.$axios.post(url,{username:'malin'}) this.$axios.put() this.$axios.delete()

new Vue({
  router,//5.把router注入到vue里面，为什么后期在子组件能用this.$router找到路由对象的关键
  render: h => h(App),
}).$mount('#app')
