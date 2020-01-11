import axios from 'axios';
let token = {
    state: {//存放数据
        name: '',
        isok: true
    },
    mutations: {
        login(state, { name, token }) {//登陆成功
            state.name = {
                name,
                token
            }
            //存token
            localStorage.setItem("token", token);
        },
        logout(state) {
            //登出
            state.name = '';
            localStorage.removeItem("token");
        }
    },
    actions: {
        async verify(contex) {//contex就是store   == this.$store.commit
            let token = localStorage.getItem("token");
            if (token) {
                //有token：登陆了，验证token
                let { data } = await axios.get("http://localhost:1920/users/verify", {
                    params: {
                        token
                    }
                });
                if (data.type) {
                    //成功
                    contex.state.isok = true;
                } else {
                    //失败
                    contex.commit('logout');
                    contex.state.isok = false;
                }
            }
        }
    }
}

export default token;