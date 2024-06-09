<template>
  <div class="father">
    <h3>父组件</h3>
		<h4 v-show="toy">子给的玩具：{{ toy }}</h4>
    <!--  ref定义的响应式数据在模板中不需要.value  -->
		<!-- 自定义事件给,子组件Child绑定事件,只要send-toy事件被触发,saveToy就会被调用 -->
    <Child @send-toy="saveToy"/><!--  kebab-case写法  -->
  </div>
</template>
<!---->
<script setup lang="ts" name="Father">
  import Child from './Child.vue'
	import { ref } from "vue";
	// 数据
	let toy = ref('a')
	// 用于保存传递过来的玩具
	function saveToy(value:string){  //函数无参数时被调用会传递事件对象,传参时想不丢失事件对象需要$event(特殊占位符)
		console.log('saveToy',value)
		toy.value = value
	}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
	.father button{
		margin-right: 5px;
	}
</style>