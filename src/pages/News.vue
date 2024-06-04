<template>
  <div className="news">
    <!--  导航区  -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!--  要注意这里是子级路由，需要从父级路径开始写  -->
        <!--  使用params参数,字符串写法-->
        <!--<RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{news.title}}</RouterLink>-->
        <RouterLink
            :to="{
              name:'xinwen_detail',  //params这里不能用path，会被忽略
              params:{  //坑：不能在里面塞对象和数组,占位了以后不能不传(丢失必要参数,可加?解决)
                id:news.id,
                title:news.title,
                content:news.content
              }
            }"
        >
          {{news.title}}
        </RouterLink>
      </li>
    </ul>
    <!--  展示区  -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import {reactive} from "vue";

  const newsList = reactive([
    {id:'01',title:'抗癌食物',content:'西蓝花'},
    {id:'02',title:'水果',content:'苹果'},
    {id:'03',title:'蔬菜',content:'菠菜'},
    {id:'04',title:'球',content:'篮球'}
  ])
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  /*list-style: none;*/
  padding-left: 10px;
}
.news li::marker{
  color: #64967E;
}
.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>