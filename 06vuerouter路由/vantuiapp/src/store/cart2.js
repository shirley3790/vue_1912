// import axios from 'axios';
//购物车cart.vue 和详情页 details.vue 导航 appnav.vue
const cart = {
    state: {//类似vue里面的data属性，存放数据的地方,当你有多个组件需要调用同一份数据的时候，就可以存到这里：公共状态管理
        // cartlist: []
    },
    getters: {//类似vue里面computed计算属性.但是只有get方法
        // total(state) {
        //     return state.products.length;
        // }
    },
    mutations: {//类似vue里面的methods方法
        // getcart(state, data) {
        //     state.cartlist = data;
        // },
        // updateItem() {//修改数量

        // },
        // addItem(state, good) {
        //     state.cartlist.push(good);
        // }
    },
    actions: {//类似vue里面的methods方法,里面的代码是异步的方法
        // async getlist(contex, { cid, cid3 }) {
        //     let { data } = await axios.get('http://localhost:1920/goods/list3', {
        //         params: {
        //             cid,
        //             cid3
        //         }
        //     });
        //     // window.console.log(data);
        //     // contex.state.cartlist = data;//官网不建议
        //     contex.commit('getcart', data);
        // },
        // async add(contex, good) {
        //     //发送ajax，成功了，记得要改state

        //     // contex.commit('addItem', good);
        // }
    }
}

export default cart;