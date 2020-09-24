<template>

 <div class="box">
   <div class="top">
       <div class="topchilden1">
       <img src="@/assets/logo.png" alt="" class="imgsize"></div>  
        
      <div class="topchilden2"> <span>檀墨香坊后台管理系统</span> <div  class="leave"><button @click="leave" >退出登录</button></div></div>
      </div>   
     <div class="content">
     <div class="left">
      <div class="bottonbox1"><button class="button1" @click="content1('add')">添加</button></div>
      <div class="bottonbox2"><button class="button2" @click="content1('table1')">查询全部</button></div> 
      <div class="bottonbox3"><button class="button3" @click="content1('updata')">更新数据</button></div>   
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
import updata from "./zujian/updata.vue"
export default {
  data() {
    return {   
     
       content:"",
       
    };
  },
  components:{
    table1:table1,
    add:add,
    updata:updata
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
  leave(){
   localStorage.setItem('loading',null);
				localStorage.setItem('isLogin',0);
				localStorage.setItem('admin',0);
				this.$router.push('Home')
  },
  
    content1(arg){
      this.content=arg
      
    }
   

  },
};
</script>
<style>
.content{
  width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;       
}
.top{
  width: 1320px;
  height: 150px;  
  opacity: 0.7;
  display: flex;
  justify-content: flex-start;
  /* 459DF6 */
  color: #ffffff;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}
.left{
  margin-top: 2px;
  width: 100px; 
  background-color:  #7DBBF9;  
  
 margin-top: -11px;

 
}
 .topchilden1{
   border: 1px solid #459DF6;
   width: 100px;
   height: 100px;
   border-radius: 50%;
   background-color: #459DF6;
   
   margin-top: 25px;

  

}
.topchilden2{ 
  width: 1100px;
  height: 100px;
  margin: auto;  
  line-height: 100px;
  display: flex;
justify-content: space-between;
 background-color: #459DF6;
   /* opacity: 0.9; */
 margin-left: 1px;

  
}
.rigth{
  width: 1000px;



}

button{
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  background-color:  #7DBBF9;
  color: #ffffff; 
  text-align: center;
border-radius: 6px;
}
.button1{
width: 40px;
 height: 40px;
   background-color:  #7DBBF9;


}
.button2{
  width: 70px;
  margin-bottom: 10px;
}
.button2{
  width: 70px;
}
.leave
{
 width: 100px;
}
.avatar{
  width: 200px;
  height: 80px;
  border-radius: 50%;

}
.imgsize{
  width:120px ;
  height: 100px;
 margin-left: -11px;
 margin-top: 12px;
}

</style>


