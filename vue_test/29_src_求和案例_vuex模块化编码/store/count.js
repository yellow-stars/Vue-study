//求和相关配置
export default  {
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