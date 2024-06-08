import {defineStore} from "pinia";
import {nanoid} from "nanoid";



export interface fruitInter{  //定义一个水果对象
    id:string,
    title:string
}
export type fruitsInter = fruitInter[]  //定义fruits为一个装有多个水果对象的数组
export const useFruitsStore = defineStore('fruits',{  //id与文件名相同使用计数相关store
    actions:{
        getAFruit(Fruits_basket){
            //获取对象
            let obj = Fruits_basket.pop()
            //包装为fruit
            if(obj){  //判断是否还有剩余的水果对象
                let fruit = {id:nanoid(),title:obj.title}
                this.fruitsList.unshift(fruit)  //后来的放前面
            }else{
                console.log("没有水果了")
            }
        }
    },
    //配置
    state(){  //真正存储数据的地方,使用reactive包装
        return{
            fruitsList:JSON.parse(localStorage.getItem('fruits') as string) || []  //使用parse转化回去。as string断言 || []防止第一次使用时没有数据
        }
    }
})