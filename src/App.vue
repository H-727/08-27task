<template>
  <div>
    <tast-one v-for="(item, index) in url" :key="index" :src="item" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: [
        "../assets/images/001.png",
        "../assets/images/002.png",
        "../assets/images/003.png",
        "../assets/images/004.png",
        "../assets/images/005.png",
        "../assets/images/006.png",
      ],
    };
  },
  methods: {
    src(str) {
      return this.url + str;
    },
  },
};
</script>

<style></style>
