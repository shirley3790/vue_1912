<template>
  <van-nav-bar
    title="标题"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      //   Toast("返回");
      this.$router.back();
    },
    onClickRight() {
      //   Toast("按钮");
    }
  }
};
</script>