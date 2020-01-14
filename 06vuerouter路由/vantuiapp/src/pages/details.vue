<template>
  <div>
    <!-- 回到上一页 -->
    <app-back></app-back>
    <!-- 轮播图 -->
    <van-swipe indicator-color="white">
      <van-swipe-item>
        <van-image :src="goodinf.gurl" />
      </van-swipe-item>
    </van-swipe>

    <!-- 商品信息 -->
    <h2>{{goodinf.gname}}</h2>
    <p>价格：{{ goodinf.price }}块钱</p>
    <p id="btns">
      <input type="button" value="-" @click="cut" />
      <input type="text" v-model="num" />
      <input type="button" value="+" @click="add" />
    </p>
    <!-- 提交购物车按钮组 -->
    <van-goods-action>
      <van-goods-action-icon icon="home-o" text="主页" @click="tohome" />
      <van-goods-action-icon icon="cart-o" text="购物车" info="5" @click="tocart" />
      <van-goods-action-button type="warning" text="加入购物车" @click="additem" />
      <van-goods-action-button type="danger" text="立即购买" @click="tocart" />
    </van-goods-action>
  </div>
</template>
<script>
import appBack from "../components/appback";
// import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
// import {mapActions} from 'vuex';
export default {
  data() {
    return {
      num: 1,
      goodinf: {}
    };
  },
  components: {
    appBack
  },
  methods: {
    tohome() {
      //跳到首页
      this.$router.push("/home");
    },
    tocart() {
      // window.console.log(999);
      //跳到购物车页面
      this.$router.push("/cart");
    },
    async getdata(gid) {
      //获取gid=xx商品信息
      let { data } = await this.$axios.get("http://localhost:1920/goods/good", {
        params: {
          gid
        }
      });
      this.goodinf = data[0];
      window.console.log(this.goodinf);
    },
    cut() {
      //减去数量
      this.num--;
    },
    add() {
      //加数量
      this.num++;
    },
    additem() {
      //添加新商品gid, uid, gname, price, kucun, num
      // window.console.log("加入购物车");
      let good = {
        gid: this.goodinf.gid2,
        uid: 1,
        gname: this.goodinf.gname,
        price: this.goodinf.price,
        kucun: this.goodinf.kucun,
        num: this.num
      };
      this.$store.dispatch("additem", good); //添加商品数据
    }
  },
  watch: {
    //监听数据变化，数量最小是1，最大不超过库存量
    num(val) {
      if (val <= 1) {
        this.num = 1;
        window.console.log("最小值");
      }
      if (val >= this.goodinf.kucun) {
        this.num = this.goodinf.kucun;
        window.console.log("最大值");
      }
    }
  },
  created() {
    let gid = this.$route.query.gid;
    this.getdata(gid);
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