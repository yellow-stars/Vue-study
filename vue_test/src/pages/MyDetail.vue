<template>
  <div>
    消息编号：{{ id }}
    消息标题：{{ title }}
 
  </div>
</template>

<script>
export default {
name:'MyDetail',
props:['id','title'],
mounted(){
    console.log('@@@@S',this)
}
}
</script>

<style>

</style>