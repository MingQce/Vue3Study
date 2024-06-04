<template>
  <ul class="news-list">
    <li>编号：{{query.id}}</li>
    <li>标题：{{query.title}}</li>
    <li>内容：{{query.content}}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
  import {useRoute} from "vue-router";
  import {toRefs} from "vue";
  let route = useRoute()  //接收传过来的参数
  let query = toRefs(route)  //使用toRefs方法，防止解构响应式对象过程中丢失响应式特性
</script>

<style scoped>
  .news-list {
    list-style: none;
    padding-left: 20px;
  }

  .news-list>li {
    line-height: 30px;
  }
</style>