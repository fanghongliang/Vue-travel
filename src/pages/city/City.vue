<template>
	<div>
		<CityHeader></CityHeader>
		<CitySearch></CitySearch>
		<CityList :cities="cities" :hot="hotCities"></CityList>
		<CityAlphabet :cities="cities"></CityAlphabet>
	</div>
</template>

<script>
	import axios from 'axios'
	import CityHeader from './components/Header.vue'
	import CitySearch from './components/Search.vue'
	import CityList from './components/List.vue'
	import CityAlphabet from './components/Alphabet.vue'
	export default {
		name:'City',
		components : {
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		data () {
			return {
				cities: {},
				hotCities: []
			}
		},
		methods : {
			getCityInfo () {
				axios.get('api/city.json')
					.then(this.handleGetCityInfoSucc)
			},
			handleGetCityInfoSucc (res) {
				res = res.data
				if(res.data && res.ret) {
					const data = res.data
					this.cities =data.cities
					this.hotCities = data.hotCities
				}  
			}
		},
		mounted () {
			this.getCityInfo()
		}
	}
</script>

<style lang="stylus" scoped>
	
</style>