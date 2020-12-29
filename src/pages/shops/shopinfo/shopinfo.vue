<template>
  <div class="shopstory">
  	<div class="delivery">
  		<h4>配送信息</h4>
  		<p><span>{{shopinfo.description}}</span>由商家配送提供配送，距离{{shopinfo.distance}}</p>
  		<p>配送费用 ￥{{shopinfo.deliveryPrice}}</p>
  	</div>
  	<div class="shop-service">
  		<h4>活动与服务</h4>
  		<p v-for="(items , index) in shopinfo.supports" :key='index'><span :class="color[items.type]">{{items.name}}</span>{{items.content}}</p>
  	</div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'shopinfo',
    data: function(){
      return {
        color: ['green','red','orange']
      }
    },
    computed: {
      ...mapState(['shopinfo'])
    }
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
  	margin-right: 5px;
    border-radius: 2px;
  }
  .green{
    border: 1px solid green;
    color: green;
  }
  .red{
    border: 1px solid red;
    color: red;
  }
  .orange{
    border: 1px solid orange;
    color: orange;
  }
</style>
