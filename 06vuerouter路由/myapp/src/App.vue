<template>
  <div id="app">
    <!-- 菜单 -->
    <p>
      <a href="#/home">主页</a>
      <a href="#/list">列表</a>
      <a href="#/cart">购物车</a>
      <a href="#/mine">个人中心</a>
    </p>
    <div>
      <!-- 切换内容:路由内容输出的地方 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  margin: 10px;
}
</style>
