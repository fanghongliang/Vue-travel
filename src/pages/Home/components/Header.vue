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
	export default {
		name:'HomeHeader',
		props:{
			city:String
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
	    width: 1.24rem
	    float: right
	    text-align:center
	    color:#fff
</style>