import axios from 'axios';
let test = {
    state: {//存放数据 data  this.$store.state.test.name
        name: 'malin',
        city: '防城港',
        list: []
    },
    getters: {//相当于computed 计算属性 this.$store.getters.toUpper
        toUpper(state) {
            return state.name.toUpperCase();
        }
    },
    mutations: {//相当于methods
        show(state, data) {//this.$store.commit('show',666)
            window.console.log('mutations方法被调用了');
            window.console.log(state.name + data);
        },
        getdata(state, data) {
            state.list = data;
            window.console.log(state.list + data);
        }
    },
    actions: {//相当于methods 方法是异步
        async getusers(contex, page) {//this.$store.dispatch('getusers',1)
            let { data } = await axios.get("http://localhost:1920/users/all", {
                params: {
                    page,
                    num: 5
                }
            });
            contex.commit('getdata', data);
        }
    }
}

export default test;