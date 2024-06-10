<template>
	<div class="child">
		<h3>子组件</h3>
		<GrandChild v-bind="$attrs" :a="a"/>
    <!--  $attrs从子这里中转将父传给子且子未接收的数据再传给孙  -->
	</div>
</template>

<script setup lang="ts" name="Child">
	import GrandChild from './GrandChild.vue'

  defineProps(['a'])  //如果子在这里接收的话就不会再传给孙
</script>

<style scoped>
	.child{
		margin-top: 20px;
		background-color: skyblue;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>