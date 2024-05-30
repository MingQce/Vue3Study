<template>
  <div class="person">
    <h2>姓名:{{person.name}}</h2>
    <h2>年龄:{{person.age}}</h2>
    <h2>汽车:{{person.car.c1}}、{{person.car.c2}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改全部车</button>
  </div>
</template>

<script setup lang="ts" name="Person">  //setup写在这里，会自动return,需要导入插件vite-vue-setup-extend，并在vite.config.js中import,才可以在标签中直接命名组件
import {reactive, watch} from "vue";
  let person = reactive({
    name:'张三',
    age:18 ,
    car:{
      c1:'奔驰',
      c2:'宝马'
    }
  })
  function changeName(){
    person.name += '~'
  }
  function changeAge(){
    person.age += 1
  }
  function changeC1(){
    person.car.c1 = '奥迪'
  }
  function changeC2(){
    person.car.c2 = '大众'
  }
  function changeCar(){
    person.car= {c1:'雅迪',c2:'艾玛'}
  }
  watch([() => person.name,() => person.car.c1]  //监视多个不同类型的数据，装入数组中
  ,(newValue,oldValue)=>{
    console.log("person变化了",newValue,oldValue)  //value是整个数组
  },{deep:true})

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