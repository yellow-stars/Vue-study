<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition>
      <h1 v-show="isShow" >你好啊!</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name:'MyTest',
  data(){
   return{
    isShow:true
   }
  }
}
</script>

<style scoped>
h1{
    background-color: aqua;
}

.v-enter-active{
  animation: atguigu 1s;
}
.v-leave-active{
  animation: atguigu 1s reverse;
}

@keyframes atguigu {
  from{
    transform: translateX(-100%);
  }
  to{
    transform:translateX(0px);
  }
}
</style>