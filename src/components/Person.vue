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
    person.car= {c1:'雅迪',c2:'艾玛'}  //因为car也是一个对象，所以不用assign
  }
  watch(() => person.car  //只想监视某个值时，需要包装成一个getter函数，返回想要监视的值
  ,(newValue,oldValue)=>{
    console.log("person变化了",newValue,oldValue)  //包装成getter函数监视整个对象时，只能监视到对象的变化，无法监视对象中的值，如监视car，只修改c1,c2无响应
  },{deep:true})  //添加深度监视后，修改c1,c2可以发现

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