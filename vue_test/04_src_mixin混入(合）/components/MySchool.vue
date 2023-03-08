<template>
  <div>
    <h2 @click="show">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import {mixin} from '../mixin'
export default {
  name: "MyStudent",
  data() {
    
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  mixins:[mixin]
  // methods: {
  //   show() {
  //     alert(this.name);
  //   },
  // },
  //简单生命接受
  // props:['name','age','sex'],

  //接受的同时进行类型限制
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // },

  //接受的同时对类型进行限制+默认值的制定+必要性的限制
  // props:{
  //   name:{
  //     type:String,//name的类型是字符串
  //     required:true //name是必要的

  //   },
  //   age:{
  //     type:Number,
  //     defualt:99//默认值
  //   },
  //   sex:{
  //     type:String,
  //     required:true
  //   }
  // }
};
</script>

<style>
</style>