<template>
  <div class="person">
<!--  v-bind单向绑定数据只从前端流向页面，v-model双向绑定  -->
    性:<input type="text" v-model="firstName"><br>
    名:<input type="text" v-model="lastName"><br>
    <button @click="changeFullName">修改全名</button><br>
    全名<span>{{fullName}}</span><br>
  </div>
</template>

<script setup lang="ts" name="Person">  //setup写在这里，会自动return,需要导入插件vite-vue-setup-extend，并在vite.config.js中import,才可以在标签中直接命名组件
import {computed, ref} from "vue";
  let firstName = ref('zhang')
  let lastName = ref('san')
//  这样定义是只读的
//   let fullName = computed(() => {  //使用计算属性
//     return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value  //计算后缓存结果，重复使用计算属性不会多次计算
// })
//computed计算属性实际上也是ref响应式数据
//这样定义的fullName是一个计算属性，可读可写
let fullName = computed({
  get(){
    return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
  },
  set(val){
    const [str1,str2] = val.split('-')
    firstName.value = str1
    lastName.value = str2
  }
})

  function changeFullName() {  //使用只读定义computed时不能修改值，要写get和set
    fullName.value = "li-si"
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
li{
  font-size: 20px;
}
</style>