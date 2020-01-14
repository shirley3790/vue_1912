import axios from 'axios';
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
        async additem(contex, good) {
            //发送ajax，加入购物车
            let { gid, uid, gname, price, kucun, num } = good;

            //发送ajax，查询是否存在某商品
            let { data: data1 } = await axios.get('http://localhost:1920/goods/goodcart', {
                params: {
                    gid,
                    uid
                }
            });

            if (data1.type) {
                //不存在，可以添加新商品
                let { data } = await axios.post('http://localhost:1920/goods/good', {
                    gid, uid, gname, price, kucun, num
                });
                // window.console.log(data);
                // if (data.type) {
                //     //添加成功
                //     window.console.log('添加成功');
                // } else {
                //     window.console.log('添加失败');
                // }
                return data;
            } else {
                //存在，修改数量
                let { data } = await axios.put('http://localhost:1920/goods/good', {
                    gid, uid, num
                });
                return data;
                // if (data.type) {
                //     //修改成功
                //     window.console.log('修改成功');
                // } else {
                //     window.console.log('修改失败');
                // }

            }
            // window.console.log('666');
            // window.console.log(data1);
            // contex.commit('getcart', data);



            // contex.commit('getcart', data);
        }
    }
}

export default cart;