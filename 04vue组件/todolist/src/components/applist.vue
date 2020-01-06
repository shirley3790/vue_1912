<template>
  <div id="app">
    <div class="container">
      <h1>今天的任务</h1>
      <!-- 表单组:子组件 -->
      <app-form :addtask="addtask">
        <!-- 插槽的使用 -->
        <template v-slot:title="obj">
          <!-- <p slot="title">插槽的使用</p> -->
          <p>插槽的使用{{obj.adr}} {{doc}}</p>
        </template>
      </app-form>
      <!-- 表格：子组件 -->
      <app-table
        :tasklist="tasklist"
        :select="select"
        :compelet="compelet"
        :remove="remove"
        :removeall="removeall"
      ></app-table>
    </div>
  </div>
</template>
<script>
//引入需要的css文件
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import appForm from "./appform";
import appTable from "./apptable";
import Bus from "../bus";

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
      // doc: 1
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
  components: {
    appForm,
    appTable
  },
  mounted() {
    //钩子函数
    Bus.$on("selectlist", this.select);
    Bus.$on("compeletlist", this.compelet);
    Bus.$on("removelist", this.remove);
  }
};
</script>
<style scoped>
</style>