import axios from 'axios';
//调用我写在了details.vue里面
const cart = {
    state: {//类似vue里面的data属性，存放数据的地方,当你有多个组件需要调用同一份数据的时候，就可以存到这里：公共状态管理
        products: [
            { id: 1, name: '鼠标', price: 20 },
            { id: 2, name: '键盘', price: 40 },
            { id: 3, name: '耳机', price: 60 },
            { id: 4, name: '显示屏', price: 80 }
        ],
        city: '广州'
    },
    getters: {//类似vue里面computed计算属性.但是只有get方法
        total(state) {
            return state.products.length;
        }
    },
    mutations: {//类似vue里面的methods方法
        removeItem(state, index) {//删除某个数据 index是形参名，调用removeItem的时候需要传参过来
            state.products.splice(index, 1);
        },
        addItem(state, good) {
            state.products.push(good);
        }
    },
    actions: {//类似vue里面的methods方法,里面的代码是异步的方法
        async getlist(contex, { cid, cid3 }) {
            let { data } = await axios.get('http://localhost:1920/goods/list3', {
                params: {
                    cid,
                    cid3
                }
            });
            window.console.log(data);
        }
    }
}

export default cart;