<template>
  <div class="table2box">
    <div>
      <table>
        <thead>
          <th  width="50px">序号</th>
          <th>书名</th>
          <th>活动</th>
          <th>作者</th>
          <th>价格</th>
          <th>类型</th>
          <th>图片</th>
        </thead>
        <tbody>
          <tr>
            <th>
              <input type="text" v-model="bid" width="50px"/>
            </th>
            <th>
              <input type="text" v-model="bookname" />
            </th>
            <th>
              <input type="text" v-model="active" />
            </th>
            <th>
              <input type="text" v-model="bookwriter" />
            </th>
            <th >
              <input type="text" v-model="price" />
            </th>
            <th>
              <input type="text" v-model="tid" />
            </th>
            <th>
              <input type="file" @change="fn($event)" />
              <img :src="img1"  class="img1"/>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="submitbox">
      <button class="submit" @click="submit">上传</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bid: "",
      bookname: "",
      active: "",
      bookwriter: "",
      price: "",
      tid: "",
      file: "",
      img1: "",
    };
  },
  methods: {
    fn(e) {
        console.log(e);
      this.file = e.target.files[0];
        let f = new FileReader();
        console.log(333)
        f.readAsDataURL(this.file);
        console.log(1111)
        f.onload = (e1) => {
            console.log(e1)            
          this.img1 = e1.currentTarget.result;
        };
    },





    submit() {
      var url = "http://192.168.3.124:7001/add";
      let transfer = new FormData();
      transfer.append("bid", this.bid);
     transfer.append("tid", this.tid);
      transfer.append("bookname", this.bookname);
      transfer.append("active", this.active);
      transfer.append("bookwriter", this.bookwriter);
      transfer.append("price", this.price);
      transfer.append("file", this.file);
      this.$axios.post(url, transfer, {
          header: {
            "content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((res) => {
          console.log(res);
           if(res.state==200){
                 this.$notify({
          title:"成功",
          message:"删除成功",
          type:'success'
      });
           }
        });
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
}
input {
  outline: none;
  border: none;
  width: 40px;
  height: 40px;
}
.submitbox {
  width: 50px;
  height: 50px;
  padding: 15px;
}
.submit {
  width: 40px;
  height: 40px;
}
.table2box {
  display: flex;
  justify-content: flex-start;
}
.img1{
    width: 50px;
    height: 50px;
}
.thbox{
    display: flex;
    justify-content: flex-start;
}
</style>