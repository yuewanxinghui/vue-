<template>

 <div class="box">
   <div class="top">
    <div class="title">檀墨香坊后台管理系统</div>
   </div>
   
     <div class="content">
     <div class="left">
      <div class="bottonbox1"><button class="button1" @click="content1('add')">添加</button></div>
      <div class="bottonbox2"><button class="button2" @click="content1('table1')">查询全部</button></div>  
     </div>     
     <div class="right">
      <!-- 组件切换的地方 -->
      <component :is="content"></component>

    </div>
</div>
    </div>
 

</template>

 
<script>
import table1 from "./zujian/content1.vue"
import add from "./zujian/add.vue"
export default {
  data() {
    return {   
     
       content:"",
       
    };
  },
  components:{
    table1:table1,
    add:add
  },
  mounted() {
      //   this.$axios.get("http://192.168.3.124:7001/test")
      // .then((res)=>{
      
      //     this.tableData=res.data
       
      // })
   
  },
  // updated() {
  //      this.$axios.get("http://192.168.3.124:7001/test")
  //     .then((res)=>{
  //     this.tableData=res.data
      
  //     })
  // },
  
  methods: {
  
    // handleClick(row) {
    //   console.log(row);
    // //    var f=new FormData()
    // //    f.append("row",this.bid)
    // //    console.log(f);
      
    //   this.$axios.post("http://192.168.3.124:7001/del",row)
    //   .then((res)=>{
    //         console.log(res.data)          
    //   });
    //   this.$notify({
    //       title:"成功",
    //       message:"删除成功",
    //       type:'success'
    //   });
      

    // },
    content1(arg){
      this.content=arg
      
    }
   

  },
};
</script>
<style>
.content{
    width:1200px;
    height: 100%;
    display: flex;
    justify-content: flex-start;       
}
.top{
  width: 1320px;
  height: 100px;
  background-color: #459DF6;
  /* 459DF6 */
  color: #ffffff;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}
.left{
  margin-top: 2px;
  width: 100px; 
  background-color:  #459DF6;  
}
.title{
  height: 100px;
  margin: auto;  
  line-height: 100px;
}
.rigth{


}

button{
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  background-color:  #459DF6;
  color: #ffffff; 
  text-align: center;
border-radius: 6px;
}
.button1{
width: 40px;
 height: 40px;
}
.button2{
  width: 70px;
}

</style>


