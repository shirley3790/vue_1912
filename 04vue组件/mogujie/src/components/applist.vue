<template>
  <div id="app">
    <div class="container">
      <h1>今天的任务</h1>
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          ref="inputele"
          v-model.trim="tex"
          @keyup.13="addtask"
        />
        <input type="date" class v-model="time" />
        <button type="button" class="btn btn-primary" @click="addtask">提交</button>
      </div>
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
          <tr v-for="(item, index) in tasklist" @click="select(index)" :key="item.id">
            <td>
              <input type="checkbox" name id v-model="item.ischecked" />
            </td>
            <td scope="row" v-text="item.id"></td>
            <td v-text="item.con"></td>
            <td v-text="item.time"></td>
            <td v-text="item.iscompeletd"></td>
            <td>
              <button type="button" class="btn btn-success" @click.stop="compelet(index)">完成</button>
              <button type="button" class="btn btn-danger" @click.stop="remove(index)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button" class="btn btn-danger" @click="removeall">全删</button>
    </div>
  </div>
</template>
<script>
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";

export default {
  data: function() {
    return {
      //放数据的地方
      tasklist: [
        //任务列表
        {
          id: 1,
          con: "完成一个小目标，一个亿",
          time: "2020-12-25",
          iscompeletd: "是",
          ischecked: false
        },
        {
          id: 2,
          con: "吃湛江鸡",
          time: "2020-12-25",
          iscompeletd: "否",
          ischecked: true
        },
        {
          id: 3,
          con: "吃酸菜鱼",
          time: "2020-12-25",
          iscompeletd: "是",
          ischecked: false
        }
      ],
      tex: "", //内容输入
      time: ""
    };
  },
  methods: {
    addtask() {
      //添加任务
      // console.log(this.tex);
      // console.log(this.time);
      //非空判断
      if (this.tex) {
        let conobj = {
          id: this.tasklist.length + 1,
          con: this.tex,
          time: this.time,
          iscompeletd: "否",
          ischecked: false
        };

        //把最新的任务插入到任务列表tasklist
        this.tasklist.push(conobj);
        //清空表单
        this.tex = "";
        //找到节点
        window.console.log(this.$refs.inputele);
        //聚焦
        this.$refs.inputele.focus();
      }
    },
    select(index) {
      //选中或取消某一行
      // console.log(this.tasklist[index]);
      this.tasklist[index].ischecked = !this.tasklist[index].ischecked;
    },
    compelet(index) {
      //任务完成
      this.tasklist[index].iscompeletd = "是";
    },
    remove(index) {
      //任务的删除
      let istrue = confirm("您确定要删除吗?");
      if (istrue) {
        this.tasklist.splice(index, 1); //splice 可以做到对数组任意位置的数据进行插入。删除。替换
      }
    },
    removeall() {
      //删除多项
      if (confirm("您确定要删除多项吗?"))
        this.tasklist = this.tasklist.filter(item => item.ischecked == false);
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
<style scoped>
</style>