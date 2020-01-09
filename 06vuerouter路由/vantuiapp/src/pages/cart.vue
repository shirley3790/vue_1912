<template>
  <div>
    <!-- 回到上一页 -->
    <app-back></app-back>
    <!-- 跳转页面 -->
    <van-button type="primary">登陆</van-button>
    <!-- 商品列表 -->
    <div class="list">
      <div class="item" v-for="item in 6" :key="item">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >
          <div slot="tags">
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </div>
          <div slot="footer">
            <p id="btns">
              <input type="button" value="-" />
              <input type="text" v-model="num" />
              <input type="button" value="+" />
            </p>
          </div>
        </van-card>
      </div>
    </div>
    <!-- 结算 -->
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <span slot="tip">
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </span>
    </van-submit-bar>
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
  }
};
</script>