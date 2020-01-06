Vue.component('app-table', {
  props: ['goodslist'],
  methods: {
    remove(index) {
      //触发刚才定义的自定义事件
      //$emit(事件名称,实参1，实参2，实参3)
      this.$emit('delgood', index);
    }
  },
  template: `<div><h2 class="sub-header">Section title</h2>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>名字</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in goodslist">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td @click="remove(index)"><a>删除</a></td>
          </tr>
        </tbody>
      </table>
    </div></div>`
})