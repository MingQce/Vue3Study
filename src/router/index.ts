//  创建一个路由器，并暴露出去

//1.引入createRouter
import {createRouter,createWebHistory} from "vue-router";
//引入可能要呈现的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from "@/pages/Detail.vue";
//2.创建路由器
const router = createRouter({
    history:createWebHistory(),  //vue3要求：需要制定路由器的工作模式
    //  history模式:url美观，后端项目上线后需要服务端配合处理路径问题
    //  hash模式:兼容性更好,SEO优化方面相对较差
    routes:[  //路由规则(一组对应关系,写成对象)
        {
            name:'zhuye',
            path:'/',  //路径
            component:Home  //组件
        },
        {
            name:'xinwen',
            path:'/news',  //路径
            component:News,  //组件
            children:[  //子级路由
                {
                    path:'detail',  //子级路由不需要'/'
                    component:Detail
                }
            ]
        },
        {
            name:'guanyu',
            path:'/about',  //路径
            component:About  //组件
        }
    ]
})

//暴露router
export default router