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
    <!-- 删除store数据 -->
    <ul>
      <li>
        <a href="#" @click="remove">删除鼠标</a> &nbsp;&nbsp;&nbsp;
        <a href="#" @click="add">添加数据</a>&nbsp;&nbsp;&nbsp;
        <i>{{city}}</i>
      </li>
      <li></li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
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
    },
    remove() {
      //调用store的一个方法实现store.state数据的删除
      this.$store.commit("removeItem", 0); //删除鼠标
    },
    add() {
      let good = {
        id: 5,
        name: "显卡",
        price: 299
      };
      this.$store.commit("addItem", good);
    }
  },
  created() {
    window.console.log(this.$route);

    //获取$store里面的state的数据:如果是模块化的写法，记得要加模块化的名字 this.$store.state.模块名字.数据xx
    let data = this.$store.state.cart.products;
    window.console.log(data);

    //获取$store里面的getter的数据
    let num = this.$store.getters.total;
    window.console.log("总数量是" + num);

    //调用store里面的action是方法发送ajax获取数据
    this.$store.dispatch("getlist", { cid: 1, cid3: 1 });
  },
  computed: {
    // 映射state.cart.city的数据
    ...mapState({
      city: state => state.cart.city
    })
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