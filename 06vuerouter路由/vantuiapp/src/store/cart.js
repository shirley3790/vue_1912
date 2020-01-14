import axios from 'axios';
//购物车cart.vue 和详情页 details.vue 导航 appnav.vue
const cart = {
    state: {//类似vue里面的data属性，存放数据的地方,当你有多个组件需要调用同一份数据的时候，就可以存到这里：公共状态管理
        cartlist: []
    },
    getters: {//类似vue里面computed计算属性.但是只有get方法
        // total(state) {
        //     return state.products.length;
        // }
    },
    mutations: {//类似vue里面的methods方法
        getcart(state, data) {
            state.cartlist = data;
        }
        // updateItem(state, { gid, uid, num }) {//修改数量

        // },
        // addItem(state, good) {
        //     state.cartlist.push(good);
        // }
    },
    actions: {//类似vue里面的methods方法,里面的代码是异步的方法
        async additem(contex, good) {
            //发送ajax，加入购物车
            let { gid, uid, gname, price, kucun, num } = good;
            // let { gid, uid } = good;
            // window.console.log('加入', gid + ', ', + uid);
            //发送ajax，查询是否存在某商品
            let { data: data1 } = await axios.get('http://localhost:1920/goods/goodcart', {
                params: {
                    gid,
                    uid
                }
            });
            // window.console.log(data1);
            if (data1.length == 0) {
                //不存在，可以添加新商品
                // window.console.log('不存在，可以添加新商品');

                let { data } = await axios.post('http://localhost:1920/goods/good', {
                    gid, uid, gname, price, kucun, num
                });

                return data;
            } else {
                //存在，修改数量
                let kucun = data1[0].kucun;
                let currentnum = data1[0].num;
                // window.console.log(kucun);
                if (num + currentnum >= kucun) {//数量不能超过库存量
                    num = kucun;
                    window.console.log('库存量已用完');
                } else {
                    num = num + currentnum;
                }
                // window.console.log('存在，修改数量');
                let { data } = await axios.put('http://localhost:1920/goods/good', {
                    gid, uid, num
                });

                return data;
            }



        },
        async getcartList(contex) {
            window.console.log('购物车数据');
            let { data } = await axios.get('http://localhost:1920/goods/cartlist');
            contex.commit('getcart', data);
        }
    }
}

export default cart;