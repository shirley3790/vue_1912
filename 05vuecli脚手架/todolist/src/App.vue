<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- 3、调用子组件 -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <todo-list></todo-list>
  </div>
</template>

<script>
//1、引入一个子组件 HelloWorld
// import HelloWorld from "./components/HelloWorld.vue";
import todoList from "./components/todolist";

//总组件
export default {
  name: "app",
  components: {
    //2、局部组件注册
    // HelloWorld
    todoList
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
