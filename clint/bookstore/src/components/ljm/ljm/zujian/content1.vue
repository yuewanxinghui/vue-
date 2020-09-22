<template>
<div>
    <el-table  :data="tableData" border style="width: 1000px" >
    <el-table-column fixed prop="bid" label="序号" width="120" ></el-table-column>
    <el-table-column prop="bookname" label="书名" width="120" ></el-table-column>
   
    <el-table-column  prop="" label="图片" width="250">
     <template slot-scope="scope">
              <img :src="scope.row.bookpic" alt="">
     </template>
    </el-table-column>
    <el-table-column prop="bookwriter" label="作者" width="120"></el-table-column>
    <el-table-column prop="price" label="价格" width="120"></el-table-column>
    <el-table-column prop="active" label="活动" width="120"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column> 
    </el-table>  
    </div>
</template>
<script>
export default {
    data(){
        return{
             tableData:[],
        }
    },
    
    mounted() {
        this.$axios.get("http://192.168.3.124:7001/test")
      .then((res)=>{
        this.tableData=res.data
       
      })
   
  },
   updated() {
       this.$axios.get("http://192.168.3.124:7001/test")
      .then((res)=>{
      this.tableData=res.data
      
      })
  },
  methods: {
      handleClick(row) {
      console.log(row);
    //    var f=new FormData()
    //    f.append("row",this.bid)
    //    console.log(f);
      
      this.$axios.post("http://192.168.3.124:7001/del",row)
      .then((res)=>{
            console.log(res.data)          
      });
      this.$notify({
          title:"成功",
          message:"删除成功",
          type:'success'
      });
  },
  
}
}
</script>
<style >


</style>
