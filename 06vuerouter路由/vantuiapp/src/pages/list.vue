<template>
  <div>
    <!-- 搜索框 -->
    <app-search></app-search>
    <!-- 分类 -->
    <van-row>
      <van-col span="6">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            v-for="item in list"
            :key="item.cid"
            :title="item.cname"
            @click="change(item.cid2)"
          />
        </van-sidebar>
      </van-col>
      <van-col span="18">
        <ul class="goodslist">
          <li v-for="item in goodslist" :key="item.gid" @click="getdata(item)">
            <img :src="item.curl" alt />
            <p>{{item.cname2}}</p>
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
      list: [],
      goodslist: ""
    };
  },
  components: {
    appSearch
  },
  methods: {
    async getlist2(cid) {
      //发送第二个请求

      // window.console.log(666 + "这里");
      // window.console.log(this.list);
      let { data } = await this.$axios.get(
        "http://localhost:1920/goods/list2",
        {
          params: {
            cid
          }
        }
      );
      // window.console.log(data);
      this.goodslist = data;
    },
    async getlistname() {
      let { data } = await this.$axios.get("http://localhost:1920/goods/list1");
      // window.console.log(data);
      this.list = data;
      this.getlist2(this.list[0].cid2);
    },
    change(cid) {
      //点哪个分类就查询哪个分类
      this.getlist2(cid);
    },
    getdata(item) {
      //点击苹果就跳到二级列表
      let { cid, cid3 } = item;
      this.$router.push({ name: "list2", query: { cid, cid3 } });
    }
  },
  created() {
    this.getlistname();
  },
  beforeRouteEnter(to, from, next) {
    //组件内路由守卫
    //离开
    // window.console.log("list beforeRouteEnter");
    // window.console.log(to);
    // window.console.log(from);
    //简易版鉴权
    let token = localStorage.getItem("token");
    if (token) {
      //如果有就可以进入
      // window.console.log("通过，可以进入该路由");
      next();
    } else {
      //没有就跳到登陆页
      // window.console.log("跳到登陆页");
      // this.push("/login");
    }
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