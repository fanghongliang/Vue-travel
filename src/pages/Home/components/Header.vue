<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon" >&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
		输入搜索内容
	    </div>
	    <router-link to='/city'>
			<div class="header-right">
				{{this.city}}
				<span class="iconfont">&#xe6aa;</span>
			</div>
	    </router-link>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		name:'HomeHeader',
		computed : {
			...mapState(['city'])
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.style'
	.header
	  display: flex
	  line-height: $headerHeight
	  background:$bgColor
	  color:#fff
	  .header-left
       
	    float: left
	    .back-icon
	       text-align:center
	       font-size:.4rem
	  .header-input
	    flex: 1
	    line-height: .64rem
	    margin-top: .1rem
	    margin-bottom: .1rem
	    margin-left:.2rem
	    padding-left:.2rem
	    background: #fff
	    border-radius: .1rem
	    color:#ccc   
	.header-right
	    min-width: 1.04rem
	    padding: 0 .1rem
	    float: right
	    text-align:center
	    color:#fff
	    .arrow-icon
	    	margin-left:-.04rem
	    	font-size.24rem
</style>