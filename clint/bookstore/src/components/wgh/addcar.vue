<template>
  <div class="goodbooks">
    <div>
      <img class="bookimg" :src="data1.bookpic" @click="fn()" />
      <img v-if="data1.active!=null" class="hot" :src="hot" alt />
      <p v-text="data1.bookname">{{data1.bookname}}</p>
      <p>作者：{{data1.bookwriter}}</p>
      <p class="price">价格：{{data1.price}}元</p>
      <button :class="{addcar1,addcar2,addbar3}" @click="send($event)">{{addcar}}</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      hot: "http://image31.bookschina.com/pro-images/200916fd/tubiao45.png",
      addcar: "加入购物车",
      addcar1: true,
      addcar2: false,
      addbar3: true,
    };
  },
  props: ["data1"],
  mounted() {},
  methods: {
    async send(e) {
      let objData1 = {
        bookpic: this.data1.bookpic,
        bookname: this.data1.bookname,
        // bookwriter: this.data1.bookwriter,
        bookprice: this.data1.price,
      };
      var res = await this.$axios.post("/usercar", objData1, {
        header: { "content-Type": "application/x-www-form-urlencoded" },
      });
      if (res.data) {
        this.addcar = "已加入购物车";
        this.addcar1 = false;
        this.addcar2 = true;
        this.addcar3 = true;
      } else {
        this.addcar = "加入购物车";
        this.addcar1 = true;
        this.addcar3 = false;
      }
    },
  },
};
</script>
<style >
.section2 .goodbooks .addbar3 {
  margin-left: 160px;
  font-size: 18px;
  font-weight: bold;
  width: 120px;
  height: 40px;
  border: none;
}
.addcar1 {
  color: red;
  background-color: orange;
  border: none;
}
.addcar2 {
  color: #fff;
  background-color: orange;
}
</style>