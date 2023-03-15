<template>
  <div class="school">
    <h2 >学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
// import {mixin} from '../mixin'
export default {
  name: "MyStudent",
  data() {
    
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  methods:{
   demo(msgName,data) {
    console.log('hello消息收到了',msgName,data)
   }
  },
  mounted(){
    // this.$bus.$on('hello',(data)=>{
    //   console.log('我是School组件，收到了数据',data)
    // })
    this.pubId=pubsub.subscribe('hello',this.demo)
  },
  beforeDestroy(){
    pubsub.unsubscribe(this.pubId)
  }
  
};
</script>

<style>
.school{
  background-color: orange
}
</style>