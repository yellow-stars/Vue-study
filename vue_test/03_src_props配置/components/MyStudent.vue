<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄{{ myAge + 1 }}</h2>
    <button @click="updataAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    console.log(this)
    return {
      msg: "我是一个尚硅谷的学生",
      myAge:this.age
    };
  },
  methods:{
    updataAge(){
      this.myAge++
    }
  },
  //简单生命接受
  props:['name','age','sex'],
  
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