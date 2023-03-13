<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
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
      this.$emit('demo')
    },
    unbind(){
     // this.$off('atguigu')//解绑一个自定义事件
     //this.$off(['atguigu','demo'])//解绑多个自定义事件
     this.$off()//解绑全部
    }
  }

};
</script>

<style>
.student{
  background-color: aqua;
}
</style>