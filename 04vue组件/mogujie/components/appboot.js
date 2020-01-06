Vue.component('app-boot', {
    template: `<div><!--头部导航区域-->
    <app-head></app-head>
    <!--核心区域:分左右两边-->
    <div class="container-fluid">
      <div class="row">
  
        <!--左边菜单栏区域-->
        <app-news></app-news>
  
        <!--右边主页面区域: 分上下两个区域-->
        <app-main></app-main></div>
    </div></div>`
})