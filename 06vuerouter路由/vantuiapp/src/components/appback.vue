<template>
  <van-nav-bar
    :title="title[currunindex]"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>
<script>
export default {
  data() {
    return {
      title: ["列表页", "详情页"]
    };
  },
  methods: {
    onClickLeft() {
      //   Toast("返回");
      this.$router.back();
    },
    onClickRight() {
      //   Toast("按钮");
    }
  },
  computed: {
    currunindex() {
      let num = 0;
      if (this.$route.path == "/details") {
        num = 1;
      }
      return num;
    }
  },
  created() {
    // window.console.log(this.$route.path);
  }
};
</script>