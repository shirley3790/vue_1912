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
      :info="item.info"
      @click="change(item.name)"
    >{{item.tex}}</van-tabbar-item>
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
          info: "10"
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
  }
};
</script>