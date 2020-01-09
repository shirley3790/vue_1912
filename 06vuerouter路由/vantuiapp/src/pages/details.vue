<template>
  <div>
    <!-- 回到上一页 -->
    <app-back></app-back>
    <!-- 轮播图 -->
    <van-swipe indicator-color="white">
      <van-swipe-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
      </van-swipe-item>
    </van-swipe>
    <!-- 商品信息 -->
    <h2>小苹果</h2>
    <p>价格：10块钱</p>
    <p id="btns">
      <input type="button" value="-" />
      <input type="text" v-model="num" />
      <input type="button" value="+" />
    </p>
    <!-- 提交购物车按钮组 -->
    <van-goods-action>
      <van-goods-action-icon icon="home-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" info="5" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>
<script>
import appBack from "../components/appback";
export default {
  data() {
    return {
      num: 1
    };
  },
  components: {
    appBack
  },
  methods: {
    onClickIcon() {
      //   Toast("点击图标");
    },
    onClickButton() {
      //   Toast("点击按钮");
    }
  }
};
</script>
<style lang="scss">
#btns {
  input {
    width: 50px;
    height: 30px;
  }
}
</style>