<template>
  <div>
    <!-- 回到上一页 -->
    <app-back></app-back>
    <!-- 跳转页面 -->
    <!-- <van-button type="primary">登陆</van-button> -->
    <!-- 商品列表 -->
    <keep-alive>
      <div class="list">
        <div class="item" v-for="(item,index) in cartlist" :key="item.did">
          <van-card
            :num="item.num"
            :price="item.price"
            desc="描述信息"
            :title="item.gname"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          >
            <!-- <div slot="tags">
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
            </div>-->
            <div slot="footer">
              <p id="btns">
                <input type="button" value="-" @click="cut(item,index)" />
                <input type="text" v-model="item.num" />
                <input type="button" value="+" @click="add(item,index)" />
              </p>
            </div>
          </van-card>
        </div>
      </div>
    </keep-alive>
    <!-- 结算 -->
    <van-submit-bar :price="totalNum" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <!-- <span slot="tip">
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </span>-->
    </van-submit-bar>
  </div>
</template>
<script>
import appBack from "../components/appback";

export default {
  data() {
    return {
      checked: true,
      num: 1,
      cartlist: [],
      totalNum: ""
    };
  },
  methods: {
    onSubmit() {},
    add(item, index) {
      // window.console.log(item);
      // window.console.log(index);
      if (item.num < item.kucun) {
        this.cartlist[index].num++;
        let good = {
          gid: item.gid,
          uid: item.uid,
          num: this.cartlist[index].num
        };
        this.$store.dispatch("updategood", good);
      } else {
        window.console.log("达到库存量");
      }
    },
    cut(item, index) {
      if (item.num > 1) {
        this.cartlist[index].num--;
        let good = {
          gid: item.gid,
          uid: item.uid,
          num: this.cartlist[index].num
        };
        this.$store.dispatch("updategood", good);
      } else {
        window.console.log("最少买一份");
      }
    }
  },
  components: {
    appBack
  },
  created() {
    //购物车数据渲染
    // let data = this.$store.state.products;
    // window.console.log(data);
    // this.$store.dispatch("getlist", { cid: 1, cid3: 1 });
    // let list = this.$store.state.cart.cartlist;
    // window.console.log(list);

    //获取列表数据
    this.$store.dispatch("getcartList"); //添加商品列表数据
    //获取数据列表
    this.cartlist = this.$store.state.cart.cartlist;
    // window.console.log(this.$store.state.cart.cartlist);
    window.console.log(this.cartlist);

    this.totalNum = this.$store.getters.money * 100;
  },
  watch: {
    cartlist: {
      handler(newval) {
        window.console.log("变了");
        window.console.log(newval);
        let res = 0;
        newval.forEach(item => {
          res += item.price * item.num;
        });
        this.totalNum = res * 100;
      },
      immediate: true, //最初绑定的时候 立即执行监听
      deep: true // 深度监听
    }
  }
};
</script>
<style scoped>
.list {
  height: auto;
  padding-bottom: 50px;
}
</style>