<template>
<div class="eltable">
    <el-table  :data="tableData" border style="width: 1000px" header-align="center" >
    <el-table-column fixed prop="bid" label="序号" width="70" >

      
    </el-table-column>
    <el-table-column prop="bookname" label="书名" width="120" >
    
     


    </el-table-column>
   
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
        <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">编辑
        </el-button>
      </template>
    </el-table-column> 
    </el-table>  
     <!-- 更改的地方 -->
    
<!-- 弹出页面的表单名为editForm，那么下面 -->
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
             tableData:[],
             //更改的地方
            
            
        }
        



    },
    
    
    mounted() {
        this.$axios.get("http://192.168.3.124:7001/test")
      .then((res)=>{
        this.tableData=res.data
              //更改的地方
        
       
      })
   
  },
  //  updated() {
  //      this.$axios.get("http://192.168.3.124:7001/test")
  //     .then((res)=>{
  //     this.tableData=res.data
      
  //     })
  // },
  methods: {
      handleClick(row) {
      console.log(row);
       var f=new FormData()
       f.append("row",this.bid)
       console.log(f);
      
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
<style  scoped>
.eltable{
  margin-left: 60px;
 
}

</style>
