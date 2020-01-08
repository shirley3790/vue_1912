import Vue from 'vue'
// 1.引入vue-router
import VueRouter from 'vue-router';

// 2.使用(安装)vue-router（VueRouter是作为插件增强Vue的功能）
Vue.use(VueRouter);

//3.引入你要的组件
import Home from '../components/home';
import List from '../components/list';
import Cart from '../components/cart';
import Mine from '../components/mine';
import Is404 from '../components/is404';

// 4. 实例化router并配置参数:路由规则
let router = new VueRouter({
    // mode:'hash',
    // 配置参数：不同的 URL 显示不同的内容
    routes: [
        // 首页
        {
            name: 'home',
            path: '/home',  //当浏览器地址为/home时，显示Home组件的内容
            component: Home
        },
        {
            path: '/',  //当浏览器地址为/home时，显示Home组件的内容
            redirect: '/home' //重定向
        },
        // 购物车
        {
            name: 'cart',
            path: '/cart',
            component: Cart
        },
        {
            path: '/list',
            component: List
        }, {
            path: '/mine',
            component: Mine
        },
        {
            path: '*',
            component: Is404
        }
    ]
});

// 4.导出路由

export default router;