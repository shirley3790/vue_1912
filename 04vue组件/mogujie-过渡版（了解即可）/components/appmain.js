/*
  组件通信方案：谁的数据谁管理的原则(单向数据流)
    * props
      * 父组件给子组件传数据：
        * 父组件：准备好数据，在子组件标签上绑定一个自定义属性
        * 子组件：利用props属性接收数据即可
      * 子组件给父组件传数据
        * 父组件：写好一个方法removeitem(index),在子组件标签上绑定一个自定义属性
        * 子组件：利用props属性接收这个属性，绑定事件，点击的时候调用传过来的方法即可
    * $emit：子传父
        * 父组件：写好一个方法，绑定一个自定义事件来调用该方法 @事件名=“方法名”
        * 子组件：调用自定义事件，把数据从子组件向父组件传输 
    * 插槽：父传子，传递一些简单的数据
      * 匿名插槽
      * 具名插槽
*/
Vue.component('app-main', {//父组件
  data: function () {
    return {
      hobby: ['看书', '写代码', '玩游戏', '看剧'],
      goodslist: [
        {
          gid: '1',
          name: '蛋黄酥'
        },
        {
          gid: '2',
          name: '雪花酥'
        },
        {
          gid: '3',
          name: '蛋黄派'
        }
      ]
    }
  },
  methods: {
    removeitem(index) {//形参
      console.log(index + '接收到啦');
      this.hobby.splice(index, 1);
    },
    removegood(index) {
      this.goodslist.splice(index, 1);
    }
  },
  template: `<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
  
    <!--右边上半区域-->
    <app-dash :hobby="hobby" :removeitem="removeitem">
      <b slot="title">仪表盘</b>
    </app-dash>
    <!--右边下半区域-->
    <app-table :goodslist="goodslist" @delgood="removegood"></app-table>
  </div>
`
})