<template>
  <tr @click="selectitem(index)">
    <td>
      <input type="checkbox" name id v-model="item.ischecked" />
    </td>
    <td scope="row" v-text="item.id"></td>
    <td v-text="item.con"></td>
    <td v-text="item.time"></td>
    <td v-text="item.iscompeletd"></td>
    <td>
      <app-button class="btn-success" @click.stop.native="compeletitem(index)">完成</app-button>
      <app-button class="btn-danger" @click.stop.native="removeitem(index)">删除</app-button>
    </td>
  </tr>
</template>
<script>
import Bus from "../bus";
import appButton from "./appbutton";
export default {
  props: [
    "tasklist",
    "select",
    "compelet",
    "removeall",
    "remove",
    "index",
    "item"
  ],
  methods: {
    selectitem(index) {
      //   this.select(index);
      Bus.$emit("selectlist", index);
    },
    compeletitem(index) {
      //   window.console.log(666);
      //   this.compelet(index);
      Bus.$emit("compeletlist", index);
    },
    removeitem(index) {
      //   this.remove(index);
      Bus.$emit("removelist", index);
    }
  },
  components: {
    appButton
  }
};
</script>