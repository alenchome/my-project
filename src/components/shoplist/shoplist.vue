<template>
	<section>
		<div class="shoplist" v-for="(shop,index) in shops" :key='index'>
			<div class="shoplist-item">
					<div class="shoplist-left">
						<img src="../../../src/pages/home/images/11.png" width="100%" height="100%"/>
					</div>
					<div class="shoplist-right">
		        <h4 class="ellipsis">{{shop.name}}</h4>
		        <p><span>评分：{{shop.rating}}</span><span>月售{{shop.recent_order_num}}单</span><p>
		        <p>￥{{shop.float_minimum_order_amount}}起送 | {{shop.piecewise_agent_fee.tips}}</p>
		        <div class="activity">
		        	<p class="ellipsis">{{shop.promotion_info}}</p>
		        	<p class="ellipsis">{{shop.description}}</p>
		        </div>
					</div>
				</div>
		</div>
	</section>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    mounted() {
      this.$store.dispatch('getshops')
    },
    computed:{
      ...mapState(['shops'])
    },
    name: 'shoplist'
  }
</script>

<style scoped>
  .shoplist {
  	width: 100%;
    border-bottom:1px solid #CDCDCD ;
  }
  .shoplist .shoplist-item{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: left;
    margin: 20px 0;
  }
  .shoplist-left{
    width: 25%;
    flex-shrink:0
  }
  .shoplist-left img{
  	border-radius: 5px;
  }
  .shoplist-right{
  	margin-left: 20px;
  	overflow: hidden;
  	font-size: 12px;
  }
  .shoplist-right h4{
  	font-size: 16px;
  	font-weight: bold;
  	margin-bottom: 8px;
  }
  .shoplist-right p{
  	line-height: 20px;
  }
  .shoplist-right p span:first-child{
  	margin-right: 20px;
  }
  .shoplist-right .activity{
  	margin-top: 8px;
  	font-size: 13px;
  }
</style>
