<template>
  <div class="ratings">
  	<div class="shoprating">
  		<div>4.4</div>
  		<div>
  			<p>商家评分</p>
  			<p>
  				<span class="iconfont icon-collection"></span>
  				<span class="iconfont icon-collection"></span>
  				<span class="iconfont icon-collection"></span>
  				<span class="iconfont icon-collection"></span>
  				<span class="iconfont icon-collection"></span>
  			</p>
  		</div>
  		<div>
  			<p>服务态度</p>
  			<p>4.1</p>
  		</div>
  		<div>
  			<p>商品评分</p>
  			<p>4.3</p>
  		</div>
            <div>
  			<p>配送满意度</p>
  			<p>100%</p>
  		</div>
  	</div>
      <div class="shopdiscuss">
      	<div class="discusstype">
      		<span class="click">全部24</span>
      		<span>满意18</span>
      		<span>不满意6</span>
      	</div>
      	<ul class="discusslist">
      		<li>
      			<div class="discussinfo">
      				<div><img src="" width="30" height="30"/></div>
      				<div>
      					<p>匿名用户ds93ns9<p>
      				    <div >
      				    	<span class="iconfont icon-collection"></span>
  							<span class="iconfont icon-collection"></span>
  							<span class="iconfont icon-collection"></span>
  							<span class="iconfont icon-collection"></span>
  							<span class="iconfont icon-collection"></span>
      				    </div>
      				</div>
      				<div> 2020-12-22</div>
      			</div>
      			<div class="text">
      				穿考的非常的好，鸭肠一班，其他味道都挺好的，送过来的时候还是热的，外卖小哥给力！
      			</div>
      			<div class="support">
      				TA的推荐 <span>麻婆豆腐</span><span>红烧翘嘴鱼</span><span>弯弯肉藕汤</span>
      			</div>
      		</li>
      		<li>
      			<div class="discussinfo">
      				<div><img src="" width="30" height="30"/></div>
      				<div>
      					<p>匿名用户ds93ns9<p>
      				    <div >
      				    	<span class="iconfont icon-collection"></span>
  							<span class="iconfont icon-collection"></span>
  							<span class="iconfont icon-collection"></span>
  							<span class="iconfont icon-collection"></span>
  							<span class="iconfont icon-collection"></span>
      				    </div>
      				</div>
      				<div> 2020-12-22</div>
      			</div>
      			<div class="text">
      				穿考的非常的好，鸭肠一班，其他味道都挺好的，送过来的时候还是热的，外卖小哥给力！
      			</div>
      			<div class="support">
      				TA的推荐 <span>麻婆豆腐</span><span>红烧翘嘴鱼</span><span>弯弯肉藕汤</span>
      			</div>
      		</li>
      	</ul>
      </div>

  </div>
</template>

<script>
  export default {
    name: 'rating'
  }
</script>

<style scoped>
  .ratings{
  	padding: 10px;
  	border-top: 1px solid #cdcdcd;
  }
  .ratings .shoprating{
  	display: flex;
  	flex-direction: row;
  	flex-wrap: nowrap;
  	font-size:11px;
  	justify-content: space-around;
  	text-align: center;
  	align-items: center;
  	line-height: 20px;
  	padding: 10px 0;
  }
  .shoprating div:nth-child(1){
  	font-size: 18px;
  	font-weight: 700;
  	color: orange;
  }
  .shopdiscuss{
  	margin-top: 10px;
  	font-size: 11px;
  }
  .shopdiscuss .discusstype{
  	overflow: hidden;
  }
  .shopdiscuss .discusstype span{
  	display: block;
  	float: left;
  	background-color: lightgrey;
  	padding: 5px 8px;
  	margin-left: 5px;
  	border-radius: 3px;
  }
  .shopdiscuss .discusstype .click{
  	background-color: deepskyblue;
  	color: white;
  }
    .shopdiscuss .discusslist li{
    	margin: 20px 0 40px;
    }
    .discusslist .discussinfo{
    	display: flex;
    	flex-direction: row;
    	flex-wrap: nowrap;
    	justify-content: space-between;
    }
    .discussinfo > div:nth-child(2){
    	flex-grow: 1;
    	margin-left: 15px;
    }
    .discusslist .text{
    	margin-top: 10px;
    	line-height: 18px;
    }
    .discusslist .support{
    	margin-top: 15px;
    }
    .discusslist .support span{
    	color: deepskyblue;
    	background-color: cornsilk;
    	padding: 2px 5px;
    	border-radius: 3px;
    	margin-left: 5px;
    }
</style>
