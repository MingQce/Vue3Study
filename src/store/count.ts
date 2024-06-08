import {defineStore} from "pinia"

export const useCountStore = defineStore('count',{  //使用计数相关store
    actions:{  //动作函数,用于响应组件中的动作
        increment(value:number){
            if(this.sum < 10){  //相对于前两种方法
                this.sum += value  //this是当前的store
            }
        }
    },
    //配置
    state(){  //真正存储数据的地方,使用reactive包装
        return{
            sum:0,  //是ref包装的
            address:'bei-jing'
        }
    },
    getters:{  //可以在count.vue中取出使用
        //1
        bigSum:state => state.sum * 10,  //ps:箭头函数不支持用this
        //2
        upperAddress():string{
            return this.address.toUpperCase()
        }
    }
})
