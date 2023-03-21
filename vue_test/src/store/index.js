//该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)
//准备actions——用于响应组件中的动作
const actions = {
    jia(context, value) {
        //console.log('jia被调用了')
        context.commit('JIA', value)
    },
    jian(context, value) {
        //console.log('jia被调用了')
        context.commit('JIAN', value)
    },
    jiaOdd(context, value) {
        //console.log('jia被调用了')
        if(context.state.sum %2){
            context.commit('JIA', value)
        }  
    },
    jiaWait(context,value){
      setTimeout(()=>{
        context.commit('JIA', value)
      },500)
    }

}
//准备mutation——用于操作数据（state）
const mutations = {
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    }
}
//准备state——用于存储数据
const state = {
    sum: 0,
}
//创建store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})

