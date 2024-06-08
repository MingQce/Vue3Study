<template>
  <div class="fruit">
    <button @click="getFruit">获取一种水果</button>
    <ul>
      <li v-for="fruit in fruitsStore.fruits" :key="fruit.id">{{fruit.title}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Fruits">
  import {useFruitsStore} from "@/store/fruits";
  //数据
  const fruitsStore = useFruitsStore()
  const Fruits_basket = [
    {title:'蓝莓'},
    {title:'草莓'},
    {title:'蔓越莓'}
  ];
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