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
	import {mapState} from 'vuex'

	axios.defaults.baseURL = "http://127.0.0.1:3000"
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
				lastCity:'',
				swiperList:[],
				iconList:[],
				recommendList:[],
				weekendList:[]
			}
		},
		computed : {
			...mapState(['city'])
		},
		methods : {
			getHomeInfo () {
				axios.post('/login', {"userName": "约翰19"})
					.then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc(res) {
				res = res.data
				console.log('获得数据', res)
				// if(res.ret && res.data) {
				// 	const data = res.data
				// 	this.swiperList = data.swiperList
				// 	this.iconList = data.iconList
				// 	this.recommendList = data.recommendList
				// 	this.weekendList = data.weekendList
				// }
			}
		},
		mounted () {
			this.lastCity = this.city
			this.getHomeInfo ()
		},
		activated () {
			if(this.lastCity !== this.city) {
			this.lastCity = this.city
			this.getHomeInfo ()
			}
		}
	}
</script>

<style>
	

</style>