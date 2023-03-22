//该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//求和相关配置
const countOptions = {
    namespaced:true,
    actions: {
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
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500)
        }
    },
    mutations: {
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}

//人员管理相关配置
const personOptions = {
    namespaced:true,
    actions: {},
    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutation被调用了')
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {}
}


//创建store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})

