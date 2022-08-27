<template>
  <div>
    <div class="my_div">
      <img :src="obj.dogImgUrl" alt="" />
      <p @click="fun" :style="{ background: obj.color }">
        {{ obj.dogName }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["obj"],
  methods: {
    fun() {
      this.$emit("bgc");
    },
  },
};
</script>

<style lang="less" scoped>
.my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
  background-color: #fff;
}

.my_div img {
  width: 100%;
  height: 200px;
}
</style>
