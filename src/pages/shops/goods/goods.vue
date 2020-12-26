<template>
  <section>
    <div class="foods">
    	<div class="foodcategrys">
    		<ul>
    			<li><span></span>优惠</li>
    			<li class="check"><span></span>家常菜</li>
    			<li><span></span>青菜</li>
    			<li><span></span>拼餐套餐</li>
    			<li><span></span>招牌菜</li>
    			<li><span></span>盒饭</li>
    			<li><span></span>米饭</li>
    			<li><span></span>经典靓汤</li>
    			<li><span></span>米饭</li>
    			<li><span></span>餐具</li>
    			<li><span></span>联系我们</li>
    		</ul>
    	</div>
    	<div class="foodright">
    		<div class="foodlist">
    			<h3>优惠<span>美味又实惠，大家快来抢</span></h3>
    			<ul>
    				<li>
    					<div class="foodimg">
    						<img src="../../../../static/images/toufu.png" width="90" height="90"/>
    					</div>
    					<div class="foodinfo">
    						<h3>麻辣肉末豆腐</h3>
    						<p>肉沫韶能豆腐 闲谈美味 佐饭佳品</p>
    						<p>月售 11</p>
    						<p class="discount"><span>0.1折</span></p>
    						<p class="money"><span>￥0.2</span><span>￥20</span></p>
    						<div class="addcar">
    							<span class="iconfont icon-reduce"></span><span>2</span><span class="iconfont icon-add-fill"></span>
    						</div>
    					</div>
    				</li>
    				<li>
    					<div class="foodimg">
    						<img src="../../../../static/images/toufu.png" width="90" height="90"/>
    					</div>
    					<div class="foodinfo">
    						<h3>油炸脆皮鸡</h3>
    						<p>肉沫韶能豆腐 闲谈美味 佐饭佳品</p>
    						<p>月售 11</p>
    						<p class="discount"><span>0.1折</span></p>
    						<p class="money"><span>￥0.2</span><span>￥20</span></p>
    						<div class="addcar">
    							<span class="iconfont icon-reduce" style="display: none;"></span><span style="display: none;">2</span><span class="iconfont icon-add-fill"></span>
    						</div>
    					</div>
    				</li>
    			</ul>
    		</div>
    		<div class="foodlist">
    			<h3>火爆<span>美味又实惠，大家快来抢</span></h3>
    			<ul>
    				<li>
    					<div class="foodimg">
    						<img src="../../../../static/images/toufu.png" width="90" height="90"/>
    					</div>
    					<div class="foodinfo">
    						<h3>麻辣肉末豆腐</h3>
    						<p>肉沫韶能豆腐 闲谈美味 佐饭佳品</p>
    						<p>月售 11</p>
    						<p class="discount"><span>0.1折</span></p>
    						<p class="money"><span>￥0.2</span><span>￥20</span></p>
    						<div class="addcar">
    							<span class="iconfont icon-reduce"></span><span>2</span><span class="iconfont icon-add-fill"></span>
    						</div>
    					</div>
    				</li>

    			</ul>
    		</div>
    	</div>
    </div>
    <div class="ordercart">
      <div class="orderdetail" @click="isshow=!isshow">
        <span class="iconfont icon-cart-Empty"></span>
        <span class="ordercount">6</span>
      </div>
      <div class="orderprice">
        <p>￥0</p>
        <p>配送费 ￥4元</p>
      </div>
      <div class="pay">￥20元起送</div>
    </div>
    <div class="cartbg" :class="{'ordershow':isshow}">
      <div class="cartlist">
        <div class="carttitle">
          购物车<span>清空购物车</span>
        </div>
        <ul>
          <li>
            <div>南瓜粥</div>
            <div>￥9</div>
            <div class="change">
              <span class="iconfont icon-reduce"></span><span>2</span><span class="iconfont icon-add-fill"></span>
            </div>
          </li>
          <li>
            <div>麻婆豆腐</div>
            <div>￥12</div>
            <div class="change">
              <span class="iconfont icon-reduce"></span><span>1</span><span class="iconfont icon-add-fill"></span>
            </div>
          </li>
          <li>
            <div>南瓜粥</div>
            <div>￥9</div>
            <div class="change">
              <span class="iconfont icon-reduce"></span><span>2</span><span class="iconfont icon-add-fill"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'goods',
    data: function(){
      return{
        isshow: true
      }
    }
  }
</script>

