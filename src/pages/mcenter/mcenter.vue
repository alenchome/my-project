<template>
  <div class="mcentermain">
  	<headertop pagetitle="我的"></headertop>
  	<div class="user">
      <router-link :to=" userinfo._id ? '/setuserinfo' : '/login' ">
        <div class="user-info">
        	<div class="userimg">
        		<img src="../../../src/pages/mcenter/images/user.jpeg"/>
        	</div>
        	<div class="userdetails">
        		<p v-if="!userinfo.phone"> {{ userinfo.name ? userinfo.name : '登录/注册'  }} </p>
        		<p><span class="iconfont icon-phone"></span>{{ userinfo.phone ? userinfo.phone : '暂无绑定手机号'}}</p>
        	</div>
        	<div class="userset">
        		<span class="iconfont icon-arrow-right"></span>
        	</div>
        </div>
      </router-link>
    	<div class="card">
    		<div class="card-left">
    			<p><span>0.00</span>元</p>
    			<p>我的余额</p>
    		</div>
    		<div class="card-mid">
    			<p><span>0</span>个</p>
    			<p>我的优惠</p>
    		</div>
    		<div class="card-right">
    			<p><span>0</span>分</p>
    			<p>我的积分</p>
    		</div>
    	</div>
    	<div class="user-order">
    		<span class="iconfont icon-order lefticon"></span>我的订单<span class="iconfont icon-arrow-right righticon"></span>
    	</div>
    	<div class="user-points">
    		<span class="iconfont icon-gift lefticon"></span>我的积分<span class="iconfont icon-arrow-right righticon"></span>
    	</div>
    	<div class="user-vip">
    		<span class="iconfont icon-vip lefticon"></span>我的会员卡<span class="iconfont icon-arrow-right righticon"></span>
    	</div>
    	<div class="user-service">
    		<span class="iconfont icon-service lefticon"></span>服务中心<span class="iconfont icon-arrow-right righticon"></span>
    	</div>
  	</div>
    <div class="layout" v-if=" userinfo._id" @click="loginout">退出登录</div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
	import headertop from '../../components/headertop.vue'
  export default {
    name: 'mcenter',
    computed:{
      ...mapState(['userinfo'])
    },
    methods:{
      loginout: function(){
        let sure = confirm('确定要退出吗')
        if (sure  === true) {
          this.$store.dispatch('loginout')
        } else{
          //不取消
        }
      }
    },
    components: {
      headertop
    }
  }
</script>

<style>
	.mcentermain{
		background-color: #f5f5f5;
	}
	.user-info{
		background-color: #008000;
		color: white;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		border-top: 1px solid wheat;
	}
	.userimg{
		width: 80px;
		height: 80px;
 	}
 	.userimg img{
 		border-radius: 40px;
 		width: 80px;
 		height: 80px;
 	}
 	.userdetails{
 		flex-grow: 1;
 		vertical-align: middle;
 		margin-left: 10px;
 		font-size: 14px;
 		line-height: 22px;
 	}
 	.userset span{
 		font-size: 22px;
 		padding-left: 10px;
 	}
 	.card{
 		display: flex;
 		flex-direction: row;
 		justify-content: space-between;
 		align-items: center;
 		background-color: white;
 		height: 70px;
 		text-align: center;
 		padding: 0 10px;
 	}
 	.card-left,.card-mid,.card-right{
 		flex-grow: 1;
 		line-height: 25px;
 		font-size: 14px;
 	}
 	.card-left span,.card-mid span,.card-right span{
 		font-weight: bold;
 		font-size: 20px;
 	}
 	.card-left span{
 		color: orange;
 	}
 	.card-mid span{
 		color: #FF7F50;
 	}
 	.card-right span{
 		color: #42B983;
 	}
	.user-order, .user-points, .user-vip, .user-service{
		height: 40px;
		line-height: 40px;
		padding: 0 10px;
		background-color: white;
	}
	.user-order, .user-service{
		margin-top: 15px;
	}
	.lefticon{
		font-size: 18px;
		margin-right: 10px;
		color: blue;
	}
	.righticon{
		display: inline-block;
		float: right;
		font-size: 22px;
	}
  .layout{
    margin-top: 40px;
    width: 100%;
    height: 40px;
    background-color: crimson;
    text-align: center;
    color: white;
    line-height: 40px;
  }
</style>
