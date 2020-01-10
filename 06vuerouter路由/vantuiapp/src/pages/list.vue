<template>
  <div>
    <!-- 搜索框 -->
    <app-search></app-search>
    <!-- 分类 -->
    <van-row>
      <van-col span="6">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="item in list" :key="item" :title="item" @click="change(item)" />
        </van-sidebar>
      </van-col>
      <van-col span="18">
        <ul class="goodslist">
          <li v-for="item in goodslist" :key="item.gid">
            <img :src="item.curl" alt />
            <p>{{item.gname}}</p>
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
      activeKey: 0,
      cname: "进口水果",
      list: ["进口水果", "国产水果", "精选肉类"],
      goodslist: ""
    };
  },
  components: {
    appSearch
  },
  methods: {
    async getlist() {
      let { data } = await this.$axios.get(
        "http://localhost:1920/goods/getlist",
        {
          params: {
            cname: this.cname
          }
        }
      );
      // window.console.log(data);
      this.goodslist = data;
    },
    change(cname) {
      this.cname = cname;
      this.getlist();
    }
  },
  created() {
    this.getlist(); //调用获取进口水果的数据
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