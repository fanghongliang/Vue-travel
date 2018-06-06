<template>
	<div class="wrapper">
	<swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
    	<img class="swiper-img" :src="item.imgUrl" />
    </swiper-slide>
    
    
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
</div>
</template>

<script>
	export default {
		name:'HomeSwiper',
		data () {
			return {
				swiperOption: {
					pagination:'.swiper-pagination',
					loop:true
				},
				swiperList: [{
					id:'0001',
					imgUrl: "http://img1.qunarzz.com/piao/fusion/1805/77/f63bd04dd5319602.jpg_750x200_6ba8e0ca.jpg"
				},{
					id:'0002',
					imgUrl: "http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg"
				}]
			}
		}
	}

</script>

<style lang='stylus' scoped>
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff !important
	.swiper-img
		width:100%
	.wrapper
		overflow: hidden
		width: 100%
		height:0
		padding-bottom:26.7%
		background:#eee
		
		.swiper-img
			width:100%
</style>