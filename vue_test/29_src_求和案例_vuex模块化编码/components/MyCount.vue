<template>
  <div >
  <h1>当前求和为:{{ sum }}</h1>
  <!-- <h1>当前求和10倍为:{{ $store.getters.bigSum }}</h1> -->
  <h3>我在{{ school }}学习{{ subject }}</h3>
  <h3>下方组件的总人数是：{{ personList.length }}</h3>
  <select v-model="n">
    <option :value="1">1</option>
    <option :value="2">2</option>
    <option :value="3">3</option>
  </select>
  <button @click="increment(n)">+</button>
  <button @click="decrement(n)">-</button>
  <button @click="incrementOdd(n)">当前求和为奇数再加</button>
  <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
    name:'MyCount',
    props:[''],
    data() {
    return {
    n:1,//用户选择的数字
    };
  },
  methods:{
    // increment(){
    //     this.$store.dispatch('jia',this.n)
    // },
    // decrement(){
    //   this.$store.dispatch('jian',this.n)
    // },
    // incrementOdd(){
    //   this.$store.dispatch('jiaOdd',this.n)
    // },
    // incrementWait(){
    //   this.$store.dispatch('jiaWait',this.n)
    //借助mapMutations生成对应方法，方法中会调用commit去联系mutation（对象写法）
    ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
    //借助mapActions生成对应方法，方法中会调用dispatch去联系actions（对象写法）
    ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
  },
  computed:{
    // ...mapState(['countAbout' ,'personAbout'])
      //借助mapState生成计算属性，从State中读取数据（数组写法）
    ...mapState('countAbout',['sum','school','subject']),
    ...mapState('personAbout',['personList',]),
    //借助MapGetter生成计算属性，从getters中读取数据。(数组写法)
    ...mapGetters('countAbout',['bigSum'])
  },
  mounted(){
    //console.log(this.$store)
  }

}
</script>

<style>
button{
  margin-left:5px;
}
</style>