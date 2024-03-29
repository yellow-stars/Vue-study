import VueRouter from "vue-router";
import MyAbout from '../pages/MyAbout'
import MyHome from '../pages/MyHome'
import MyNews from '../pages/MyNews'
import MyMessage from '../pages/MyMessage'
import MyDetail from '../pages/MyDetail'
export default new VueRouter({
    routes: [
        {
            path: '/About',
            component: MyAbout
        },
        {
            path: '/Home',
            component: MyHome,
            children: [
                {
                    path: 'MyNews',
                    component: MyNews,
                },
                {
                    path: 'MyMessage',
                    component: MyMessage,
                    children: [
                        {
                            name:'xiangqing',
                            path: 'MyDetail',
                            component: MyDetail,
                            //props的第一种写法,值为对象,该对象中的所有key-value都会一props的形式传给Detail组件
                            // props:{
                            //      a:1,b:'hello'
                            // }
                            
                            //props的第二种写法，值为布尔值,若布尔值为真就会把该组件收到的所有Params参数，以props的形式传给Detail组件
                            // props:true
                           
                            //props的第三种写法，值为函数
                            props($route){
                                return {id:$route.query.id,title:$route.query.title}
                            }

                        }
                    ]
                }
            ]
        },
    ]
})