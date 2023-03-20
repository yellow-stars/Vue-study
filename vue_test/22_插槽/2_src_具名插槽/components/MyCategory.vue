<template>
  <div class="category">
   <h3>{{title}}分类</h3>
   <!-- <ul>
    <li v-for="(item,index) in listData" :key="index">{{ item }}</li> 
   </ul> -->
   <slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
   <slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现2</slot>
  </div>
</template>

<script>
export default {
    name:'MyCategory',
    props:['title']
}
</script>

<style>
.category{
    background-color:skyblue;
    width:200px;
    height:300px;
}
</style>