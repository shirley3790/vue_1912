<template>
  <div class="input-group">
    <!-- 获取父组件插槽的内容并向父组件传数据 -->
    <slot name="title" :uname="uname" adr="防城港" :psw="123"></slot>
    <input type="text" class="form-control" ref="inputele" v-model.trim="tex" @keyup.13="additem" />
    <input type="date" class v-model="time" />
    <!-- <button type="button" class="btn btn-primary" @click="additem">提交</button> -->
    <app-button class="btn-primary" @click.stop.native="additem">提交</app-button>
  </div>
</template>
<script>
import appButton from "./appbutton";

export default {
  props: ["addtask"],
  data: function() {
    return {
      tex: "", //内容输入
      time: "",
      uname: "犬夜叉",
      age: 2000
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
  },
  components: {
    appButton
  }
};
</script>