<template>
  <div class="shoptip">
    <router-link to="/shoptip/wx" class="leftshop">文学</router-link>
    <br />
    <router-link to="/Home" class="leftshop">社科</router-link>
    <br />
    <router-link to="/Home" class="leftshop">少儿</router-link>
    <br />
    <router-link to="/Home" class="leftshop">艺术</router-link>
    <br />
    <router-link to="/Home" class="leftshop">生活</router-link>
    <br />
    <router-link to="/Home" class="leftshop">文教</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style >
.shoptip {
  width: 230px;
  height: 500px;
  background-color: #fff;
  opacity: 0.6;
  z-index: 2;
  margin-left: 150px;
}
.shoptip .leftshop {
  text-decoration: none;
  text-align: center;
  display: block;
  margin: 6px 0;
  padding: 10px 30px;
  color: red;
  font-weight: bold;
  font-size: 20px;
}
.shoptip .leftshop:hover {
  background-color: #000;
  color: #fff;
}
</style>