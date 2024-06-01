<template>
  <!-- html -->
  <Person/>
  <!--  <Person :plist="personList"/>-->
  <!--前缀加冒号就变为表达式,否则只是字符串-->
</template>

<script lang="ts" setup name="App">
  import Person from "@/components/Person.vue";
  import {reactive} from "vue";
  import {Persons} from '@/types'
  let personList =reactive<Persons>([  //reactive可以用泛型规范数据
    {id:'01',name:'张三',age:18},
    {id:'02',name:'李四',age:20},
    {id:'03',name:'王五',age:21}
  ])
  console.log(personList)
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