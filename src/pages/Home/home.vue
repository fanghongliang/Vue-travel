<template>
	<div>
		<HomeHeader></HomeHeader>
		<HomeSwiper></HomeSwiper>
		<HomeIcons></HomeIcons>
	</div>
</template>

<script>
	import HomeHeader from './components/Header.vue'
	import HomeSwiper from './components/Swiper.vue'
	import HomeIcons from './components/Icons.vue'
	export default {
		name:"home",
		components: {
			HomeHeader,
			HomeSwiper,
			HomeIcons
		}
	}
</script>

<style>
	

</style>