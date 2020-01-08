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
  }
};
</script>