<template>
  <div class="person">
    <h1>情况一:监视【ref】定义的【基本类型】数据</h1>
    <h2>当前求和为:{{sum}}</h2>
    <button @click="changeSum">sum+1</button>
  </div>
</template>

<script setup lang="ts" name="Person">  //setup写在这里，会自动return,需要导入插件vite-vue-setup-extend，并在vite.config.js中import,才可以在标签中直接命名组件
  import {computed, ref, watch} from "vue";
  let sum = ref(0)
  function changeSum(){
    sum.value += 1
  }
  //监视
  const stopWatch = watch(sum, (newValue, oldValue)=>{  //不用.value
    //  写为stopWatch可以控制监视停止
    console.log('sum变化了',newValue,oldValue)
    if(newValue >= 10){
      stopWatch()
    }
  })  //传两个参数，监视对象和回调函数
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