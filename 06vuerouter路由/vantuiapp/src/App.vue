<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <!-- <router-view></router-view> -->
    <Home></Home>
    <!-- 底部导航 -->
    <van-tabbar v-model="active" active-color="#58bc58" inactive-color="#000">
      <van-tabbar-item icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">列表页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" info="5">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from "./pages/home";

export default {
  name: "app",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {},
    onCancel() {}
  },
  components: {
    // HelloWorld
    Home
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
