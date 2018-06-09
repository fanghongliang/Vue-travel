<template>
	<div>
		<HomeHeader ></HomeHeader>
		<HomeSwiper :list="swiperList"></HomeSwiper>
		<HomeIcons :list="iconList"></HomeIcons>
		<HomeRecommend :list="recommendList"></HomeRecommend>
		<HomeWeekend :list="weekendList"></HomeWeekend>
	</div>
</template>

<script>
	import HomeHeader from './components/Header.vue'
	import HomeSwiper from './components/Swiper.vue'
	import HomeIcons from './components/Icons.vue'
	import HomeRecommend from './components/Recommend.vue'
	import HomeWeekend from './components/Weekend.vue'
	import axios from 'axios'
	export default {
		name:"home",
		components: {
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		data () {
			return {
				swiperList:[],
				iconList:[],
				recommendList:[],
				weekendList:[]
			}
		},
		methods : {
			getHomeInfo () {
				axios.get('/api/index.json')
					.then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc(res) {
				res = res.data
				if(res.ret && res.data) {
					const data = res.data
					this.swiperList = data.swiperList
					this.iconList = data.iconList
					this.recommendList = data.recommendList
					this.weekendList = data.weekendList
				}
			}
		},
		mounted () {
			this.getHomeInfo ()
		}
	}
</script>

<style>
	

</style>