<template>
  <div class="person">
    <ul>
      <li v-for="p in plist" :key="p.id">{{p.name}} -- {{p.age}}</li>
      <!--   :key=""给遍历的每一个值一个id，否则将默认将索引值(下标)作为id，可能导致数据错乱   -->
    </ul>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {defineProps,withDefaults} from 'vue'
  import {Persons} from "@/types";
  // 只接收list
  // defineProps(['plist'])  //接受从App直接传过来的数据a，标签可以直接用a，script内需要赋值接收
  //接收list并限制类型
  // defineProps<{plist:Persons}>()  //规范只接受一个符合Persons类型的list,<{list名字:list类型}>
  //接收list并限制类型和 必要性+指认默认值 加个问号+设置默认值引入withDefaults
  // noinspection TypeScriptValidateTypes
  withDefaults(defineProps<{plist?:Persons}>(),{
    plist:() => [{id: '04',name:'刘六',age:18}]  //不能直接写数组，得弄成一个返回函数
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