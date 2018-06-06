<template>
	<div class="icons">
		<swiper >
		  <swiper-slide v-for="(page,index) of pages" :key="index">
			<div class="icon" v-for="item of page" :key="item.id">
				<div class="icon-img">
				<img class="icon-img-content" :src="item.imgUrl"/>
				</div>
				<p class="icon-desc">{{item.desc}}</p>
			</div>
		  </swiper-slide>
		</swiper>
		

	</div>
</template>

<script>
	export default {
		name:'HomeIcons',
		data() {
			return {
				iconList: [{
					id:'001',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:"景点门票景点门票"
				},
				{
					id:'002',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:"踏青赏景"
				},{
					id:'003',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:"吃樱桃"
				},{
					id:'004',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:"吃面皮"
				},{
					id:'005',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:"喝菜豆腐"
				},{
					id:'006',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:"核桃馍"
				},{
					id:'007',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:"一日游"
				},{
					id:'008',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:"相亲大会"
				},{
					id:'009',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:"联系我么"
				}]
			}
		},
		computed: {
			pages () {
				const pages = []
				this.iconList.forEach((item,index) =>{
					const page = Math.floor(index/8)
					if(!pages[page]) {
						pages[page] = []
					}
					pages[page].push(item)
				})
				return pages
			}
		}
	}

</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.style'
	@import '~styles/mixins.style'
	.icons >>>.swiper-container
		height:0
		padding-bottom:50%
	.icon
		position:relative
		overflow:hidden
		float:left
		width:25%
		height:0
		padding-bottom:25%
	.icon-img
		position:absolute
		top:0
		left:0
		right:0
		box-sizing:border-box
		padding:.1rem
		bottom:.44rem
	    .icon-img-content
		height:100%
		display:block
		margin:0 auto
	.icon-desc
		position:absolute
		left:0
		right:0
		bottom:0
		height:.44rem
		line-height:.44rem
		text-align:center
		color:$darkTextColor
		ellipsis()
</style>