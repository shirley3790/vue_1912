<template>
  <div class="input-group">
    <input
      type="text"
      class="form-control"
      ref="inputele"
      v-model.trim="tex"
      @keyup.13="addtaskitem"
    />
    <input type="date" class v-model="time" />
    <!-- 按钮todobutton组件 :事件如果是绑在组件上的，记得要加事件修饰符native -->
    <todo-button class="btn-primary" @click.native="addtaskitem">提交</todo-button>
    <!-- <button type="button" class="btn btn-primary" @click="addtaskitem">提交</button> -->
  </div>
</template>
<script>
import todoButton from "./todobutton";
export default {
  props: ["addtask"],
  data: function() {
    return {
      tex: "", //内容输入
      time: ""
    };
  },
  methods: {
    addtaskitem() {
      //数据的添加
      this.addtask(this.tex, this.time);
      //清空
      this.tex = "";
      //聚焦
      this.$refs.inputele.focus();
    }
  },
  components: {
    todoButton
  }
};
</script>