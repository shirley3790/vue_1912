<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <app-list></app-list>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import appList from "./components/applist.vue";

export default {
  name: "app",
  components: {
    //局部组件注册
    // HelloWorld
    appList
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
  margin-top: 60px;
}
</style>
