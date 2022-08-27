<template>
  <div>
    <span>{{ item.shopName }}</span>
    <button @click="rud">-</button>
    <span>{{ item.count }}</span>
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    add() {
      this.$emit("add");
    },
    rud() {
      this.$emit("rud");
    },
  },
};
</script>

<style></style>
