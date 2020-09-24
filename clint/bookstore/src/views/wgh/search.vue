<template>
  <div>
    <div class="searchcopy">
      {{ content }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {},
  async mounted() {
    var res = await this.$axios.post("/like");
    // console.log(res)
    // this.content=res.data.info
  },
};
</script>
<style scoped>
.searchcopy {
  border-top: none;
  width: 400px;
  height: 50px;
  border: 1px solid red;
  position: absolute;
  top: 164px;
  right: 226px;
  box-sizing: border-box;
}
</style>