<style scoped>
  .foods{
  	width: 100%;
  	margin-top: 10px;
  	display: flex;
  	flex-direction: row;
  	flex-wrap: nowrap;
  	justify-content: flex-start;
  }
  .foodcategrys{
  	min-width: 20%;
  }
  .foodcategrys ul li{
  	font-size: 12px;
  	padding: 15px 10px;
  	background-color: gainsboro;
  }
  .foodcategrys ul li.check{
  	background-color: white;
  	font-weight: 700;
  }
  .foodcategrys ul li.check + li{
  	border-top-right-radius: 5px;
  }
  .foodright{
  	flex-grow: 1;
  	margin-left: 10px;
  	margin-right: 10px;
  }
  .foodlist h3{
  	font-size: 12px;
  	font-weight: 700;
  	line-height: 40px;
  }
  .foodlist h3 > span {
  	font-size: 11px;
  	font-weight: normal;
  	color: #555;
  	margin-left: 10px;
  }
  .foodlist ul li{
  	display: flex;
  	flex-direction: row;
  	flex-wrap: nowrap;
  	margin-top: 10px;
  }
  .foodlist .foodimg{
  	width: 90px;
  	height: 90px;
  	border: 1px solid #cdcdcd;
  	border-radius: 5px;
  }
  .foodlist .foodimg img{
  	border-radius: 5px;
  }
  .foodlist .foodinfo{
  	margin-left: 10px;
  	position: relative;
  }
  .foodlist .foodinfo p{
  	font-size: 11px;
  	color: #333;
  	line-height: 20px;
  }
  .foodlist .foodinfo h3{
  	line-height: 20px;
  }
  .foodinfo .discount span{
  	border: 1px solid red;
  	color: red;
  	padding: 1px 5px;
  	border-radius: 3px;
  }
  .foodinfo .money span:nth-child(1){
  	color: red;
  	font-weight: 700;
  	font-size: 14px;
  }
  .foodinfo .money span:nth-child(2){
  	margin-left: 8px;
  	text-decoration: line-through;
  }
  .foodinfo .addcar {
  	position: absolute;
  	bottom: 5px;
  	right: 0;
  	font-size: 14px;
  }
  .foodinfo .addcar .icon-reduce{
  	color: orangered;
  	font-size: 20px;
  }
  .foodinfo .addcar .icon-add-fill{
  	color: green;
  	font-size: 20px;
  }
  .foodinfo .addcar span:nth-child(2){
  	vertical-align:2px;
  	padding: 0 5px;
  }
  .ordercart{
  	position: fixed;
    z-index: 100;
  	bottom: 0;
  	width: 100%;
  	height: 40px;
  	background-color: black;
  	color: white;
  	display: flex;
  	flex-direction: row;
  	flex-wrap: nowrap;
  	justify-content: space-between;
  	align-items: center;
  	font-size: 11px;
  }
  .orderdetail{
  	width: 40px;
  	height: 40px;
  	background-color:#444444;
  	border-radius: 24px;
  	margin-left: 10px;
  	margin-top: -20px;
    border: 4px solid black;
  }
  .orderdetail .icon-cart-Empty{
  	font-size: 22px;
  	display: block;
  	margin-left: 9px;
  	margin-top: 8px;
  }
  .orderdetail .ordercount{
  	position: absolute;
  	left: 45px;
  	top: -15px;
  	background-color: red;
  	color: white;
  	padding:0 5px;
  	border-radius: 5px;
  }
  .orderprice{
  	flex-grow: 1;
  	margin-left: 20px;
  }
  .orderprice p:nth-child(1){
  	font-weight: bold;
  	font-size: 14px;
  	line-height: 20px;
  }
  .orderprice p:nth-child(2){
  	color: wheat;
  }
  .pay{
  	background-color: #333;
  	height: 100%;
  	padding: 0 20px;
  	line-height: 40px;
  }
  .cartbg {
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.5);
  }
  .ordershow{
    display: none;
  }
    .cartlist{
    	position: absolute;
    	width: 100%;
    	bottom: 40px;
    	background-color: white;
    	color: #333;
    	z-index: -1;
      font-size: 11px;
    }
    .carttitle{
    	height: 35px;
    	line-height: 35px;
    	background-color: whitesmoke;
    	padding: 0 10px;
    }
    .carttitle span{
    	display: inline-block;
    	float: right;
    }
    .cartlist li{
    	display: flex;
    	flex-direction: row;
    	flex-wrap: nowrap;
    	justify-content: space-between;
    	line-height: 30px;
    	padding: 0 10px;
    	margin-top: 10px;
    	border-bottom: 1px dashed #DCDCDC;
    }
    .cartlist li div:nth-child(1){
    	flex-grow: 1;
    }
  .cartlist li div:nth-child(2){
  	margin: 0 10px;
  	color: orangered;
  }
  .change .icon-reduce{
  	color: green;
  	font-size: 18px;
  }
  .change .icon-add-fill{
  	color: green;
  	font-size: 18px;
  }
  .change span:nth-child(2){
  	vertical-align:2px;
  	padding: 0 4px;
  }
</style>
