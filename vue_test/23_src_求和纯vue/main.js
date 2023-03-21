//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入vuex
import Vuex from 'Vuex'
//引入store
import store from './store/index.js'

//使用插件
Vue.use(Vuex)



//创建vm
new Vue({
    el:'#app',
    render: h=> h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    
})