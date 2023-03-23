<template>
  <div>
    <h1>第一个人的名字是{{ firstPersonName }}</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的</button>
    <button @click="addPersonServer">添加一个人，名字随机</button>
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
        return this.$store.state.personAbout.personList
    },
  //    ...mapState(['personList'])
   sum(){
        return this.$store.state.countAbout.sum
    },
    firstPersonName(){
      return this.$store.getters['personAbout/firstPersonName']
    }    

   },
   methods:{
    add(){
        const personObj={ id:nanoid(),name:this.name}
        this.name = ''
        this.$store.commit('personAbout/ADD_PERSON',personObj)
    },
    addWang(){
      const personObj = {id:nanoid(),name:this.name}
      this.$store.dispatch('personAbout/addPersonWang',personObj)
      this.name=''
    },
    addPersonServer(){
      this.$store.dispatch('personAbout/addPersonServer')
    }
   }
}
</script>

<style>

</style>