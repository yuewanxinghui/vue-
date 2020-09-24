<template>
<div>
<div class="head">
  <div class="headleft">请输入你要查询的id号：<input type="text" v-model="id" class="aa" ></div>
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
              <input type="text" v-model="el.bid"  />
            </th>
            <th>
              <input type="text" v-model="el.bookname"  />
            </th>
            <th>
              <input type="text" v-model="el.active"  />
            </th>
            <th>
              <input type="text" v-model="el.bookwriter"  />
            </th>
            <th >
              <input type="text" v-model="el.price" />
            </th>
            <th>
              <input type="text" v-model="el.tid"  />
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
             transfer.append("active", this.active);
             transfer.append("price", this.price);
              transfer.append("bid", this.active);
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
input {
  outline: none;
  border: none;
  width: 40px;
  height: 40px;
}
.head{
 width: 1000px;
  height: 60px;
  margin:10px;
  display: flex;
justify-content: space-between;
  
}
.headleft{
  width: 1200px;
}
.content{
  width: 1000px;
  display: flex;
  justify-content: flex-start;
}
.contentbox1{
  width: 1500px;
  margin: 10px;
  }
</style>