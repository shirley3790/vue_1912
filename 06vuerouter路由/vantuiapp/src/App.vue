<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!-- 内容的出口 -->
    <router-view></router-view>

    <!-- 导航子组件 -->
    <app-nav></app-nav>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import appNav from "./components/appnav";

export default {
  name: "app",
  data() {
    return {
      value: ""
    };
  },

  components: {
    // HelloWorld
    appNav
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
