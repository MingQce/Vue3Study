<template>
  <div class="person">
    <h2>当前求和为:{{sum}}</h2>
    <button @click="add">sum+1</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue";
  //数据
  let sum = ref(0)
  //方法
  function add(){
    sum.value += 1
  }
  // vue3生命周期 创建→挂载→更新→销毁
  // vue是自下而上的，解析完所有子，父才算解析完,所以子会比父先创建

  // 创建 beforecreate created
  console.log('创建')

  // 挂载
  onBeforeMount(()=>{  //在挂载vue3调用onBeforeMount指定的函数
    console.log('挂载前')
  })
  //挂载完毕
  onMounted(()=>{
    console.log('挂载完毕')
  })
  //更新前
  onBeforeUpdate(()=>{
    console.log('更新前')
  })
  //更新完毕
  onUpdated(()=>{
    console.log('更新完毕')
  })
  //卸载前
  onBeforeUnmount(()=>{
    console.log('卸载前')
  })
  //卸载完毕
  onUnmounted(()=>{
    console.log('卸载完毕')
  })
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