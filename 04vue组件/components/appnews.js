Vue.component('app-news', {
    // el : '#app',el是把数据写到id为app的里面
    data: function () {
        return {
            list: ['雪人兄弟', '超级玛丽', '魂斗罗', '坦克大战']
        }
    },
    //template 存放模板的地方，里面必须有且只有一个根节点，优先级比el要高
    // template: '<ul></ul><p></p>' 报错
    template: '<div><ul><li v-for="(item,index) in list">{{index + 1}}-{{item}}</li></ul><p></p></div>'
})