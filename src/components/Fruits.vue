<template>
  <div class="fruit">
    <button @click="getFruit">获取一种水果</button>
    <ul>
      <li v-for="fruit in fruitsList" :key="fruit.id">{{fruit.title}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Fruits">
  import {useFruitsStore} from "@/store/fruits";
  import {storeToRefs} from "pinia";
  //数据
  const fruitsStore = useFruitsStore()
  const {fruitsList} = storeToRefs(fruitsStore)
  const Fruits_basket = [
    {title:'蓝莓'},
    {title:'草莓'},
    {title:'蔓越莓'}
  ];
  fruitsStore.$subscribe((mutation, state)=>{  //订阅，监视vuex中数据的修改
    localStorage.setItem('fruits',JSON.stringify(state.fruitsList))  //把数据存为一个字符串

  })
  //方法
  function getFruit(){
    fruitsStore.getAFruit(Fruits_basket)
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