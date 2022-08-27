<template>
  <div>
    <div class="main" v-show="false">
      <dog
        v-for="(item, index) in dog"
        :key="index"
        :obj="item"
        @bgc="bgc(index)"
      ></dog>
    </div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ul>
    <table v-show="false">
      <tr
        is="mytr"
        v-for="item in goodsArr"
        :item="item"
        :key="item.goodsName"
      ></tr>
      <tr>
        <td>ALL Number{{ allsum() }}</td>
      </tr>
    </table>
    <div v-show="false">
      <p>商品清单如下：</p>
      <p v-for="item in shopData" :key="item.price">
        {{ item.shopName + item.price }}/元份
      </p>
      <p>请选择购买数量</p>
      <food
        v-for="(item, index) in shopData"
        :key="index"
        :item="item"
        @add="add(index)"
        @rud="rud(index)"
      ></food>
      <p>总价为{{ shopadd() }}</p>
    </div>
    <!-- <nav-v></nav-v> -->
    <tian-jian></tian-jian>
  </div>
</template>

<script>
import dog from "@/components/dog.vue";
import mytr from "@/components/mytr.vue";
import food from "@/components/food.vue";
import navV from "@/components/nav.vue";
import TianJian from "@/components/tianjia.vue";
export default {
  components: { dog, mytr, food, navV, TianJian },
  data() {
    return {
      arr: [],
      shopData: [
        {
          shopName: "可比克薯片",
          price: 5.5,
          count: 0,
        },
        {
          shopName: "草莓酱",
          price: 3.5,
          count: 0,
        },
        {
          shopName: "红烧肉",
          price: 55,
          count: 0,
        },
        {
          shopName: "方便面",
          price: 12,
          count: 0,
        },
      ],
      goodsArr: [
        {
          count: 0,
          goodsName: "Watermelon",
        },
        {
          count: 0,
          goodsName: "Banana",
        },
        {
          count: 0,
          goodsName: "Orange",
        },
        {
          count: 0,
          goodsName: "Pineapple",
        },
        {
          count: 0,
          goodsName: "Strawberry",
        },
      ],
      dog: [
        {
          dogImgUrl: require("@/assets/images/001.png"),
          dogName: "博美",
          color: "",
        },
        {
          dogImgUrl: require("@/assets/images/002.png"),
          dogName: "泰迪",
          color: "",
        },
        {
          dogImgUrl: require("@/assets/images/003.png"),
          dogName: "金毛",
          color: "",
        },
        {
          dogImgUrl: require("@/assets/images/004.png"),
          dogName: "哈士奇",
          color: "",
        },
        {
          dogImgUrl: require("@/assets/images/005.png"),
          dogName: "阿拉斯加",
          color: "",
        },
        {
          dogImgUrl: require("@/assets/images/006.png"),
          dogName: "萨摩耶",
          color: "",
        },
      ],
    };
  },
  methods: {
    bgc(i) {
      this.dog[i].color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)})`;
      this.arr.push(this.dog[i].dogName);
    },
    allsum() {
      return this.goodsArr.reduce((pri, curr) => (pri += curr.count), 0);
    },
    rud(i) {
      if (this.shopData[i].count === 0) return;
      this.shopData[i].count--;
    },
    add(i) {
      this.shopData[i].count++;
    },
    shopadd() {
      return this.shopData.reduce(
        (pri, curr) => (pri += curr.price * curr.count),
        0
      );
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 50px auto 0;
  width: 650px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: lawngreen;
}
</style>
