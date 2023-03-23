//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter插件
import VueRouter from 'vue-router'
import router from './router/index'
//应用插件
Vue.use(VueRouter)
//创建vm
new Vue({
    el:'#app',
    render: h=> h(App),
    router:router
})