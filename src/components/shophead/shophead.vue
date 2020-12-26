<template>
  <section>
    <div class="shophead">
    	<div class="headtop">
    		<div class="goback" @click="$router.back()"> <span class="iconfont icon-arrow-left"></span></div>
    		<div class="right">
    			<span class="iconfont icon-search"></span>
    			<span class="iconfont icon-favorites"><b>关注</b></span>
    			<span class="more"> ···
    				<div class="others onshow">
    					<span class="iconfont icon-cart-Empty"><b>购物车</b></span>
    					<span class="iconfont icon-share"><b>分享商家</b></span>
    				</div>
    			</span>
    		</div>
    	</div>
    	<div class="headinfo"  @click="isshow=!isshow">
    		<div class="shoptitle">
    			<div class="shopname">
    				<h3 class="ellipsis">黑皮牛杂</h3>
    				<p class="ellipsis">蓝骑士专送 约30分钟 · 月售193 · 可自取</p>
    			</div>
    			<div class="shoplogo">
    				<img src="../../../build/logo.png" width="60" height="60"/>
    			</div>
    		</div>
    		<div class="packet">
    			<span class="vip"><small>￥</small>10 元无门槛</span> <span class="vouchers"><small>￥</small>12 元</span>
    		</div>
    		<div class="minus">
    			<span>39减30 | 98减70 | 159减128</span><span>天天神券</span><span>0.02折起</span>
    			<p class="ellipsis">公告：本店承诺：所有食材每日更新！坚持三不原则：所有食材不久放，所有烧烤不炸，所有炒菜不用微波炉转一圈出餐！现做现卖！如需快速出餐，请提前点餐！</p>
    		    <div class="moreinfo iconfont icon-arrow-down"></div>
    		</div>
    	</div>
    </div>
    <div class="blackbg" :class="{'btm-show': isshow }">
      <div class="bottominfo">
        <div class="bottomtitle">
          <h3>黑皮牛杂<span class="iconfont icon-close" @click="isshow=!isshow"></span></h3>
        </div>
        <div class="shopvouchers">
          <h4>红包</h4>
              <ul>
                <li>
                  <div class="ticketprice">￥8</div>
                  <div class="ticketinfo">
                    <h5>店铺红包</h5>
                    <p>全场无门槛，2020.12.26 到期</p>
                  </div>
                  <div class="ticketget">
                    <p>￥5无门槛红包</p>
                    <span>兑换</span>
                  </div>
                </li>
                <li>
                  <div class="ticketprice">￥6</div>
                  <div class="ticketinfo">
                    <h5>店铺红包</h5>
                    <p>无门槛，2020.12.26 到期</p>
                  </div>
                  <div class="ticketget">
                    <p>￥5无门槛红包</p>
                    <span>兑换</span>
                  </div>
                </li>
                <li>
                  <div class="ticketprice">￥4</div>
                  <div class="ticketinfo">
                    <h5>店铺红包</h5>
                    <p>无门槛，2020.12.26 到期</p>
                  </div>
                  <div class="ticketget">
                    <p>￥5无门槛红包</p>
                    <span>兑换</span>
                  </div>
                </li>
              </ul>
        </div>
        <div class="activity">
        	<h4>优惠活动</h4>
        	<p><span>满减</span> 满17减16，满55减25，满100减42</p>
        	<p><span>特价</span> 特价商品0.1元气</p>
        	<p><span>奖励</span> 30内下5单得￥5店铺红包</p>
        </div>
        <div class="notice">
        	<h4>公告</h4>
        	<p>公告：本店承诺：所有食材每日更新！坚持三不原则：所有食材不久放，所有烧烤不炸，所有炒菜不用微波炉转一圈出餐！现做现卖！如需快速出餐，请提前点餐！</p>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  export default {
    name: 'shophead',
    data: function(){
      return {
        isshow: true
      }
    }
  }
</script>

