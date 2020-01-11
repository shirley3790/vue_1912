import Vue from 'vue'
// 1.引入vue-router
import VueRouter from 'vue-router';

// 2.使用(安装)vue-router（VueRouter是作为插件增强Vue的功能）
Vue.use(VueRouter);

//3.引入你要的组件
import Home from '../pages/home';
import List from '../pages/list';
// import List2 from '../pages/list2';
import Cart from '../pages/cart';
import Mine from '../pages/mine';
import Is404 from '../pages/is404';
import List2 from '../pages/list2';
import Details from '../pages/details';
import Reg from '../pages/reg';
import Login from '../pages/login';
import axios from 'axios';

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
            component: Cart,
            meta: {
                ispower: true //进入购物车需要鉴权
            }
        },
        {
            name: 'list',
            path: '/list',
            component: List,
            beforeEnter() {

            }
        }, {
            name: 'mine',
            path: '/mine',
            component: Mine,
            meta: {
                ispower: false //进入个人中心需要鉴权
            }
        },
        {
            name: 'other',
            path: '*',
            component: Is404
        }, {
            name: 'list2',
            path: '/list2',
            component: List2
        }, {
            name: 'details',
            path: '/details',
            component: Details,
            meta: {//在details组件里面有个特殊的开关，元信息
                isshow: true//详情页不需要显示菜单栏
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

//全局的路由守卫
router.beforeEach(async (to, from, next) => {
    // window.console.log("全局的守卫 beforeEach");
    // window.console.log(to);//to就是你要进入的路由
    // window.console.log(from);//from就是要离开的路由
    //在这里做路由守卫比较好：因为每一个路由切换的时候都会调用这个路由钩子，只需要一次性做好鉴权，所有需要鉴权的页面都有效果,但是要配合路由规则里面的元信息：meta实现
    if (to.meta.ispower) {
        //需要鉴权
        //获取token
        let token = localStorage.getItem('token');
        let { data } = await axios.get("http://localhost:1920/users/verify", {
            params: {
                token
            }
        });
        //把token发送给后端验证：token无篡改且未失效
        if (data.type) {
            window.console.log('已登录可以进入该路由')
            next();
        } else {
            //没有权限就跳转到登陆页并且把刚才想进入的路由路径给到登陆页，等登录成功可以回到该路由
            router.push({ path: '/login', targeturl: to.path });
        }
    } else {
        //不需要鉴权
        next();
    }

});



// 4.导出路由

export default router;