<template>
  <div>
    <h1></h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
    <h3>person组件求和为：{{ sum }}</h3>
  </div>
</template>

<script> 
import {nanoid} from 'nanoid'
// import {mapState} from 'vuex'
export default {
   name:'MyPersons',
   data(){
    return{
        name:''
    }
   },
   computed:{
    personList(){
        return this.$store.state.personList
    },
  //    ...mapState(['personList'])
   sum(){
        return this.$store.state.sum
    }    

   },
   methods:{
    add(){
        const personObj={ id:nanoid(),name:this.name}
        this.name = ''
        this.$store.commit('ADD_PERSON',personObj)
    }
   }
}
</script>

<style>

</style>