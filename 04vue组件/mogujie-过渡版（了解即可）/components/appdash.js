Vue.component('app-dash', {
  //存数据几个属性：data、computed、props  存方法:methods/watch
  props: ['hobby', 'removeitem'], //接收父组件传过来的数据
  // data : function() {
  //   return {
  //     hobby,
  //     removeitem
  //   }
  // },
  methods: {
    remove(index) {
      console.log(this.removeitem);
      this.removeitem(index);//入口：实参

    }
  },
  template: `<div><h1 class="page-header"><slot name="title" /></h1>
    <div class="row placeholders" v-for="(item, index) in hobby">
      <div class="col-xs-6 col-sm-3 placeholder">
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200"
          height="200" class="img-responsive" alt="Generic placeholder thumbnail">
        <h4>{{item}}</h4>
        <span class="text-muted" @click="remove(index)"><a>删除</a></span>
      </div>
    </div></div>`,
  created() {//钩子函数：当app挂载成功就执行这里的代码
    // console.log(hobbys);
  }
});