<template>
  <div id="app">
    <!-- 菜单:导航，原生派的导航，a的href="哈希" -->
    <h6>菜单:导航，原生派的导航</h6>
    <p>
      <a href="#/home">主页</a>
      <a href="#/list">列表</a>
      <a href="#/cart">购物车</a>
      <a href="#/mine">个人中心</a>
    </p>
    <!-- 遍历导航 -->
    <h6>菜单:导航，原生派的导航,遍历导航</h6>
    <p>
      <a
        :href="'#' + item.path"
        v-for="item in menus"
        :key="item.name"
        @click="change(item.name)"
        :class="{active:item.name== current}"
      >{{ item.title }}</a>
    </p>
    <h6>声明式导航</h6>
    <!-- 声明式导航:利用内置组件 router-link的to属性实现路由跳转，最终会生成a标签 -->
    <p>
      <router-link to="/home" active-class="active">主页</router-link>
      <router-link to="/list" active-class="active">列表</router-link>
      <router-link to="/cart" active-class="active">购物车</router-link>
      <router-link to="/mine" active-class="active">个人中心</router-link>
    </p>
    <h6>声明式导航:遍历</h6>
    <!-- 渲染出声明式导航 -->
    <p>
      <router-link
        v-for="(item) in menus"
        :key="item.name"
        :to="item.path"
        active-class="active"
      >{{ item.title }}</router-link>
    </p>

    <h6>编程式导航</h6>
    <!-- 编程式导航 -->
    <p>
      <input
        v-for="item in menus"
        :key="item.name"
        type="button"
        :value="item.title"
        @click="goto(item)"
        :class="{bg: nowbg == item.name}"
      />
    </p>

    <!-- 路由传参 -->
    <p>
      <input type="button" value="主页" @click="tolist" />
    </p>

    <div>
      <!-- 切换内容:路由内容输出的地方 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//原生是这样获取哈希值的，但是要做很多细节的工作，所以工作的时候设置路由一般都用vue-router提高开发效率
// window.onhashchange = function() {
//   window.console.log(location.hash); //#/list
// };
export default {
  data() {
    return {
      nowbg: "home",
      current: "home",
      menus: [
        {
          name: "home",
          path: "/home",
          title: "主页"
        },
        {
          name: "list",
          path: "/list",
          title: "列表"
        },
        {
          name: "cart",
          path: "/cart",
          title: "购物车"
        },
        {
          name: "mine",
          path: "/mine",
          title: "个人中心"
        }
      ]
    };
  },
  methods: {
    goto(item) {
      /*
        实现路由跳转  this.$router 路由对象
          常用方法：
            * this.$router.push() 会被history管理(常用)
            * this.$router.replace() 不会被history管理
            * this.$router.go(n) 前进和后退，n可以是正负数
            * this.$router.forward() 前进一页(常用)
            * this.$router.back() 回到上一页(常用)
        
        this.$route 当前组件的路由:实现路由传参(如果需要实现页面数据共享，其实很多方法：借助本地存储localstroage或cookies)
          传参：
            * params
            * query
            * 动态路由传参
      */
      // this.$router.push(item.path);//直接写一个路径
      // this.$router.push({ path: item.path });
      this.$router.push({ name: item.name });
      this.nowbg = item.name;
    },
    change(name) {
      // window.console.log(this.$route);
      this.current = name;
    },
    tolist() {
      //在主页，点击的时候跳转到列表页，顺便把id=123带到列表页
      // this.$router.push({ name: "list", params: { id: 123 } }); //params传参必须用name实现跳转,刷新后就不存在了

      this.$router.push({ name: "list", query: { id: 123, name: "malin" } }); //params传参必须用name实现跳转

      // this.$router.push({
      //   name: "list",
      //   params: { id: 123 },
      //   query: { id: 123 }
      // });

      //动态路由
      // this.$router.push("/list/456");
    }
  },
  mounted() {
    //钩子函数：挂载成功后就触发这个函数
    // window.console.log(this.$route);
  }
};
</script>

<style>
a {
  margin: 10px;
}
.active {
  color: red;
}
.bg {
  background: orange;
}
</style>
