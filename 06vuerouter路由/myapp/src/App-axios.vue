<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <h1>用户信息</h1>
    <!-- 用户数据渲染 -->
    <div>
      <ul>
        <li v-for="(item,index) in userlist.datalist" :key="item.uid" class="usitem">
          <p>id:{{ index + 1 }}</p>
          <p>用户名:{{ item.name }}</p>
          <p>密码：{{ item.psw }}</p>
          <!-- <p>注册时间：{{ item.regtime }}</p> -->
        </li>
      </ul>
    </div>
    <!-- 分页效果 -->
    <p class="pages">
      <a
        v-for="val in userlist.pages"
        href="#"
        :class="{active : val == currenpage}"
        :key="val"
        @click="change(val)"
      >{{ val }}</a>
    </p>

    <!-- 注册功能 -->
    <h1>注册功能</h1>
    <div>
      用户名:
      <input type="text" v-model.trim="username" />
      <br />密码:
      <input type="text" v-model.trim="password" />
      <br />
      <input type="button" value="注册" @click="reg" />
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
//2.引入第三方模块：axios专门用于发送ajax请求。1.npm i axios，这种引入方式缺点：每个需要发送请求的组件都要引入一次，不够方便=>把引入放到main.js,挂在Vue原型下面
// import axios from "axios";

export default {
  data() {
    return {
      currenpage: 1, //当前哪个页码高亮
      userlist: [], //获取到的所有数据
      page: 1, //第几页
      num: 5, //每页多少条
      username: "",
      password: ""
    };
  },
  name: "app",
  components: {
    // HelloWorld
  },
  methods: {
    change(val) {
      this.currenpage = val;
      this.page = val; //获取某页的数据
      this.getdata(); //重新发送请求
    },
    //获取数据的方法：发送get请求
    async getdata() {
      let { data } = await this.$axios.get("http://localhost:1920/users/all", {
        params: {
          page: this.page,
          num: this.num
        }
      });
      //4.得到数据渲染到结构里面
      this.userlist = data; //把获取到的数据设置到data里面
      // window.console.log(data);
    },
    //注册功能：发送post请求
    async reg() {
      if (this.username && this.password) {
        let data = await this.$axios.post("http://localhost:1920/users/reg", {
          name: this.username,
          password: this.password
        });
        window.console.log(data);
      } else {
        alert("不能为空");
      }
    }
  },
  created() {
    //3.发送ajax
    this.getdata();
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.usitem {
  width: 100px;
  height: 150px;
  background: #58bc58;
  padding: 0 10px;
  margin: 10px;
  float: left;
}
.pages {
  clear: both;
}
.pages a {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: #ccc;
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  margin-right: 10px;
}
.pages a.active {
  background: orange;
  color: #fff;
}
</style>
