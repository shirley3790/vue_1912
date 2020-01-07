<template>
  <!-- 不要在组件根节点绑定v-for -->
  <tr @click="selectitem()" :key="item.id">
    <td>
      <input type="checkbox" name id v-model="item.ischecked" />
    </td>
    <td scope="row" v-text="item.id"></td>
    <td v-text="item.con"></td>
    <td v-text="item.time"></td>
    <td v-text="item.iscompeletd"></td>
    <td>
      <!-- 按钮todobutton组件 :事件如果是绑在组件上的，记得要加事件修饰符native -->
      <todo-button class="btn-success" @click.stop.native="compeletitem()">
        完成
        <!-- vue以前的写法:b标签会渲染出来 -->
        <!-- <b slot="title">完成</b> -->
        <!-- vue2.6新写法:template不会渲染出来 -->
        <!-- <template v-slot:title>
          <b>完成</b>
        </template>-->
        <!-- 父组件通过插槽接收子组件的数据 -->
        <!-- <template v-slot:title="obj">完成 {{obj}}</template> -->
      </todo-button>
      <todo-button class="btn-danger" @click.stop.native="removeitem()">删除</todo-button>
      <!-- <button type="button" class="btn btn-success" @click.stop="compeletitem()">完成</button>
      <button type="button" class="btn btn-danger" @click.stop="removeitem()">删除</button>-->
    </td>
  </tr>
</template>
<script>
import todoButton from "./todobutton";
import Bus from "../bus"; //引入总线，绑定和触发事件用的

export default {
  props: ["item", "index", "remove", "compelet", "select"],
  methods: {
    selectitem() {
      //点击tr选中或不选某行
      //   this.select(this.index);
      Bus.$emit("selectitem2", this.index);
    },
    compeletitem() {
      //完成任务
      //   this.compelet(this.index);
      Bus.$emit("compeletitem2", this.index);
    },
    removeitem() {
      //删除某个任务
      //   this.remove(this.index);
      Bus.$emit("removeitem2", this.index);
    }
  },
  components: {
    todoButton
  }
};
</script>