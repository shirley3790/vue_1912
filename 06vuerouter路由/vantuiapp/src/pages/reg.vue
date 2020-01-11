<template>
  <div>
    <h2>注册页</h2>
    <van-cell-group>
      <van-field v-model.trim="username" label="用户名" placeholder="请输入用户名" @blur="checkname" />
      <!-- <span class="us_inf" :style="{color:sus}">{{ msg1 }}</span> -->
      <span class="us_inf" :class="{suc:iscolor,fal:!iscolor}">{{ msg1 }}</span>
      <van-field v-model.trim="psw" label="密码" placeholder="请输入密码" />
      <span></span>
      <input type="button" value="注册" @click="reg" />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      psw: "",
      isok: false, //验证通过 true
      msg1: "",
      sus: "",
      iscolor: true
    };
  },
  methods: {
    async checkname() {
      let { data } = await this.$axios.get(
        "http://localhost:1920/users/checkname",
        {
          params: {
            name: this.username
          }
        }
      );
      // window.console.log(data);
      if (data.type) {
        //可以注册
        this.isok = true;
        this.msg1 = "可以注册";
        // this.sus = "green";
        this.iscolor = true;
      } else {
        //不能注册
        this.isok = false;
        this.msg1 = "用户名已存在";
        // this.sus = "red";
        this.iscolor = false;
      }
    },
    async reg() {
      //注册功能
      if (this.username && this.psw) {
        let { data } = await this.$axios.post(
          "http://localhost:1920/users/reg",
          {
            name: this.username,
            password: this.psw
          }
        );
        // window.console.log(data);
        if (data.type) {
          //注册成功跳转到登陆页把用户名带过去
          this.$router.push({ name: "login", query: { name: this.username } });
        } else {
          alert("注册失败");
        }
      } else {
        alert("请完善信息");
      }
    }
  }
};
</script>
<style scoped>
.suc {
  color: green;
}
.fal {
  color: red;
}
</style>