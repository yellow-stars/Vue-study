<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="show">点我输出上方的dom元素</button>
    <MySchool ref="sch"></MySchool>
  </div>
</template>

<script>
//引入MySchool组件
import MySchool from './components/MySchool.vue'
export default {
name:'App',
components:{
    MySchool
},
data(){
    return{
        msg:'欢迎学习Vue！'
    }
},

methods:{
    show(){
    console.log(this.$refs.title)
    console.log(this.$refs.btn)
    console.log(this.$refs.sch)
    }
}

}
</script>

