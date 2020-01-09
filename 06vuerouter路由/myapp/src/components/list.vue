<template>
  <div>
    <h1>列表页</h1>
    <h2>分类：{{id}}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: ""
    };
  },
  created() {
    //获取当前组件 :this.$route
    window.console.log(this.$route);
    //如果是动态路由传输的数据，也是用param接收，并且刷新后还在
    this.id = this.$route.params.id; //真实：拿到分类的id，发送请求拿到某类产品数据
    // this.id = this.$route.query.id; //真实：拿到分类的id，发送请求拿到某类产品数据，刷新后数据还在
  }
};
</script>