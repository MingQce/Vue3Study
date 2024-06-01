<template>
  <!-- html -->

  <Person/>  <!--vue3允许多个根标签并列-->
  <!-- 通过ref获取的组件实例，无法查看详细数据 -->
</template>

<script lang="ts" setup name="App">
  import Person from "@/components/Person.vue";
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