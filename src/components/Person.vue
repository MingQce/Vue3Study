<template>
  <!-- html -->
  <div class="person">
    <h2>姓名:{{name}}</h2>
    <h2>年龄:{{age}}</h2>
    <h2>地址:{{address}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<!--<script lang="ts">-->
<!--// JS-->
<!--export default {-->
<!--  name:'Person',-->
<!--}-->
<!--&lt;!&ndash;</script>&ndash;  -->
<!--需要导入插件vite-vue-setup-extend，并在vite.config.js中import,才可以在标签中直接命名组件，省略注释部分-->

<script setup lang="ts" name="Person">  //setup写在这里，会自动return
  let name = '张三'
  let age = 18
  let tel = '1388888888'
  let address = '北京'
  // 方法
  function changeName (){
    name = 'zhang-san'  //确实改变了name的值，但无法传到前端

  }
  function changeAge (){
    age += 1

  }
  function showTel(){
    alert(tel)
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
</style>