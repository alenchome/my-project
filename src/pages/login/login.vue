<template>
  <div>
  	<div class="goback">
    	<span class="iconfont icon-arrow-left" @click="$router.back()"></span>
  	</div>
    <div class="login">
      <form @submit.prevent="login">
      <div class="login-title">
                 用户登录
      </div>
      <div class="login-type" id="login-type">
        <span v-for="(tab,index) in tabs" :class="{on:num==index}" @click="num=index" :key='tab+index'>{{ tab.name }}</span>
      </div>
      <div class="login-message"  v-show="num==0">
        <div class="input-box">
          <input type="tel" value="" placeholder="手机号" v-model="phone"/>
          <button :disabled="!okphone" class="code" @click.prevent="getcode">{{ sendtime>0 ? ('重新发送 '+ sendtime +' s') : '发送验证码' }}</button>
        </div>
        <div class="input-box">
          <input type="text"  value="" placeholder="验证码" v-model="code"/>

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
          <input type="text"  value="" placeholder="验证码" v-model="captcha"/>
          <img class="captcha" src="http://localhost:4000/captcha" @click="getcaptcha" ref="captcha"/>
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
  import {reqSendcode,reqLoginSms,reqLoginPwd} from '../../api/index.js'
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
        sendtime: 0,
        codetext: '发送验证码'
      }
    },
    computed: {
      okphone: function(){
          return /^1[3584]\d{9}$/.test(this.phone)
      }
    },
    methods: {
      // 获取验证码 倒计时 ； 异步获取验证码也在 倒计时中
      async getcode(){
        if(!this.sendtime){  //已经在倒计时中时，不可再次倒计时
          this.sendtime = 60
          let cuttime = setInterval(()=>{
            this.sendtime--
            if(this.sendtime <=0){
              clearInterval(cuttime)
            }
          },1000)
          // 同步请求获取手机验证码
          const result = await reqSendcode(this.phone)
          if(result.code===0){
            //验证码发送成功
            console.log('发送成功')
          } else{
            //验证码发送失败  返回失败数据，停止计时
            alert(result.msg)
            if(this.sendtime){
              this.sendtime = 0
              clearInterval(cuttime)
              cuttime = undefined
            }
          }
        }
      },
      async login (){
        // 验证前端表单信息
        if(this.num===0){     //手机号码登录
          if(!this.okphone){
            alert('请输入正确11位手机号')
            return false
          }else if(!(/^\d{6}$/).test(this.code)){
            alert("请输入正确6位数字验证码")
            return false
          }
          //发送异步登录请求
          let result = await reqLoginSms(this.phone,this.code)
          if(result.code===0){
            let userinfo = result.data // 获取用户信息（根据api）
            //登陆成功后，将数据存入state, 且路由跳转至用户中心
            this.$store.dispatch('getuserinfosms',userinfo)
            localStorage.setItem('userid',userinfo._id)   //将userid 保存到本地
            this.$router.replace('/mcenter')
          } else{
            //登陆失败
            alert(result.msg)
            this.code = null
            if(this.sendtime){
              this.sendtime = 0
              clearInterval(cuttime)
              cuttime = undefined
            }
          }
        } else {             // 用户名 密码登录方式
          if(!this.name){
            alert("请输入用户名")
            return false
          }else if(!this.pwd){
            alert("请输入密码")
            return false
          }else if(!(/^\w{4}$/).test(this.captcha)){
            alert("请输正确4位图形验证码")
            return false
          }
          // 发送请求
          let result = await reqLoginPwd(this.name,this.pwd,this.captcha)
          if(result.code===0){
            let userinfo = result.data // 获取用户信息（根据api）
            //登陆成功后，将数据存入state, 且路由跳转至用户中心
            this.$store.dispatch('getuserinfopwd',userinfo)
            localStorage.setItem('userid',userinfo._id)
            this.$router.replace('/mcenter')
          } else {
            //登陆失败  刷新验证码
            alert(result.msg)
            this.getcaptcha()
          }
        }
      },
      //获取一次性图形验证码
      getcaptcha: function(){
        this.$refs.captcha.src = 'http://localhost:4000/captcha?' + Date.now()
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
