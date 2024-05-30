<template>
  <div class="person">
    <h2>姓名:{{person.name}}</h2>
    <h2>年龄:{{person.age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script setup lang="ts" name="Person">  //setup写在这里，会自动return,需要导入插件vite-vue-setup-extend，并在vite.config.js中import,才可以在标签中直接命名组件
import {reactive, ref, toRefs} from "vue";
  let person = reactive({  //数据层次较深时推荐用reactive
    name:'张三',
    age:18
  })
  let{name,age} = toRefs(person)  //解构出name和age，把name和age包裹成新的对象类型响应式数据person
function changeName(){
    person.name += "~"
}
function changeAge(){
    person.age += 1
}
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