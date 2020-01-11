import Vue from 'vue'

//1.安装vuex  ： npm i vuex
//2.引入vuex
import Vuex from 'vuex';
import cart from './cart';
import token from './token';

//3.使用vuex
Vue.use(Vuex);//利用vuex可以让我们更加方便在组件间实现通信。特别是针对多层级、无关联的组件的时候，利用vuex可以节约很多的工作

const store = new Vuex.Store({
    modules: {//store模块化管理
        cart,
        token
    }
});

export default store;