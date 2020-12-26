<template>
  <div class="shopstory">
  	<div class="delivery">
  		<h4>配送信息</h4>
  		<p><span>蜂鸟配送</span>由商家配送提供配送，距离1000米</p>
  		<p>配送费用 ￥4</p>
  	</div>
  	<div class="shop-service">
  		<h4>活动与服务</h4>
  		<p><span>首单</span>新用户下单立减17元（不与其他活动同享）</p>
  		<p><span>满减</span>满39减15，满65减35</p>
  		<p><span>特价</span>【立减19.5】欢乐小食谱</p>
  		<p><span>特价</span>【立减19.5】欢乐小食谱</p>
  		<p><span>特价</span>【立减19.5】欢乐小食谱</p>
  		<p><span>特价</span>【立减19.5】欢乐小食谱</p>
  		<p><span>特价</span>【立减19.5】欢乐小食谱</p>
  		<p><span>特价</span>【立减19.5】欢乐小食谱</p>
  	</div>
  </div>
</template>

<script>
  export default {
    name: 'shopinfo'
  }
</script>

<style scoped>
  .shopstory{
  	font-size: 11px;
  	padding: 10px;
  	margin-top: 10px;
  }
  .shopstory h4{
  	font-size: 13px;
  	font-weight: bold;
  	line-height: 40px;
  }
  .shopstory p{
  	line-height: 20px;
  }
  .delivery p span{
  	color: deepskyblue;
  	margin-right: 10px;
  }
  .shop-service p span{
  	padding: 0 3px;
  	border: 1px solid orange;
  	margin-right: 5px;
  	color: orangered;
  }
</style>
