<template>
  <tbody>
    <tr>
      <th>
        <input type="text" v-model="deldata.id" />
      </th>
      <th>
        <img :src="deldata.userimg" alt="" class="touxiang" />
      </th>

      <th>
        <input type="text" v-model="deldata.name" />
      </th>
      <th>
        <input type="text" v-model="deldata.pwd" />
      </th>
      <th>
        <button @click="shanchu()">删除</button>
      </th>
    </tr>
  </tbody>
</template>
<script>
export default {
  props: ["deldata"],
  methods: {
    shanchu(index) {
      console.log(this.deldata.id);
           var url="http://192.168.3.124:7001/onedata"
            var data={
             id:this.deldata.id
            }
            this.$axios.post(url,data)
            .then((res)=>{
             console.log(res.data)
             this.data1=res.data
            //  console.log(this.data1)
          
            })



    },
  },
};
</script>
<style scoped>
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
input {
  outline: none;
  border: none;
  width: 60px;
  height: 40px;
}
.touxiang {
  width: 50px;
  height: 50px;
}
</style>
