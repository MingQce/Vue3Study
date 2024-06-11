<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category title="游戏列表">
        <!--   内容不会直接显示，需要插槽     -->
        <ul>
          <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
      </Category>
      <Category title="美食推荐">
        <!--    图片    -->
        <img :src="imageUrl" alt="">
      </Category>
      <Category title="热门景点">
        <!--    视频    -->
        <video :src="videoUrl" controls></video>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Category from "@/pages/09/Category.vue";
  import {reactive, ref} from "vue";
  let games = reactive([
    {id:'01',name:'英雄联盟'},
    {id:'02',name:'王者农药'},
    {id:'03',name:'红色警戒'},
    {id:'04',name:'斗罗大陆'}
  ])
  let imageUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jgp')
  let videoUrl = ref('')
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
.content {
  display: flex;  /*横向排开*/
  justify-content: space-evenly;    /*主轴对齐方式*/
}
img,video {
  width: 100%;
}
</style>