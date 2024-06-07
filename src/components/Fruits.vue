<template>
  <div class="fruit">
    <button @click="getFruit">获取一种水果</button>
    <ul>
      <li v-for="fruit in fruits" :key="fruit.id">{{fruit.title}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Fruits">
  import {reactive} from "vue";
  import {nanoid} from "nanoid";
  interface fruitInter{  //定义一个水果对象
    id:string,
    title:string
  }
  type fruitsInter = fruitInter[]  //定义fruits为一个装有多个水果对象的数组
  //数据
  let fruits:fruitsInter = reactive([  //使用fruitsInter接口进行规范

  ])
  const Fruits_basket = [
    {title:'蓝莓'},
    {title:'草莓'},
    {title:'蔓越莓'}
  ];

  //方法
  async function getFruit(){
    //获取对象
    let obj = await Fruits_basket.pop()
    //包装为fruit
    if(obj){  //判断是否还有剩余的水果对象
      let fruit = {id:nanoid(),title:obj.title}
      fruits.unshift(fruit)  //后来的放前面
    }else{
      console.log("没有水果了")
    }

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