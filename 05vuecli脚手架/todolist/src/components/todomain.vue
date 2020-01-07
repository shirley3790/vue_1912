<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">
            <input type="checkbox" v-model="checkall" name id />
            全选
          </th>
          <th scope="col">#</th>
          <th scope="col">待办事项</th>
          <th scope="col">预计完成时间</th>
          <th scope="col">是否完成</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <!-- todoitem子组件 -->
        <todo-item
          v-for="(item, index) in tasklist"
          :key="item.id"
          :item="item"
          :index="index"
          :select="select"
          :compelet="compelet"
          :remove="remove"
        ></todo-item>
      </tbody>
    </table>
    <!-- 按钮todobutton组件 :事件如果是绑在组件上的，记得要加事件修饰符native -->
    <todo-button class="btn-danger" @click.native="removeallitem">全删</todo-button>
    <!-- <button type="button" class="btn btn-danger" @click="removeallitem">全删</button> -->
  </div>
</template>
<script>
import todoItem from "./todoitem";
import todoButton from "./todobutton";
export default {
  props: ["tasklist", "removeall", "remove", "compelet", "select"],
  components: {
    todoItem,
    todoButton
  },
  methods: {
    removeallitem() {
      //全删
      this.removeall();
    }
  },
  //计算属性
  computed: {
    checkall: {
      get() {
        //M->V 数据层变化引起视图层变化 get方法记得要写return
        //every 如果每一项都为真则返回真
        return this.tasklist.every(item => item.ischecked);
      },
      set(val) {
        //V->M 视图层变化引起数据层变化
        // console.log(val);
        this.tasklist.forEach(item => (item.ischecked = val));
      }
    }
  }
};
</script>