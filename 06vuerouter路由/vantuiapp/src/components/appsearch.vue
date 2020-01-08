<template>
  <!-- 搜索框组件 -->
  <form action="/">
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    />
  </form>
</template>
<script>
export default {};
</script>