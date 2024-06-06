<template>
  <div className="news">
    <!--  导航区  -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <button @click="showNewsDetail(news)">查看新闻</button>  <!--    在v-for内，可以获取到news参数点击按钮也能查看新闻    -->

        <RouterLink
            :to="{
              name:'xinwen_detail',
              query:{
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
  import {useRouter} from "vue-router";

  const newsList = reactive([
    {id:'01',title:'抗癌食物',content:'西蓝花'},
    {id:'02',title:'水果',content:'苹果'},
    {id:'03',title:'蔬菜',content:'菠菜'},
    {id:'04',title:'球',content:'篮球'}
  ])
  const router = useRouter()  //获取路由器

  interface NewsInter{  //限制传入的news对象
    id:string,
    title:string,
    content:string
  }

  function showNewsDetail(news:NewsInter){  //ts：news有个隐式的any类型需要
    router.push({  //跟to写法一样
      name:'xinwen_detail',
      query:{
        id:news.id,
        title:news.title,
        content:news.content
      }
    })  //直接通过push跳转
  }

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