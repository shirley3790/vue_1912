<template>
  <div>
    <!-- 搜索框 -->
    <app-search></app-search>
    <!-- 分类 -->
    <van-row>
      <van-col span="6">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
        </van-sidebar>
      </van-col>
      <van-col span="18">
        <ul class="goodslist">
          <li v-for="item in 20" :key="item">
            <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt />
            <p>百香果</p>
          </li>
        </ul>
      </van-col>
    </van-row>
  </div>
</template>
<script>
// 搜索框
import appSearch from "../components/appsearch";
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  components: {
    appSearch
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.goodslist {
  li {
    width: 25%;
    height: 80px;
    float: left;
    padding: 5px 0;
    margin-bottom: 10px;
    p {
      font-size: 12px;
    }
    img {
      display: block;
      width: 80%;
    }
  }
}
</style>