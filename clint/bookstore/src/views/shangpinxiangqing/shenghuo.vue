<template>
  <div class="wen">
    <div class="nav">
      <p>生活类书籍</p>
      <router-link class="backhome" to="/Home">返回主页</router-link>
    </div>
    <div class="wenxue">
      <shenghuo v-for="el in arr" :data1="el"></shenghuo>
    </div>
    <footer1></footer1>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      bookwriter: "",
      price: "",
      arr: [],
    };
  },
  components:{
    shenghuo: () => import("@/components/wgh/shenghuo.vue"),
    footer1: () => import("@/components/wgh/footer1.vue"),
  },
  async created() {
    var res = await axios.get("/test");
    this.arr = res.data;
    console.log(this.arr);
  },
};
</script>
<style >
.wen {
  background-image: url(http://pic.sc.chinaz.com/files/pic/pic9/202008/apic26944.jpg);
}
.nav {
  display: flex;
  justify-content: space-around;
  height: 100px;
  line-height: 100px;
  font-size: 30px;
  color: blue;
}
.nav .backhome {
  color: blue;
  text-decoration: none;
}
.wenxue {
  width: 1000px;
  height: auto;
  margin: 0 auto;
}
.wenxue {
  display: flex;
  flex-wrap: wrap;
}
.wenxuelist {
  text-align: center;
  width: 240px;
  height: 340px;
  margin: 10px 5px;
  box-shadow: 0px 0px 20px gray;
  box-sizing: border-box;
}
.wenxuelist img{
  width: 200px;
  height: 200px;
}
.wenxuelist p {
  font-size: 14px;
  font-weight: 400;
  color: #333737;
}
.wenxuelist .price {
  font-weight: bold;
  color: red;
}
</style>