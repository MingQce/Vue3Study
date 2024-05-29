<template>
  <div class="person">
    <h2>一辆{{car.brand}}车，价值{{car.price}}万</h2>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改汽车</button>
    <hr>
    <h2>当前求和为:{{sum}}</h2>
    <button @click="changeSum">sum+1</button>
  </div>
</template>

<script setup lang="ts" name="Person">  //setup写在这里，会自动return,需要导入插件vite-vue-setup-extend，并在vite.config.js中import,才可以在标签中直接命名组件
import {reactive, ref} from "vue";  //引入ref

//数据
let car = reactive({brand: '奔驰', price: 100})  //声明为"对象类型的响应式数据"，ref可以包裹基本数据和对象，reactive只可以包裹对象
// reactive不可以重新分配一个对象，否则会使其失去响应式数据的特性
let sum = ref(0)

//方法
function changePrice(){
  car.price += 10  //使用ref将对象变为响应式对象时，需要记得先.value，再从value中获取指定数据
}
function changeBrand(){
  car.brand = '宝马'
}
function changeCar(){
  // reactive
  Object.assign(car,{brand: '宝马', price: 120})  //想要直接修改整个对象，需要使用assign将后续多个参数的value传到第一个对象参数中去
  //ref
  // car.value = {brand: '奥拓',price: 1}
}
function changeSum(){
  sum.value += 1
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