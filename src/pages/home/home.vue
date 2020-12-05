<template>
  <div class="homemain">
    <headertop pagetitle="武汉市武昌区东亭黄鹂路东亭小区岳家嘴南路">
      <div class="left" slot="left">
      	<span class="iconfont icon-search"></span>
      </div>
      <div class="right" slot="right">
      	<span class="iconfont icon-usercenter"></span>
      </div>
    </headertop>
    <!--轮播开始-->
  	<div class="imgshow">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>外卖</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>美食</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>酒店</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>休闲</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>电影</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>打车</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>理发</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>红包</span>
            	</div>
            </div>
            <div class="swiper-slide">
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>充值</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>福利</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>周边/旅游</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>医疗</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>景点</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>美容</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>健身</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>学习</span>
            	</div>
            </div>
            <div class="swiper-slide">
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>洗浴</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>密室</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>酒吧</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>宠物</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>公益</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>上门</span>
            	</div>
            	<div class="mimglist">
            		<span class="iconfont icon-map"></span>
            		<span>缴费</span>
            	</div>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
  	</div>
  	<!--商家列表-->
  	<div class="shops">
  		<div class="nearshops">
  			<span class="iconfont icon-hot"></span>
  			附近商家
  		</div>
      <shoplist></shoplist>
  		</div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import headertop from '../../components/headertop.vue'
  import shoplist from '../../components/shoplist/shoplist.vue'

  export default {
    mounted() {
      //创建swiper 对象
      new Swiper('.swiper-container',{
        loop: true,
        pagination: {
              el: '.swiper-pagination',
           }
      })
    },
    name: 'home',
    components: {
      headertop,
      shoplist
    }
  }
</script>

<style scoped>
	.homemain{
		background-color: #f0efed;
		height: 100%;
		overflow: hidden;
		padding-bottom: 50px;
	}
	.imgshow{
		height: 180px;
    background-color: white;
	}
	.mimglist{
		text-align: center;
		float: left;
		width: 25%;
		height: 50px;
		margin: 15px 0;
	}
	.mimglist span{
		display: block;
		margin: 0 auto;
	}
  .mimglist span.iconfont{
  	vertical-align: middle;
  }
	.mimglist span:first-child{
		color: white;
		background-color: orange;
		border-radius: 15px;
		width: 30px;
		height: 30px;
		font-size: 24px;
	}
	.mimglist span:last-child{
		margin-top: 10px;
	}
  .swiper-container{
    height: 180px;
  }

  .shops{
  	margin-top: 15px;
    background-color: white;
    padding: 5px 10px;
  }
  .nearshops {
  	height: 30px;
  	line-height: 30px;
  	width: 100%;
  }
  .nearshops span{
  	font-size: 22px;
  	color: coral;
  }
  
</style>
