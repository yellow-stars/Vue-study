<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
// import {mixin} from '../mixin'
export default {
  name: "MyStudent",
  data() {
    
    return {
      name: "张三",
      sex: "男",
    };
  },

};
</script>

<style>
.student{
  background-color: aqua;
}
</style>