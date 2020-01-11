<template>
  <div>
    <h2>登陆页</h2>
    <van-cell-group>
      <van-field v-model="username" label="用户名" placeholder="请输入用户名" />
      <van-field v-model="psw" label="密码" placeholder="请输入密码" />
      <input type="checkbox" name id v-model="keep" />七天免登陆
      <br />
      <input type="button" value="登陆" @click="login" />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      psw: "",
      keep: true
    };
  },
  methods: {
    async login() {
      //注册功能
      if (this.username && this.psw) {
        let { data } = await this.$axios.get(
          "http://localhost:1920/users/login",
          {
            params: {
              name: this.username,
              psw: this.psw,
              keep: this.keep
            }
          }
        );
        // window.console.log(data);
        if (data.type) {
          //登陆成功：如果有上一页，回到上一页，否则回到首页
          // localStorage.setItem("token", data.token);
          this.$store.commit("login", {
            name: this.username,
            token: data.token
          });
          this.$router.push("/home");
        } else {
          alert("登陆失败");
        }
      } else {
        alert("请完善信息");
      }
    }
  },
  created() {
    //钩子
    this.username = this.$route.query.name;
  }
};
</script>