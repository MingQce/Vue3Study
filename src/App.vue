<template>
  <div class="app">
    <Header/>
  <!--  导航区  -->
    <div class="navigate">
      <!--    active-class="active"激活时使用样式   -->
      <!--    路由默认使用push，可以跳转并返回    -->
      <!--   可以修改为replace,变为无法返回   -->
      <!--   RouterLink本质是a标签   -->
      <RouterLink to="/" active-class="active">首页</RouterLink>  <!--   to的字符串写法，路径跳转   -->
      <RouterLink :to="{name:'xinwen'}" active-class="active">新闻</RouterLink>  <!--   to的字符串写法，名字跳转   -->
      <RouterLink :to="{path:'/about'}" active-class="active">关于</RouterLink>  <!--   to的对象写法,可以带参数、   -->
    </div>
  <!--  展示区  -->
    <div class="main-content">
      <RouterView></RouterView>  <!--   需要引入routerView才能当前active的route   -->
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
  import {RouterView,RouterLink} from "vue-router";
  import Header from "@/components/Header.vue";

</script>

<style>
/* App */
.title {
  text-align: center;
  word-spacing: 5px;
  margin: 30px 0;
  height: 70px;
  line-height: 70px;
  background-image: linear-gradient(45deg, gray, white);
  border-radius: 10px;
  box-shadow: 0 0 2px;
  font-size: 30px;
}
.navigate {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}
.navigate a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: gray;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
}
.navigate a.active {
  background-color: #64967E;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  font-family: 微软雅黑;
}
.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}
</style>