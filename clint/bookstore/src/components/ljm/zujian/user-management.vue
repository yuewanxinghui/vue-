<template>
  <div class="umall">
 
    <div class="content">
         <div class="umtop">
      <button @click="chazhao" class="umbuntton1">查询全部用户</button>
    </div>
         <!-- <button @click="chazhao" class="umbuntton1">查询全部用户</button> -->
      <table v-show="chaxun" class="umtable" >
        <thead>
          <th>序号</th>
          <th>头像</th>
          <th>账号</th>
          <th>密码</th>
          <th>操作</th>
        </thead>
        <deluser v-for="(el,index) in data1" :deldata='el' :key='index'></deluser>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data1: [],
      chaxun: false,
      xiugai: false,
      id: "",
      zhanghao: "",
      userimg: "",
      pwd: "",
      file: "",
      index: "",
    };
  },
  components:{
      deluser:()=>import('./deluser.vue')
  },
  methods: {
    chazhao() {
      this.chaxun = true;
      this.$axios.post("http://192.168.3.124:7001/userall").then((res) => {
        //   console.log(res.data)
        this.data1 = res.data;
      });
    },
    
  },
};
</script >
<style scoped>
.umbuntton1 {
  width: 40px;
  height: 40px; 
  background-color:   #7DBBF9;
  margin-left: 90px;
  margin-top: 30px;
}
.touxiang {
  width: 50px;
  height: 50px;
}
table,
th,
td {
  border: 1px solid #000;
  border-collapse: collapse;
}

th,
td {
  padding: 2px;
  height: 40px;
  width: 100px;
}
.content {
  width: 800px;
  display: flex;
  justify-content: flex-start; 

}
input {
  outline: none;
  border: none;
  width: 60px;
  height: 40px;
}
.umtable{
  width: 600px;
  margin-top: 30px;
  margin-left: 150px;
}
.umtop{
  height: 50px;

}

</style>


