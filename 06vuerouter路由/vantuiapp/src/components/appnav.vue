<template>
  <!-- 底部导航 -->
  <van-tabbar
    v-show="$route.name != 'details'"
    v-model="active"
    active-color="#58bc58"
    inactive-color="#000"
  >
    <van-tabbar-item
      v-for="item in menus"
      :key="item.name"
      :icon="item.icon"
      :info="item.name == 'cart' ? total : ''"
      @click="change(item.name)"
    >{{item.tex}}</van-tabbar-item>

    <!-- <van-tabbar-item key="home" icon="home-o" @click="change('home')">主页</van-tabbar-item> -->
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      menus: [
        {
          name: "home",
          icon: "home-o",
          tex: "主页",
          info: ""
        },
        {
          name: "list",
          icon: "apps-o",
          tex: "列表页",
          info: ""
        },
        {
          name: "cart",
          icon: "shopping-cart-o",
          tex: "购物车",
          info: ""
        },
        {
          name: "mine",
          icon: "friends-o",
          tex: "个人中心",
          info: ""
        }
      ]
      // isok: true
    };
  },
  computed: {
    total() {
      //购物车总数量
      // window.console.log("底部数据");
      // window.console.log(this.$store.state.cart.cartlist);
      return this.$store.state.cart.cartlist.length;
    }
  },

  methods: {
    change(name) {
      // window.console.log(666);
      this.$router.push({ name });
    }
  },
  created() {
    // window.console.log(this.$router);
    // window.console.log(this.$route);
    let arr = ["home", "list", "cart", "mine"];
    let index = arr.indexOf(this.$route.name);
    if (index >= 0) {
      this.active = index;
    } else {
      this.active = 0;
    }
    // if (this.$route.name == "details") {
    //   this.isok = false;
    // } else {
    //   this.isok = true;
    // }
    //获取列表数据
    this.$store.dispatch("getcartList"); //添加商品列表数据

    //购物车总数量
    // window.console.log(this.$store.getters.total);
    // this.menus[2].info = this.$store.state.cart.cartlist.length;
  },
  mounted() {
    // this.menus[2].info = this.$store.getters.total; //点击切换组件的时候也获取购物车总条数
  }
};
</script>