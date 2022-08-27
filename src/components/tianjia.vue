<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="uname" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.number="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="add(index)">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in arr" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.uname }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click="edit(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      index: "",
      uname: "",
      age: "",
      sex: "男",
      arr: [],
    };
  },
  methods: {
    add(i) {
      if (this.uname === "" || this.age === "" || this.sex === "")
        return alert("请输入正确的信息");
      if (this.flag) {
        this.arr[i].uname = this.uname;
        this.arr[i].age = this.age;
        this.arr[i].sex = this.sex;
        this.uname = "";
        this.age = "";
        this.sex = "男";
        this.flag = false;
      } else {
        const obj = {};
        obj.id = this.arr.length + 1;
        obj.uname = this.uname;
        obj.age = this.age;
        obj.sex = this.sex;
        this.arr.push(obj);
        this.uname = "";
        this.age = "";
        this.sex = "男";
      }
    },
    del(i) {
      this.arr.splice(i, 1);
    },
    edit(i) {
      this.index = i;
      this.uname = this.arr[i].uname;
      this.age = this.arr[i].age;
      this.sex = this.arr[i].sex;
      this.flag = true;
    },
  },
};
</script>
