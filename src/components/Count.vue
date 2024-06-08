<template>
  <div class="count">
    <h2>当前求和为:{{sum}}</h2>
    <h3>欢迎来到:{{address}}</h3>
    <select v-model.number="n">  <!--   用户选择的数字,.number转为number类型   -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import {ref} from "vue";
import {useCountStore} from "@/store/count";
import {storeToRefs} from "pinia";
//打印reactive中的ref类型会被拆包，不需要.value
const countStore = useCountStore()  //保存count相关的store
const {sum,address} = storeToRefs(countStore)  //storeToRefs将store中的指定数据转为响应式,不影响方法;不推荐toRefs,直接用toRefs会导致整个store全变ref
let n = ref(1)

//方法
function add(){
  //修改方式一:直接修改
  // countStore.sum += n.value
  // countStore.address = '上海'
  //修改方式二:使用patch
  // countStore.$patch({
  //   sum:888,
  //   address:'上海'
  // })
  //修改方式三:使用actions
  countStore.increment(n.value)

}
function minus(){
  countStore.sum -= n.value
}

</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
select,button {
  margin: 0 5px;
  height: 25px;
}
</style>