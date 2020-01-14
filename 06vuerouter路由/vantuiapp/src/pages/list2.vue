<template>
  <div>
    <!-- 回到上一页 -->
    <app-back></app-back>
    <!-- 商品列表 -->
    <div class="list">
      <div class="item" v-for="item in list" :key="item.gid" @click="todetail(item.gid2)">
        <van-card num="2" price="2.00" desc="描述信息" :title="item.gname" :thumb="item.gurl">
          <div slot="tags">
            <van-tag plain type="danger">年货节</van-tag>
            <van-tag plain type="danger">促销</van-tag>
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
  data() {
    return {
      list: []
    };
  },
  components: {
    appBack
  },
  methods: {
    async getdata() {
      let { data } = await this.$axios.get(
        "http://localhost:1920/goods/list3",
        {
          params: this.$route.query
        }
      );
      // window.console.log(data);
      this.list = data;
    },
    todetail(gid) {
      //跳转到详情页
      this.$router.push({ name: "details", query: { gid } });
    }
  },
  created() {
    //发送请求
    this.getdata();
  }
};
</script>