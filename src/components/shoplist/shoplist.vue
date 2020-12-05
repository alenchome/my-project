<template>
	<section>
		<div class="shoplist">
			<div class="shoplist-item">
					<div class="shoplist-left">
						<img src="../../../src/pages/home/images/11.png" width="100%" height="100%"/>
					</div>
					<div class="shoplist-right">
		        <h4 class="ellipsis">粥大师 熬足八小时(徐东店)</h4>
		        <p><span>评分：4.7</span><span>月售3517单</span><p>
		        <p>￥20起送 | 免费配送</p>
		        <div class="activity">
		        	<p class="ellipsis">满22元减7元，满32元减10元，满45元减20元</p>
		        	<p>配送费减3.5元</p>
		        </div>
					</div>
				</div>
		</div>
		<div class="shoplist">
			<div class="shoplist-item">
				<div class="shoplist-left">
					<img src="../../../src/pages/home/images/11.png" width="100%" height="100%"/>
				</div>
				<div class="shoplist-right">
		      <h4 class="ellipsis">粥大师 熬足八小时(徐东店)</h4>
		      <p><span>评分：4.7</span><span>月售3517单</span><p>
		      <p>￥20起送 | 免费配送</p>
		      <div class="activity">
		        <p class="ellipsis">满22元减7元，满32元减10元，满45元减20元</p>
		        <p>配送费减3.5元</p>
		      </div>
				</div>
			</div>
		</div>
		<div class="shoplist">
			<div class="shoplist-item">
				<div class="shoplist-left">
					<img src="../../../src/pages/home/images/11.png" width="100%" height="100%"/>
				</div>
				<div class="shoplist-right">
		      <h4 class="ellipsis">粥大师 熬足八小时(徐东店)</h4>
		      <p><span>评分：4.7</span><span>月售3517单</span><p>
		      <p>￥20起送 | 免费配送</p>
		      <div class="activity">
		        <p class="ellipsis">满22元减7元，满32元减10元，满45元减20元</p>
		        <p>配送费减3.5元</p>
		      </div>
				</div>
			</div>
		</div>
		<div class="shoplist">
			<div class="shoplist-item">
				<div class="shoplist-left">
					<img src="../../../src/pages/home/images/11.png" width="100%" height="100%"/>
				</div>
				<div class="shoplist-right">
		      <h4 class="ellipsis">粥大师 熬足八小时(徐东店)</h4>
		      <p><span>评分：4.7</span><span>月售3517单</span><p>
		      <p>￥20起送 | 免费配送</p>
		      <div class="activity">
		        <p class="ellipsis">满22元减7元，满32元减10元，满45元减20元</p>
		        <p>配送费减3.5元</p>
		      </div>
				</div>
			</div>
    </div>
	</section>
</template>

<script>
  export default{
    name: 'shoplist'
  }
</script>

<style scoped>
  .shoplist {
  	width: 100%;
  }
  .shoplist .shoplist-item{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-between;
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
