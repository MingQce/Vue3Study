<template>
  <div class="person">
    ???
  </div>
</template>

<script setup lang="ts" name="Person">  //setup写在这里，会自动return,需要导入插件vite-vue-setup-extend，并在vite.config.js中import,才可以在标签中直接命名组件
  import {type PersonInter,type Persons} from '@/types'
  // let person:PersonInter = {id:'aw',name:'张三',age:60}  //定义一个符合person接口规范的person

  let personList:Persons = [
    {id:'1',name:'张三',age:60},
    {id:'2',name:'李四',age:60},
    {id:'3',name:'王五',age:60}
  ]
</script>

<style scoped>  /*scoped局部样式,将样式限定在当前页面*/
/*样式*/
.person{
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button{
  margin: 0 5px;
}
li{
  font-size: 20px;
}
</style>