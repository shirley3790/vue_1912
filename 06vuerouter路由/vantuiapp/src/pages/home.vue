<template>
  <div>
    <!-- 调用组件 -->
    <app-search></app-search>
    <app-swiper></app-swiper>
    <!-- 九宫格 -->
    <van-grid :gutter="10">
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    <!-- 图片列表 -->
    <van-grid :border="false" :column-num="3">
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import appSearch from "../components/appsearch";
import appSwiper from "../components/appswiper";
export default {
  components: {
    appSearch,
    appSwiper
  },
  beforeRouteLeave(to, from, next) {
    //组件内路由守卫
    //离开
    // window.console.log("home beforeRouteLeave");
    // window.console.log(to); //去哪
    // window.console.log(from); //从哪里切走
    next(); //进入下一个钩子
  },
  created() {
    //获取列表数据
    this.$store.dispatch("getcartList"); //添加商品列表数据
  }
};
</script>