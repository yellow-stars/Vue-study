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
                            path: 'MyDetail/:id/:title',
                            component: MyDetail,
                        }
                    ]
                }
            ]
        },
    ]
})