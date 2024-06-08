import {defineStore} from "pinia";
import {reactive} from "vue";


export interface fruitInter{  //定义一个水果对象
    id:string,
    title:string
}
export type fruitsInter = fruitInter[]  //定义fruits为一个装有多个水果对象的数组
export const useFruitsStore = defineStore('fruits',{  //使用计数相关store
    //配置
    state(){  //真正存储数据的地方,使用reactive包装
        return{
            fruits:[  //ref包装
                {title:'蓝莓'},
                {title:'草莓'},
                {title:'蔓越莓'}
            ]
        }
    }
})