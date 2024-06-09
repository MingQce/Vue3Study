<template>
  <div class="father">
    <h3>父组件</h3>
		<h4>汽车：{{ car }}</h4>
		<h4 v-show="toy">子给的玩具：{{ toy }}</h4><!--  仅在toy存在时展示  -->
		<Child :car="car" :sendToy="getToy"/><!--  父亲把车传递给儿子,并接受儿子传递给父亲的玩具  -->
    <!-- 传递sendToy方法，回调函数为getToy -->
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import {ref} from 'vue'
	// 数据
	let car = ref('奔驰')
	let toy = ref('')
	// 方法
	function getToy(value:string){  //定义回调函数，将儿子给的toy的value存到父亲的toy中
		toy.value = value
	}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>