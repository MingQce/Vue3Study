<template>
  <div class="home">
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
  </div>
</template>

<script setup lang="ts" name="Home">
  import {onMounted} from "vue";
  import {useRouter} from "vue-router";

  const router = useRouter()  //调用路由器,router变为整个路由器的控制者

  // onMounted(()=>{  //页面编程式跳转
  //   setTimeout(()=>{
  //     router.push('/news')
  //   },3000)
  // })

</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>