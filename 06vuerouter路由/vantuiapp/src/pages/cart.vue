<template>
  <div>
    <!-- 回到上一页 -->
    <app-back></app-back>
    <!-- 跳转页面 -->
    <!-- <van-button type="primary">登陆</van-button> -->
    <!-- 商品列表 -->
    <div class="list">
      <div class="item" v-for="item in cartlist" :key="item.did">
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
              <input type="button" value="-" @click="cut" />
              <input type="text" v-model="item.num" />
              <input type="button" value="+" @click="add" />
            </p>
          </div>
        </van-card>
      </div>
    </div>
    <!-- 结算 -->
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
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
      cartlist: []
    };
  },
  methods: {
    onSubmit() {},
    add() {},
    cut() {}
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
  }
};
</script>
<style scoped>
.list {
  height: auto;
  padding-bottom: 50px;
}
</style>