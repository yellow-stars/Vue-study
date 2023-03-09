<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
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
  methods:{
    sendStudentName(){
      //触发Student身上的自定义事件
      this.$emit('atguigu',this.name)
    }
  }

};
</script>

<style>
.student{
  background-color: aqua;
}
</style>