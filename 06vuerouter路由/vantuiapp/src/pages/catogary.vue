<template>
  <div>
    <!-- 回到上一页 -->
    <app-back></app-back>
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
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </div>
        </van-card>
      </div>
    </div>
  </div>
</template>
<script>
import appBack from "../components/appback";
export default {
  components: {
    appBack
  }
};
</script>