import {defineStore} from "pinia"

export const useCountStore = defineStore('count',{  //使用计数相关store
    //配置
    state(){  //真正存储数据的地方,使用reactive包装
        return{
            sum:0  //是ref包装的
        }
    }
})
