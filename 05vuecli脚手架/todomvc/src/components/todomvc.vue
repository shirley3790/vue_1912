<template>
  <div id="todoapp">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input class="new-todo" placeholder="今天你要完成什么?" @keyup.13="add" v-model.trim="tex" />
      </header>
      <!-- This section should be hidden by default and shown when there are todos -->
      <section class="main" v-show="taskList.length">
        <!-- 全选按钮 -->
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allcheck" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <!-- These are here just to show the structure of the list items -->
          <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
          <!-- <li :class="{editing : 0 == index}">
					<li :class="{editing : 1 == index}">
          <li :class="{editing : 2 == index}">-->
          <li
            :class="{completed : item.completed,editing : currentitem == item }"
            v-for="(item, index) in taskList"
            :key="item.id"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="item.completed" />
              <!-- 双击label的时候进入编辑状态，就是给li添加类名editing -->
              <label @dblclick="editing(item)">{{ item.content }}</label>
              <!-- 删除任务的那个x -->
              <button class="destroy" @click="remove(index)"></button>
            </div>
            <!-- 编辑任务的时候回车和失去焦点就提交数据，如果按下esc就不提交，退出编辑状态：不要同时使用value和v-model -->
            <input
              class="edit"
              :value="item.content"
              @keyup.13="finish(item,index,$event)"
              @blur="finish(item,index,$event)"
              @keyup.esc="cancel"
            />
          </li>
        </ul>
      </section>
      <!-- This footer should hidden by default and shown when there are todos -->
      <footer class="footer" v-show="taskList.length">
        <!-- This should be `0 items left` by default -->
        <span class="todo-count">
          <strong>{{ uncom }}</strong>
          item{{ uncom == 1 ? '' : 's' }} left
        </span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
          <li>
            <a :class="{selected : status == 'all'}" href="#/all">All</a>
          </li>
          <li>
            <a :class="{selected : status == 'active'}" href="#/active">Active</a>
          </li>
          <li>
            <a :class="{selected : status == 'completed'}" href="#/completed">Completed</a>
          </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <!-- 删除全部已完成的任务 -->
        <button class="clear-completed" @click="deleteall">Clear completed</button>
      </footer>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <!-- Remove the below line ↓ -->
      <p>
        Template by
        <a href="http://sindresorhus.com">Sindre Sorhus</a>
      </p>
      <!-- Change this out with your name and url ↓ -->
      <p>
        Created by
        <a href="http://todomvc.com">you</a>
      </p>
      <p>
        Part of
        <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  </div>
</template>
<script>
//引入外部资源 css、js
import "../css/todomvc-common/base.css";
import "../css/todomvc-app-css/index.css";
import "../css/app.css";
// import "../css/todomvc-common/base.js";

//本地数据的存储
let local = {
  setval(key, val) {
    //存
    let str = JSON.stringify(val);
    localStorage.setItem(key, str);
  },
  getval(key) {
    //取
    let str = localStorage.getItem(key);
    return JSON.parse(str);
  }
};

export default {
  data: function() {
    return {
      tex: "",
      currentitem: null,
      status: "",
      filterdata: [],
      taskList: [
        {
          id: 1, //id
          content: "完成作业", //任务内容
          completed: false //是否完成
        },
        {
          id: 2, //id
          content: "选项卡", //任务内容
          completed: true //是否完成
        },
        {
          id: 3, //id
          content: "购物车", //任务内容
          completed: true //是否完成
        }
      ]
    };
  },
  methods: {
    add(ev) {
      //添加一条任务
      //   console.log(this.tex);
      //非空判断
      if (this.tex) {
        //准备一条新数据插入到数组里面
        let obj = {
          id: this.taskList.length + 1,
          content: this.tex,
          completed: false
        };
        this.taskList.push(obj);
        //清空并聚焦
        this.tex = "";
        //聚焦
        ev.target.focus();
      }
    },
    remove(index) {
      //删除一条任务
      if (confirm("您不要我了吗?")) {
        this.taskList.splice(index, 1);
      }
    },
    editing(item) {
      //编辑任务
      //   console.log(item);
      this.currentitem = item;
    },
    finish(item, index, ev) {
      //完成编辑
      //   console.log(ev.target.value); //获取编辑后的新值
      if (!ev.target.value) {
        //数据为空，就删除该任务
        this.remove(index);
        return;
      }
      //数据不为空。修改item里面的数据
      item.content = ev.target.value;
      this.currentitem = null; //退出编辑
    },
    cancel() {
      this.currentitem = null; //退出编辑
    },
    deleteall() {
      this.taskList = this.taskList.filter(item => !item.completed);
    }
  },
  computed: {
    allcheck: {
      get() {
        //设置全选 M-V
        return this.taskList.every(item => item.completed);
      },
      set(val) {
        // console.log(val);
        this.taskList.forEach(item => (item.completed = val));
      }
    },
    uncom() {
      return this.taskList.filter(item => !item.completed).length;
    }
  },
  //监听器：普通写法只能监听一层数据
  watch: {
    status(newval) {
      //获取到status变化的新值
      window.console.log(newval);
      switch (newval) {
        //过滤留下未完成
        case "active":
          this.filterdata = this.taskList.filter(item => !item.completed);
          break;
        //过滤留下已完成
        case "completed":
          this.filterdata = this.taskList.filter(item => item.completed);
          break;
        default:
          this.filterdata = this.taskList;
          break;
      }
      //   console.log(this.filterdata);
    },
    taskList: {
      deep: true, //深度监听
      handler: function(newval) {
        window.console.log(newval);
        //如果数据有更新就把数据存到本地存储里面
        local.setval("todomvc", this.taskList);
      }
    }
  }
};

window.onhashchange = function() {
  //哈希值改变就触发
  // console.log(window.location.hash);//href、search、hash
  // vm.filterStatus = 666;
  //   let str = window.location.hash.slice(2);
  // console.log(str);
  //   vm.$data.status = str; //获取或设置属性
};

window.onhashchange(); //主动先获取哈希值

//已进入页面就读取local的数据
// vm.$data.taskList = local.getval("todomvc");
</script>