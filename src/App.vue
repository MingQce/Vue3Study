<template>
  <!-- html -->
  <Person/> <!--  判定为假时页面消失  -->
  <!--  <Person :plist="personList"/>-->
  <!--前缀加冒号就变为表达式,否则只是字符串-->
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