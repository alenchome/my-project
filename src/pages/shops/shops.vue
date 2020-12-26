<template>
	<div class="shop">
    <shophead></shophead>
	  <div class="taps">
      <router-link to="/shops/goods">点餐</router-link>
      <router-link to="/shops/rating">评论</router-link>
      <router-link to="/shops/shopinfo">商家</router-link>
	  </div>
    <router-view></router-view>
	</div>
</template>

<script>
  import shophead from '../../components/shophead/shophead.vue'
	export default{
		name: 'shops',
    components: {
      shophead
    }
	}
</script>

<style scoped>
	.taps{
		width: 100%;
		margin-top: 10px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	.taps a{
		text-align: center;
    margin: 0 15px;
		line-height: 30px;
		font-size: 14px;
    color: #333333;
	}
	.taps .router-link-active{
		font-weight: 700;
		border-bottom: 2px solid #228B22;
	}
</style>
