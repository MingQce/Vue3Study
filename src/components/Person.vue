<template>
  <div class="person">
    <h2>需求:水温达到60度或水位达到80cm时，给服务器发送请求</h2>
    <h2>当前水温:{{temp}}℃</h2>
    <h2>当前水位:{{height}}cm</h2>
    <button @click="changeTemp">修改水温</button>
    <button @click="changeHeight">修改水位</button>
  </div>
</template>

<script setup lang="ts" name="Person">  //setup写在这里，会自动return,需要导入插件vite-vue-setup-extend，并在vite.config.js中import,才可以在标签中直接命名组件
  import {ref,watchEffect} from "vue";
  let temp = ref(10)
  let height = ref(0)

  function changeTemp(){
    if(temp.value < 100)
    temp.value += 10
  }

  function changeHeight(){
    height.value += 10
  }
  //  watch实现
  // watch([temp,height],(newValue)=>{
  //   //获取最新数据中的水温和水位
  //   let [newTemp,newHeight] = newValue
  //   if(newTemp >= 60 || newHeight >=80){
  //     console.log('达成需求')
  //   }
  // })
  watchEffect(()=> {  //watchEffect实现,响应式地追踪其依赖
    // 不用明确指出监视的数据(函数中用到哪些属性，就监视哪些属性)
    if (temp.value >= 60 || height.value >= 80) {
      console.log('达成需求')
    }
  })
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