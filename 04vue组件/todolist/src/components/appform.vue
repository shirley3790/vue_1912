<template>
  <div class="input-group">
    <input type="text" class="form-control" ref="inputele" v-model.trim="tex" @keyup.13="additem" />
    <input type="date" class v-model="time" />
    <button type="button" class="btn btn-primary" @click="additem">提交</button>
  </div>
</template>
<script>
export default {
  props: ["addtask"],
  data: function() {
    return {
      tex: "", //内容输入
      time: ""
    };
  },
  methods: {
    additem() {
      // window.console.log(666);
      this.addtask(this.tex, this.time);
      //清空表单
      this.tex = "";
      //找到节点
      // window.console.log(this.$refs.inputele);
      //聚焦
      this.$refs.inputele.focus();
    }
  }
};
</script>