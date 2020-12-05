<template>
  <div class="ordermain">
  	<headertop pagetitle="我的订单"></headertop>
  	<div class="orderinfo">
  			<img src="../../../src/pages/order/images/order.png"/>
  			<p>您需要先登录，再查看订单。<br />登陆...</p>
  	</div>
  </div>
</template>

<script>
  import headertop from '../../components/headertop.vue'
  export default {
    name: 'order',
    components: {
      headertop
    }
  }
</script>
	
<style>
	.orderinfo{
		margin: 0 auto;
		text-align: center;
		margin-top: 100px;
	}
	.orderinfo p{
		font-size: 14px;
		line-height: 30px;
	}
</style>
