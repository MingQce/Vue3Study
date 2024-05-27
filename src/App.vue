<template>
  <!-- html -->

  <Person/>  <!--vue3允许多个根标签并列-->
</template>

<script lang="ts">
// JS
  import Person from "@/components/Person.vue";
  export default {
    name:'App',  //组件名
    components:{Person}  //注册组件

  }
</script>

<style>
/*样式*/
.app{
  background-color: #add;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>