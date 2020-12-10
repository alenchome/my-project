<template>
  <div>
  	<div class="goback">
    	<span class="iconfont icon-arrow-left" @click="$router.back()"></span>
  	</div>
    <div class="login">
      <form @submit.prevent="check">
      <div class="login-title">
                 用户登录
      </div>
      <div class="login-type" id="login-type">
        <span v-for="(tab,index) in tabs" :class="{on:num==index}" @click="num=index" :key='tab+index'>{{ tab.name }}</span>
      </div>
      <div class="login-message"  v-show="num==0">
        <div class="input-box">
          <input type="number" value="" placeholder="手机号" v-model="phone"/>
          <button :disabled="!disabled" class="code" @click.prevent="cuttime">{{codetext}}</button>
        </div>
        <div class="input-box">
          <input type="number"  value="" placeholder="验证码" v-model="code"/>
          
        </div>
        <p>温馨提示：未注册的手机号，短信登录会自动注册，且代表已同意<span class="agreement">《用户服务协议》</span></p>
      </div>
      <div class="login-message" v-show="num==1">
        <div class="input-box">
          <input type="text"  value="" placeholder="手机/邮箱/用户名" v-model="name"/>
        </div>
        <div class="input-box">
          <input type="password" value="" placeholder="密码" v-if="!showeye" v-model="pwd"/>
        	<input type="text" value="" placeholder="密码" v-else v-model="pwd"/>
          <span class="iconfont icon-browse" :class="{eyec:showeye}" @click="showeye=!showeye"></span>
        </div>
        <div class="input-box">
          <input type="text"  value="" placeholder="验证码" v-model="captcha"/><img class="captcha" src="../../pages/login/images/captcha.svg" />
        </div>
      </div>
      <div class="login-btn">
        <button>登录</button>
      </div>
    </form>
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
        num: 0, // 0 代表短信验证 1代表密码验证
        showeye: false, // 显示或隐藏密码， false 隐藏，ture 显示
        phone: '',
        code: '',
        name: '',
        pwd: '',
        captcha: '',
        sendtime: 60,
        disabled: true,
        codetext: '发送验证码'
      }
    },
    methods: {
      cuttime: function(){
        this.sendtime --
        this.disabled= false
        this.sendtime >0 ? (this.codetext='重新发送 '+ this.sendtime+' s') : (this.codetext='发送验证码')
        if(this.sendtime>0){
          setTimeout(this.cuttime,1000)
        }else{
          clearTimeout(this.cuttime)
          this.disabled= true
          this.sendtime= 60
        }
      },
      check: function(){
        if(this.num===0){  //手机号码登录
          const okphone=/^1[3584]\d{9}$/.test(this.phone)
          if(!okphone){
            alert('请输入正确11位手机号')
            return false
          }
          if(!(/^\d{6}$/).test(this.code)){
            alert("请输入正确6位数字验证码")
            return false
          }
        }else{               // 用户名 密码登录方式
          if(!this.name){
            alert("请输入用户名")
            return false
          }
          if(!this.pwd){
            alert("请输入密码")
            return false
          }
          if(!(/^\w{4}$/).test(this.captcha)){
            alert("请输正确4位图形验证码")
            return false
          }
        }

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
    border-radius: 3px;
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
    height: 35px;
  }
  .input-box{
    display: flex;
    flex-direction: row;
  }
  .input-box input{
    flex-grow: 1;
  }
  .input-box .code{
  	padding: 0;
  	margin: 0;
  	border: 0;
  	outline:none ;
  	line-height: 35px;
  	font-size: 13px;
  	min-width: 100px;
  	text-align: center;
  }
  .input-box span.icon-browse{
  	display: block;
  	min-width: 40px;
  	height: 100%;
    color: #cdcdcd;
    font-size: 25px;
    position: relative;
  }
  .icon-browse:before{
   margin-top: 5px;
   position: absolute;
   left: 7px;
  }
  .input-box span.eyec{
  	color: orange
  }
  .input-box .captcha{
    width: 105px;
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
