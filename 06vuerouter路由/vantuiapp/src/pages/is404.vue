<template>
  <div>
    <h1>404 6666</h1>
    <p>姓名：{{name}}</p>
    <p>获取getters：{{toUpper}}</p>
    <input type="button" value="触发mutations方法" @click="show(999)" />
    <br />
    <input type="button" value="获取数据库数据" @click="getusers(1)" />
  </div>
</template>
<script>
// vuex的映射
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    //state和getter是里面的数据全部映射到computed里面
    // 映射state.cart.city的数据
    ...mapState({
      //映射state数据到这来
      name: state => state.test.name
    }),
    ...mapGetters(["toUpper"]) //映射getter数据到这来
  },
  methods: {
    //所有的mutations和actions方法都映射到methods里面
    // 数组形式
    ...mapMutations([
      "show" //映射this.show为this.$store.commit('show')
    ]),
    ...mapActions({
      getusers: "getusers" //映射this.getusers()为this.$store.dispatch('getusers'),
    })
  }
};
</script>