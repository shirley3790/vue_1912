<template>
  <button type="button" class="btn">
    <!-- 插槽：父传子的通信 -->
    <!-- 匿名插槽：默认会把父组件的内容传到<slot />这里显示 -->
    <slot />
    <!-- 具名插槽：会把父组件里面slot="title"里面的内容放到这里 -->
    <!-- <slot name="title"  /> -->
    <!-- 插槽：子传父通信 -->
    <!-- <slot name="title" :uname="username" :psw="123" adr="防城港"></slot> -->
  </button>
</template>
<script>
export default {
  data: function() {
    return {
      username: "malin"
    };
  }
};
</script>
<style scoped>
/* .btn {
  width: 80px;
  height: 30px;
} */
</style>