<template>
  <!-- html -->
  <h2 ref="title2">你好</h2>
  <button @click="showLog">点击输出h2</button>
  <Person ref="ren"/>  <!--vue3允许多个根标签并列-->
  <!-- 通过ref获取的组件实例，无法查看详细数据 -->
</template>

<script lang="ts" setup name="App">
  import Person from "@/components/Person.vue";
  import {ref} from 'vue'

  let title2 = ref()  //app和person中的title2相互独立，类似局部变量
  let ren = ref()
  function showLog(){
    console.log(ren.value)
  }
</script>

<style scoped>
/*样式*/
.app{
  background-color: #add;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style >