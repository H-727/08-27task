<template>
  <tr>
    <td>
      <input type="number" v-model.number="item.count" />
      <span>{{ item.goodsName }}</span>
      <span v-show="item.count === 0"> εεδΊ</span>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style></style>
