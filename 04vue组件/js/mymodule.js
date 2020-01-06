let obj = {
    name: '冬梅',
    show: function () {
        console.log('夏洛特烦恼');
    }
}

export { obj };

export function showname() {
    console.log('马冬梅');
}

let goods = {
    name: '小米'
}
export default {
    goods,
    obj
}