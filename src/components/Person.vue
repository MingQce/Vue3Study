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
  import {ref} from 'vue'  //引入ref，配置响应式数据
  let name = ref('张三')  //用ref包裹数据，即可声明为响应式数据
  let age = ref(18)  //下面的电话和地址只是字符串，而name和age变为了一个对象，
  let tel = '1388888888'
  let address = '北京'
  // 方法
  function changeName (){
    name.value = 'zhang-san'  //加上.value表示修改的是响应式数据name的值

  }
  function changeAge (){
    age.value += 1

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