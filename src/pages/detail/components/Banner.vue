<template>
<div>
	<div class="banner" @click="handleBannerClick">
		<img class="banner-img" src="//img1.qunarzz.com/sight/p0/201301/16/3cee3a7bd760fe6493835fbb.jpg_600x330_8b56bb82.jpg">
		<div class="banner-info">
			<div class="banner-title">石门栈道风景区</div>
			<div class="banner-number">
				<span class="iconfont banner-icon">&#xe63b;</span>7
			</div>
		</div>
	</div>
	<common-gallary 
		:imgs="imgs" 
		v-show="showGallary"
		@close="handleGalleryClose">			
	</common-gallary>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
	export default {
		name:'detailBanner',
		data() {
			return {
				showGallary:false,
				imgs:['http://img1.qunarzz.com/sight/p0/1712/ae/ae9b0b48c262315aa3.img.jpg_350x240_24f7358e.jpg','http://img1.qunarzz.com/sight/p0/1712/ae/ae9b0b48c262315aa3.img.jpg_350x240_24f7358e.jpg']
			}
		},
		components: {
			CommonGallary
		},
		methods: {
			handleBannerClick() {
				this.showGallary = true
			},
			handleGalleryClose() {
				this.showGallary = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.banner
		position:relative
		overflow:hidden
		height:0
		padding-bottom:55%
		.banner-img
			width:100%
		.banner-info
			background-image:linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8))
			display:flex
			position:absolute
			left:0
			right:0
			bottom:0
			line-height:.6rem
			color:#fff
			.banner-title
				flex:1
				font-size:.32rem
				padding:0 .2rem
			.banner-number
				margin-top:.14rem
				padding: 0 .4rem
				height: .32rem
				line-height:.32rem
				border-radius:.2rem
				background:rgba(0,0,0,.8)
				font-size:.24rem
				.banner-icon
					font-size:.24rem

</style>