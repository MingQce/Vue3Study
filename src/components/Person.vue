<template>
  <div class="person">
    <h2>当前求和为:{{sum}},放大十倍后{{bigSum}}</h2>
    <button @click="add">sum+1</button>
    <hr>
    <img v-for="(dog,index) in dogList" :src="dog" :key="index">
    <button @click="getDog">加狗</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  //使用hooks引入与【求和】和【狗】相关的数据和函数
  import useSum from "@/hooks/useSum";
  import useDog from "@/hooks/useDog";
  const {sum,add,bigSum} = useSum()
  const {dogList,getDog} = useDog()

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
img{
  height: 100px;
  margin-left: 10px;
}
</style>