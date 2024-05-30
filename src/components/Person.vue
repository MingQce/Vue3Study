<template>
  <div class="person">
    <h1>情况二:监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名:{{person.name}}</h2>
    <h2>年龄:{{person.age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人</button>
  </div>
</template>

<script setup lang="ts" name="Person">  //setup写在这里，会自动return,需要导入插件vite-vue-setup-extend，并在vite.config.js中import,才可以在标签中直接命名组件
  import {computed, ref, watch} from "vue";
  let person = ref({
    name: "zhang-san",
    age: 18
  })
  function changeName(){
    person.value.name += '~'
  }
  function changeAge(){
    person.value.age += 1
  }
  function changePerson(){
    person.value = {name: 'li-si',age: 91}
  }
  watch(person,(newValue,oldValue)=>{  //监视的是对象的地址值,若想监视对象内部属性的变化，需要手动开启深度监视
    //若只修改属性，则newValue和oldValue会是同一个值，若修改对象则是不同的值
    console.log("变化了",newValue)
  },{deep:true,immediate: true})//  配置对象:开启深度监视（否则只监视修改的值),立即监视(初始化时便开始监视)

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