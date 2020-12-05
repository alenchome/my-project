<template>
  <div>
  	<div class="goback">
    	<span class="iconfont icon-arrow-left" @click="$router.back()"></span>
  	</div>
    <div class="login">
      <div class="login-title">
        用户登录
      </div>
      <div class="login-type" id="login-type">
        <span v-for="(tab,index) in tabs" :class="{on:num==index}" @click="num=index" :key='tab+index'>{{ tab.name }}</span>
      </div>
      <div class="login-message"  v-show="num==0">
        <div class="input-box">
          <input type="text" id="" value="" placeholder="手机号" />
        </div>
        <div class="input-box">
          <input type="text" id="" value="" placeholder="验证码" />
        </div>
        <p>温馨提示：未注册的手机号，短信登录会自动注册，且代表已同意<span class="agreement">《用户服务协议》</span></p>
      </div>
      <div class="login-message" v-show="num==1">
        <div class="input-box">
          <input type="text" id="" value="" placeholder="手机/邮箱/用户名" />
        </div>
        <div class="input-box">
          <input type="password" name="" placeholder="密码" />
        </div>
        <div class="input-box">
          <input type="text" name="" id="" value="" placeholder="验证码" />
        </div>
      </div>
      <div class="login-btn">
        <button>登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data(){
      return {
        tabs: [
          {name: '短信验证'},
          {name: '密码验证'}
        ],
        num: 0
      }
    }
  }
</script>

<style>
	.goback span{
		display: block;
		padding: 10px;
		font-size: 22px;
	}
  .login {
    text-align: center;
  }

  .login input {
    border: 0;
    width: 100%;
    height: 100%;
    text-indent: 10px;
    padding: 0;
  }

  .login-title {
    margin: 30px auto;
    font-size: 30px;
    color: green;
    font-weight: bold;
    text-align: center;
  }

  .login-type span {
    display: inline-block;
    margin: 0 10px;
    padding: 3px;
    font-size: 13px;
    border-bottom: 2px solid #fff;
  }

  .login-type span.on {
    color: green;
    border-bottom: 2px solid #008000;
  }

  .input-box,
  .input-btn {
    border: 1px solid #cdcdcd;
    border-radius: 3px;
    margin: 10px 15%;
    text-align: left;
    height: 30px;
  }

  .login-message {
    margin-top: 20px;
  }

  .login-message p {
    width: 70%;
    margin-left: 15%;
    font-size: 12px;
    line-height: 20px;
  }

  .login-message .agreement {
    color: forestgreen;
  }

  .login-btn button {
    border: 0;
    width: 70%;
    color: white;
    text-align: center;
    background-color: green;
    height: 40px;
    margin-top: 20px;
    border-radius: 5px;
  }
</style>
