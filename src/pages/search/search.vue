<template>
  <div class="searchmain">
  	<headertop pagetitle="搜索"></headertop>
  	<div class="search">
  		<div class="searchbox">
  			<span class="iconfont icon-search"></span>
  			<input type="text" name="" id="" value="" placeholder="请输入输入店铺、商品名"/>
  			<span class="searchbtn">搜索</span>
  		</div>
  	</div>
  </div>
</template>

<script>
  import headertop from '../../components/headertop.vue'
  export default {
    name: 'search',
    components: {
      headertop
    }
  }
</script>

<style scoped>
	.search{
		height: 40px;
		margin: 20px 0;
		padding: 0 10px;
	}
	.searchbox {
		height: 40px;
		line-height: 40px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}
	.searchbox span.icon-search, .searchbox input{
		background-color:#f8f8f8 ;
		text-indent: 10px;
	}
	.searchbox span.icon-search{
		display: inline-block;
		font-size: 25px;
	}
	.searchbox input{
		display: block;
		height: 40px;
		line-height: 40px;
		border: 0;
		padding: 0;
		margin: 0;
		flex-grow: 1;
	}
	.searchbox .searchbtn{
		margin-left: 10px;
	}
	.searchbtn{
		font-weight: bold;
	}
</style>
