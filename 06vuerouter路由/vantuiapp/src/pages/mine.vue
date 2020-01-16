<template>
  <div>
    <div v-show="!istrue">
      <van-button type="primary" @click="toreg">注册</van-button>
      <van-button type="info" @click="tologin">登陆</van-button>
    </div>
    <van-button v-show="istrue" type="info" @click="tologout">退出</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      istrue: false //初始：显示登陆 false null，点击登陆后：显示退出 true
    };
  },
  methods: {
    toreg() {
      this.$router.push("/reg"); //跳转到注册页
    },
    tologin() {
      this.$router.push("/login"); //跳转到登陆页
    },
    tologout() {
      //退出：删除token
      this.$store.commit("logout");
      this.istrue = false;
    }
  },
  created() {
    //校验token
    // let token = localStorage.getItem("token");
    // let { data } = await this.$axios.get("http://localhost:1920/users/verify", {
    //   params: {
    //     token
    //   }
    // });
    this.$store.dispatch("verify");
    let isok = Boolean(localStorage.getItem("isok"));
    window.console.log(isok);
    this.istrue = isok;
    // if (data.type) {
    //   //校验成功，把istrue改成false
    //   this.istrue = false;
    // } else {
    //   //校验失败：篡改或失效了
    //   this.istrue = true;
    // }
    // window.console.log(data);
  }
};
</script>