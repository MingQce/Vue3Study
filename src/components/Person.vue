<template>
  <!-- html -->
  <div class="person">
    <h2>姓名:{{name}}</h2>
    <h2>年龄:{{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
// JS
export default {
  name:'Person',
  beforeCreate() {  //生命周期

  },
  setup(){  //
    // setup中无法使用this关键字，是undefined,Vue3
    // 数据
    // 使用let定义数据时，参数不是响应式的，无法被后续方法改变
    let name = '张三'
    let age = 18
    let tel = '1388888888'
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
    return {name, age, changeName, changeAge, showTel}  //返回值

  }
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