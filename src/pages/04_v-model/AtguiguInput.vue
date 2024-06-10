<template>
  <!-- 自定义UI组件库底层 -->
  <input 
    type="text"
    :value="ming"
    @input="emit('update:ming',(<HTMLInputElement>$event.target).value)"
  >
    <!--  HTMLInputElement断言为html输入元素,$event.target.value即是文本框输入的值  -->
  <br>
  <input 
    type="text" 
    :value="mima"
    @input="emit('update:mima',(<HTMLInputElement>$event.target).value)"
  >
</template>

<script setup lang="ts" name="AtguiguInput">
  defineProps(['ming','mima'])  //声明数据
  const emit = defineEmits(['update:ming','update:mima'])  //定义事件，数据更新后触发
</script>

<style scoped>
  input {
    border: 2px solid black;
    background-image: linear-gradient(45deg,red,yellow,green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>