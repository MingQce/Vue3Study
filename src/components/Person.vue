<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>  <!--  不能用id，因为是全局的，假设App.vue中也有id为title2的元素，会优先使用App.vue中的  -->
    <h3>东城</h3>
    <button @click="showLog">点我输出h2这个元素</button>
  </div>
</template>

<script setup lang="ts" name="Person">  //setup写在这里，会自动return,需要导入插件vite-vue-setup-extend，并在vite.config.js中import,才可以在标签中直接命名组件
  import {ref} from "vue";
  let title2 = ref()  //创建一个title2用于存储ref标记的内容
  let a = ref(0)
  let b = ref(1)
  let c = ref(2)

  function showLog(){
    console.log(title2.value)
  }
  defineExpose({a,b,c})  //声明父类可以调用的数据
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