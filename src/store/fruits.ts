import {defineStore} from "pinia";
import {nanoid} from "nanoid";
import {reactive} from "vue";


export interface fruitInter{  //定义一个水果对象
    id:string,
    title:string
}
export type fruitsInter = fruitInter[]  //定义fruits为一个装有多个水果对象的数组
export const useFruitsStore = defineStore('fruits',{  //使用计数相关store
    actions:{
        getAFruit(Fruits_basket){
            //获取对象
            let obj = Fruits_basket.pop()
            //包装为fruit
            if(obj){  //判断是否还有剩余的水果对象
                let fruit = {id:nanoid(),title:obj.title}
                this.fruits.unshift(fruit)  //后来的放前面
            }else{
                console.log("没有水果了")
            }
        }
    },
    //配置
    state(){  //真正存储数据的地方,使用reactive包装
        let fruits:fruitsInter = reactive([])
        return{
            fruits
        }
    }
})