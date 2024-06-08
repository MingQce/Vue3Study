<template>
  <div class="fruit">
    <button @click="getFruit">获取一种水果</button>
    <ul>
      <li v-for="fruit in fruitsStore.fruits" :key="fruit.id">{{fruit.title}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Fruits">
  import {reactive} from "vue";
  import {nanoid} from "nanoid";
  import {fruitsInter, useFruitsStore} from "@/store/fruits";
  import {useCountStore} from "@/store/count";  //引入接口
  //数据
  const fruitsStore = useFruitsStore()
  const Fruits_basket = [
    {title:'蓝莓'},
    {title:'草莓'},
    {title:'蔓越莓'}
  ];
  console.log(fruitsStore)
  //方法
  async function getFruit(){  //修改数据
    /*
    //获取对象
    let obj = await Fruits_basket.pop()
    //包装为fruit
    if(obj){  //判断是否还有剩余的水果对象
      let fruit = {id:nanoid(),title:obj.title}
      fruits.unshift(fruit)  //后来的放前面
    }else{
      console.log("没有水果了")
    }
     */
  }
</script>

<style scoped>
.fruit {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>