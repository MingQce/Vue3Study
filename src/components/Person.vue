<template>
  <div class="person">
    <h1>情况三:监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名:{{person.name}}</h2>
    <h2>年龄:{{person.age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人</button>
  </div>
</template>

<script setup lang="ts" name="Person">  //setup写在这里，会自动return,需要导入插件vite-vue-setup-extend，并在vite.config.js中import,才可以在标签中直接命名组件
import {computed, reactive, ref, watch} from "vue";
  let person = reactive({
    name: "zhang-san",
    age: 18
  })
  function changeName(){
    person.name += '~'
  }
  function changeAge(){
    person.age += 1
  }
  function changePerson(){
    Object.assign(person,{name: 'li-si',age: 90})  //与ref不同，没法换成新对象，只是修改了原对象的属性
  }
  watch(person,(newValue,oldValue)=>{  //监视reactive是默认开启深度监视的
    console.log("person变化了",newValue,oldValue)
  },{})
</script>

<style scoped>
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