<style scoped>
  .shophead{
  	height: 220px;
  	width: 100%;
  	color: white;
  }
  .shophead::before{
  	content: '';

  	background-image: url(../../../static/images/shopbg.png) ;
  	background-size: 100%;
  	background-repeat: no-repeat;
  	opacity: .8;
  	position: absolute;
  	height: 300px;
  	width: 100%;
  	z-index: -1;
  }
    .headtop{
    	display: flex;
    	flex-direction: row;
    	flex-wrap: nowrap;
    	justify-content: space-between;
    	height: 60px;
    	line-height: 60px;
    }
    .headtop span{
    	font-size: 22px;
    	font-weight: 500;
    	padding-left: 6px;
    }
    .headtop b{
    	vertical-align: 5%;
    	font-size: 13px;
    	padding-left: 2px;
    }
    .right .more{
    	padding-right: 10px;
    	position: relative;
    }
    .right .onshow{
    	display: none;
    }
    .right .others{
    	position: absolute;
    	top: 30px;
    	right: 10px;
    	margin-left: -100px;
    	background-color: rgba(127,127,127,.8);
    	font-size: 12px;
    	border-radius:3px ;
    	line-height: 30px;
    }
    .others span{
    	display: block;
    	padding-right: 6px;
    }
  .headinfo{
  	width: 92%;
  	margin: 0 auto;
  	background-color: whitesmoke;
  	color: #333;
  	border-radius: 10px;
  	padding: 10px 0;
  }
  .headinfo .shoptitle{
  	display: flex;
  	flex-direction: row;
  	flex-wrap: nowrap;
  	justify-content: space-around;
  	align-items: center;
  }
  .shoptitle .shopname{
  	margin-left: 10px;
  	flex-grow: 1;
  }
  .shoptitle .shopname h3{
  	font-weight: bold;
  	font-size: 16px;
  	line-height: 25px;
  }
  .shoptitle .shopname p{
  	font-size: 12px;
  	line-height: 20px;
  }
  .shoptitle .shoplogo{
  	width: 60px;
  	height: 60px;
  	margin: 0 10px;
  	border: 1px solid #ccc;
  	border-radius: 3px;
  }
    .packet {
    	padding: 0 10px;
    	color: white;
    	margin: 5px 0;
    }
    .packet span{
    	display: inline-block;
    	background-color: red;
    	border-radius:2px;
    	padding: 5px;
    	text-align: center;
    	font-size: 12px;
    }
    .packet span small{
    	font-size: 11px;
    }
    .minus{
    	padding: 0 10px;
    	position: relative;
    }
    .minus span{
    	display: inline-block;
    	color: red;
    	border: 1px solid red;
    	border-radius: 2px;
    	padding: 2px 3px;
    	margin-right: 5px;
    	font-size: 11px;
    }
    .minus  p{
    	font-size: 11px;
    	line-height: 25px;
    }
    .minus .moreinfo{
    	position: absolute;
    	right: 3px;
    	top: 3px;
    }
  .blackbg{
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.5);
  }
  .bottominfo{
  	position: fixed;
  	bottom: 0;
  	padding: 10px;
  	background-color: whitesmoke;
  	border-top-left-radius: 15px;
  	border-top-right-radius: 15px;
  }
  .btm-show{
  	display: none;
  }
  .bottomtitle{
  	height: 35px;
  	line-height: 35px;
  }
  .bottomtitle h3{
  	font-size: 16px;
  	text-align: center;
  	font-weight: bold;
  }
  .bottominfo h4{
  	font-size: 12px;
  	font-weight: bold;
  	line-height: 25px;
  }
  .bottominfo h5{
  	font-size: 14px;
  	font-weight: bold;
  	line-height: 25px;
  }
  .bottomtitle h3 span{
  	display: inline-block;
  	float: right;
  	color: #CDCDCD;
  	font-size: 22px;
  	font-weight: normal;
  }
  .shopvouchers li{
  	background-color: white;
  	margin: 8px 0;
  	border-radius: 5px;
  	display: flex;
  	flex-direction: row;
  	flex-wrap: nowrap;
  	align-items: center;
  	justify-content: space-around;
  	padding: 10px;
  }
  .shopvouchers li .ticketprice{
  	font-size: 16px;
  	font-weight: bold;
  	color: red;
  }
  .shopvouchers li .ticketinfo{
  	flex-grow: 1;
  	margin-left: 15px;
  }
  .shopvouchers li .ticketinfo p, .shopvouchers li .ticketget p{
  	font-size: 11px;
  	line-height: 20px;
  }
  .shopvouchers li .ticketget{
  	text-align: center;
  }
  .shopvouchers li .ticketget span{
  	display: inline-block;
  	background-color: crimson;
  	color: white;
  	font-size: 12px;
  	padding: 5px 10px;
  	border-radius: 10px;
  }
  .activity, .notice{
  	margin-top: 15px;
  	line-height: 18px;
  	font-size: 12px;
  }
  .activity p{
  	margin-top: 3px;
  }
  .activity span{
  	padding: 1px 5px;
  	border: 1px solid red;
  	border-radius: 5px;
  	margin-right: 10px;
  	font-size: 11px;
  }
</style>
