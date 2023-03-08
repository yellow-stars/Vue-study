<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学生名称：{{ studentName }}</h2>
    <h2>年龄：{{ age }}</h2>
    
  </div>
</template>

<script>
// 组件交互相关代码
export default Vue.extend({
  name:'Student',
  data(){
    return {
      studentName: '张三',
      age:18
    }
  },
  
})

</script>
<style>
/* 组件样式 */
.demo{
  background-color:blue;
}
</style>
