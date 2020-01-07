<template>
  <div id="app">
    <div class="container">
      <h1>今天的任务</h1>
      <!-- todoform子组件 -->
      <todo-form :addtask="addtask"></todo-form>
      <!-- todomain子组件 -->
      <todo-main
        :tasklist="tasklist"
        :removeall="removeall"
        :select="select"
        :compelet="compelet"
        :remove="remove"
      ></todo-main>
    </div>
  </div>
</template>
<script>
//引入外部资源 css文件  jq文件
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import todoForm from "./todoform";
import todoMain from "./todomain";
import Bus from "../bus"; //引入总线，绑定和触发事件用的

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
      ]
    };
  },
  methods: {
    addtask(con, time) {
      //添加任务
      // console.log(this.tex);
      // console.log(this.time);
      //非空判断
      if (con) {
        let conobj = {
          id: this.tasklist.length + 1,
          con,
          time,
          iscompeletd: "否",
          ischecked: false
        };

        //把最新的任务插入到任务列表tasklist
        this.tasklist.push(conobj);
        //清空表单
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
  components: {
    //注册组件
    todoForm,
    todoMain
  },
  mounted() {
    //绑定事件
    //Bus.$on('事件名称',方法名称)
    Bus.$on("selectitem2", this.select); //绑定自定义事件 selectitem
    Bus.$on("compeletitem2", this.compelet); //绑定自定义事件 selectitem
    Bus.$on("removeitem2", this.remove); //绑定自定义事件 selectitem
  }
};
</script>
<style scoped>
h6 {
  width: 100px;
}
</style>
