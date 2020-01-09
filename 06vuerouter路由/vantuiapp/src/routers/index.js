import Vue from 'vue'
// 1.引入vue-router
import VueRouter from 'vue-router';

// 2.使用(安装)vue-router（VueRouter是作为插件增强Vue的功能）
Vue.use(VueRouter);

//3.引入你要的组件
import Home from '../pages/home';
import List from '../pages/list';
import Cart from '../pages/cart';
import Mine from '../pages/mine';
import Is404 from '../pages/is404';
import Catogary from '../pages/catogary';
import Details from '../pages/details';
import Reg from '../pages/reg';
import Login from '../pages/login';

// 4. 实例化router并配置参数:路由规则
let router = new VueRouter({
    // mode:'hash',
    // 配置参数：不同的 URL 显示不同的内容
    routes: [
        // 首页
        {
            name: 'home',//路由名
            path: '/home',  //路由路径，当浏览器地址为/home时，显示Home组件的内容
            component: Home //组件名
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
            name: 'list',
            path: '/list',
            component: List
        }, {
            name: 'mine',
            path: '/mine',
            component: Mine
        },
        {
            name: 'other',
            path: '*',
            component: Is404
        }, {
            name: 'list2',
            path: '/list2',
            component: Catogary
        }, {
            name: 'details',
            path: '/details',
            component: Details,
            meta: {//在details组件里面有个特殊的开关，元信息
                isshow: true
            }
        }, {
            name: 'reg',
            path: '/reg',
            component: Reg
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        }
    ]
});

// 4.导出路由

export default router;