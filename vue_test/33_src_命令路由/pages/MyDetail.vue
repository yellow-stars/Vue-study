<template>
  <div>
    消息编号：{{ $route.query.id }}
    消息标题：{{ $route.query.title }}
  </div>
</template>

<script>
export default {
name:'MyDetail',
mounted(){
    console.log('@@@@S',this)
}
}
</script>

<style>

</style>