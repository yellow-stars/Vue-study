<template>
  <div class="category">
   <h3>{{title}}分类</h3>
   <!-- <ul>
    <li v-for="(item,index) in listData" :key="index">{{ item }}</li> 
   </ul> -->
   <slot :games="games" >我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
  
  </div>
</template>

<script>
export default {
    name:'MyCategory',
    props:['title'],
    data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"], 
    };
  },
}
</script>

<style>
.category{
    background-color:skyblue;
    width:200px;
    height:300px;
}
</style>