<template>
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
      <!-- tr子组件 -->
      <app-item
        :tasklist="tasklist"
        :select="select"
        :compelet="compelet"
        :remove="remove"
        :removeall="removeall"
        v-for="(item, index) in tasklist"
        :index="index"
        :item="item"
        :key="item.id"
      ></app-item>
    </tbody>
    <button type="button" class="btn btn-danger" @click="removeallitem">全删</button>
  </table>
</template>
<script>
import appItem from "./appitem";
export default {
  props: ["tasklist", "select", "compelet", "removeall", "remove"],
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
  },
  methods: {
    removeallitem() {
      this.removeall();
    }
  },
  components: {
    appItem
  }
};
</script>