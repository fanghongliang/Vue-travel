<template>
	<div>
		<HomeHeader></HomeHeader>
		<HomeSwiper></HomeSwiper>
		<HomeIcons></HomeIcons>
		<HomeRecommend></HomeRecommend>
		<HomeWeekend></HomeWeekend>
	</div>
</template>

<script>
	import HomeHeader from './components/Header.vue'
	import HomeSwiper from './components/Swiper.vue'
	import HomeIcons from './components/Icons.vue'
	import HomeRecommend from './components/Recommend.vue'
	import HomeWeekend from './components/Weekend.vue'
	export default {
		name:"home",
		components: {
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		}
	}
</script>

<style>
	

</style>