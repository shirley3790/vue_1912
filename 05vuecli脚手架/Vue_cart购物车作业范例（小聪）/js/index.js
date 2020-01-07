let vm = new Vue({
    el: '.container',
    data: {
        //这是店家的checkbox
        //这是商品的checkbox
        goodlists: [{
            shop_isok: false,
            shop_id: 10001,
            shop_name: '5香麻辣店',
            shop_comm: [{
                comm_isok: false,
                comm_id: 1008,
                comm_img: '../Vue_cart/images/1.png',
                comm_int: '这是一家很不错的店里面的货物',
                comm_big: '259g',//规格
                comm_price: '8998',  //价格
                Num: 1,//数量
            }, {
                comm_isok: false,
                comm_img: '../Vue_cart/images/4.png',
                comm_id: 1008,
                comm_int: '这是一家很不错的店里面的货物',
                comm_big: '259g',
                comm_price: '1998',
                Num: 1,
            }]
        },
        {
            shop_isok: false,
            shop_id: 10002,
            shop_name: '7香麻辣店',
            shop_comm: [{
                comm_isok: false,
                comm_id: 1008,
                comm_img: '../Vue_cart/images/2.png',
                comm_int: '这是一家很不错的店里面的货物',
                comm_big: '259g',
                comm_price: '4998', Num: 1,
            }, {
                comm_isok: false,
                comm_id: 1008,
                comm_img: '../Vue_cart/images/1.png',
                comm_int: '这是一家很不错的店里面的货物',
                comm_big: '259g',
                comm_price: '8998', Num: 1,
            }, {
                comm_isok: false,
                comm_img: '../Vue_cart/images/4.png',
                comm_id: 1008,
                comm_int: '这是一家很不错的店里面的货物',
                comm_big: '259g',
                comm_price: '1998', Num: 1,
            }]
        }, {
            shop_isok: false,
            shop_id: 10003,
            shop_name: '1香麻辣店',
            shop_comm: [{
                comm_isok: false,
                comm_id: 1008,
                comm_img: '../Vue_cart/images/3.png',
                comm_int: '这是一家很不错的店里面的货物',
                comm_big: '259g',
                comm_price: '5998', Num: 1,
            }, {
                comm_isok: false,
                comm_id: 1008,
                comm_img: '../Vue_cart/images/1.png',
                comm_int: '这是一家很不错的店里面的货物',
                comm_big: '259g',
                comm_price: '8998', Num: 1,
            }, {
                comm_isok: false,
                comm_img: '../Vue_cart/images/4.png',
                comm_id: 1008,
                comm_int: '这是一家很不错的店里面的货物',
                comm_big: '259g',
                comm_price: '1998', Num: 1,
            }]
        }, {
            shop_isok: false,
            shop_id: 10004,
            shop_name: '2香麻辣店',
            shop_comm: [{
                comm_isok: false,
                comm_img: '../Vue_cart/images/4.png',
                comm_id: 1008,
                comm_int: '这是一家很不错的店里面的货物',
                comm_big: '259g',
                comm_price: '1998', Num: 1,
            }, {
                comm_isok: false,
                comm_id: 1008,
                comm_img: '../Vue_cart/images/1.png',
                comm_int: '这是一家很不错的店里面的货物',
                comm_big: '259g',
                comm_price: '8998', Num: 1,
            }]
        }
        ]
    },
    methods: {
        jiesuan() {
            alert("对不起，暂不支持该功能")
        },
        num__(index, index_1) {
            if (this.goodlists[index].shop_comm[index_1].Num > 1) {
                this.goodlists[index].shop_comm[index_1].Num = (this.goodlists[index].shop_comm[index_1].Num) - 1;
            } else {
                this.goodlists[index].shop_comm[index_1].Num = 1;
            }
        },
        num_jia(index, index_1) {
            if (this.goodlists[index].shop_comm[index_1].Num < 9) {
                this.goodlists[index].shop_comm[index_1].Num = (this.goodlists[index].shop_comm[index_1].Num) + 1;
            } else {
                this.goodlists[index].shop_comm[index_1].Num = 9;
            }
        },
        del_dq(index, index_1) {

            this.goodlists[index].shop_comm.splice(index_1, 1);
            if (!this.goodlists[index].shop_comm.length) {
                this.goodlists.splice(index, 1)
            }
        },
        shop_allche(a) {
            this.goodlists[a].shop_comm.map(e => e.comm_isok = !this.goodlists[a].shop_isok);
        },
        DelAll() {
            // 遍历数据 使用过滤的方式 将不满足条件的数据过滤出去
            let G = 0;
            for (let i = 0; i < this.goodlists.length; i++) {
                this.goodlists[i].shop_comm.map(ele => {
                    if (ele.comm_isok) {
                        G++;
                    }
                    return G;
                })
            }

            if (G == 0) {
                alert("没有选中任何商品哦！！")

            } else {

                if (confirm("你确定删除所选吗？！")) {
                    this.goodlists.filter((ele, index) => {
                        ele.shop_comm = ele.shop_comm.filter(e => e.comm_isok == false);
                        return ele
                    });
                    this.goodlists = this.goodlists.filter(ele => !ele.shop_isok);
                }

            }



        }
    },
    computed: {
        All_isok: {
            get() {
                return this.goodlists.every(ele => ele.shop_isok);
            }
            , set(val) {
                this.goodlists.map(ele => {
                    ele.shop_comm.map(ele => ele.comm_isok = val)
                    ele.shop_isok = val
                });

            }
        }
        ,
        ZongJia: {
            get() {

                let F = 0;

                FFF = this.goodlists.map(ele => {
                    let zpr = 0;
                    ele.shop_comm.map(e => {
                        if (e.comm_isok) {
                            zpr += (e.comm_price * e.Num) * 1
                        }
                    })
                    return zpr * 1
                })

                for (let i = 0; i < FFF.length; i++) {
                    F += FFF[i]
                }
                return F;
            },
            set(val) {


            }
        }
    },
    watch: {
        goodlists: {
            handler(newVal, oldName) {// 表示对象中属性变化的处理函数，这个函数只能叫这个名字
                newVal.map((ele, index) => {
                    ele.shop_isok = ele.shop_comm.every((itme) => itme.comm_isok);
                });
            },
            immediate: true,//最初绑定的时候 立即执行监听
            deep: true, // 深度监听
        },


    }




});