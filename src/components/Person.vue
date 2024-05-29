<template>
  <!-- html -->
  <div class="person">
    <h2>一辆{{car.brand}}车，价值{{car.price}}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <h2>游戏列表: </h2>
    <ul>
      <li v-for="g in games" :key="g.id">
<!--   v-for循环，类似item in list  " : "很重要   -->
        {{g.name}}
      </li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
    <hr>
    <h2>测试:{{obj.a.b.c}}</h2>
  </div>
</template>

<script setup lang="ts" name="Person">  //setup写在这里，会自动return,需要导入插件vite-vue-setup-extend，并在vite.config.js中import,才可以在标签中直接命名组件
import {reactive} from "vue";  //引入reactive对象
//数据
let car = reactive({brand: '奔驰', price: 100})  //声明为响应式对象,reactive包裹后交由proxy函数进行代理
let games = reactive([
  {id:'g01',name:'01'},
  {id:'g02',name:'02'},
  {id:'g03',name:'03'}
])
let obj = {
  a: {
    b:{
      c: 666
    }
  }
}

function changePrice(){
  car.price += 10
}
function changeFirstGame(){
  games[0].name='001'
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