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
      <tr v-for="(item, index) in tasklist" @click="selectitem(index)" :key="item.id">
        <td>
          <input type="checkbox" name id v-model="item.ischecked" />
        </td>
        <td scope="row" v-text="item.id"></td>
        <td v-text="item.con"></td>
        <td v-text="item.time"></td>
        <td v-text="item.iscompeletd"></td>
        <td>
          <button type="button" class="btn btn-success" @click.stop="compeletitem(index)">完成</button>
          <button type="button" class="btn btn-danger" @click.stop="remove(index)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: ["tasklist", "select", "compelet"],
  methods: {
    selectitem(index) {
      this.select(index);
    },
    compeletitem(index) {
      this.compelet(index);
    }
  }
};
</script>