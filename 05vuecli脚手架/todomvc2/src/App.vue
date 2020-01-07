<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!-- 3.调用组件 -->
    <todo-mvc></todo-mvc>
  </div>
</template>

<script>
//1.导入子组件
// import HelloWorld from './components/HelloWorld.vue'
import todoMvc from "./components/todomvc";

export default {
  name: "app",
  components: {
    //2.注册组件
    // HelloWorld
    todoMvc
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
