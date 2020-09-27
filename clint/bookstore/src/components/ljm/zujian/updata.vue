<template>
<div class="updatacontent">
<div class="head">
  <div class="headleft">请输入你要查询的id号：<input type="text" v-model="id" class="bb" ></div>
  <div class="headright">  <button  @click="look">查询</button> </div>

   <!-- <button @click="submit">上传</button> -->
</div>
    <div class="content">
    <div class="contentbox1">
       
      <table>
        <thead>
          <th>序号</th>
          <th>书名</th>
          <th>活动</th>
          <th>作者</th>
          <th>价格</th>
          <th>类型</th>
          <th>图片</th>
        </thead>
         <tbody :data="data1" v-for="el in data1">
          <tr>
            <th>
              <input type="text" v-model="el.bid"  class="aa" />
            </th>
            <th>
              <input type="text" v-model="el.bookname"   class="aa" />
            </th>
            <th>
              <input type="text" v-model="el.active"   class="aa"  />
            </th>
            <th>
              <input type="text" v-model="el.bookwriter"    class="aa"/>
            </th>
            <th >
              <input type="text" v-model="el.price"  class="aa" />
            </th>
            <th>
              <input type="text" v-model="el.tid"   class="aa" />
            </th>
             <th>            
                  <img :src="el.bookpic"  class="img1"/>
            </th>
          </tr>
        </tbody>      
      </table>
    </div>
       <div class="contentbox2">
            <button @click="submit">上传</button>
       </div>
    </div>
     
     

</div>

</template>
<script>
export default {
    data() {
        return {
            id:"",     
            data1:[],
            img1: "", 
            active:"",
            price:"",

        }
    },
    methods: {
        look(){
            var url="http://192.168.3.124:7001/onedata"
            var data={
             id:this.id
            }
            this.$axios.post(url,data)
            .then((res)=>{
             console.log(res.data)
             this.data1=res.data
             console.log(this.data1)
          
            })
        },
        
        submit() {
          var url="http://192.168.3.124:7001/updata";
             let transfer = new FormData();
            //  transfer.append("active", this.active);
             transfer.append("price", this.data1[0].price);
            transfer.append("active", this.data1[0].active);
            transfer.append("id", this.id);
             this.$axios.post(url, transfer, {
          header: {
            "content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((res)=>{
          console.log(res)
        })
        }
    }
}
              
        
    
    

</script>
<style scoped>
button{
    width: 40px;
    height: 40px;
}
table,
th,
td {
  border: 1px solid #000;
  border-collapse: collapse;
}

th,
td {
  padding: 4px;
}
th{
  width: 50px;
}
/* input {
  outline: none;
  border: none;
  width: 40px;
  height: 40px;
} */
.head{
 width: 1000px;
  height: 60px;
  margin:10px;
  display: flex;
justify-content: space-between;
  
}
.headleft{
  width:950px;
}
.headright{
  margin-left: -2px;
}
.content{
  width: 1000px;
  display: flex;
  justify-content: flex-start;
}
.contentbox1{
  width: 1450px;
  margin: 10px;
  }
  .updatacontent{
  margin-left: 50px;
   border: 1px solid #459DF6;
   height: 100%;
  }
  .aa{
   
 outline: none;
  border: none;
  width: 40px;
  height: 40px;
  }
  .bb:focus{
    border: 1px solid  #459DF6;
    outline: none;

  }
</style>