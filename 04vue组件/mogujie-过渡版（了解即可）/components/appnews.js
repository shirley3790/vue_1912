Vue.component('app-news', {
  data: function () {//组件就是vue实例，基本没有什么太大的差异，就是data写成一个函数的形式而已
    return {
      list: [
        ['魂斗罗', '超级玛丽', '雪人兄弟'],
        ['王者', '阴阳师', '魔兽'],
        ['吃鸡', 'cs', 'cf']
      ]
    }
  },
  template: `<div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar" v-for="(item, idx) in list">
      <li :class="{active : 0 == index && idx == 0}" v-for="(val, index) in item"><a href="#">{{ val }}</a></li>
    </ul>
  </div>`
})