<template>
  <div class="btm-list">
    <div :class="{on: '/home'===$route.path}" @click="goto('/home')">
      <span class="iconfont icon-home"></span>
      <p>首页</p>
    </div>
    <div :class="{on: '/search'===$route.path}" @click="goto('/search')">
      <span class="iconfont icon-search"></span>
      <p>搜索</p>
    </div>
    <div :class="{on: '/order'===$route.path}" @click="goto('/order')">
      <span class="iconfont icon-cart-Empty"></span>
      <p>订单</p>
    </div>
    <div :class="{on: '/mcenter'===$route.path}" @click="goto('/mcenter')">
      <span class="iconfont icon-usercenter"></span>
      <p>我的</p>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'btmlist',
      methods:{
        goto: function(value){
          this.$router.replace(value)
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btm-list{
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 50px;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    border-top: 1px solid #cdcdcd;
    text-align: center;
    background-color: white;
  }
  .btm-list span{
  	font-size: 24px;
  }
  .btm-list .on{
  	color: green;
    font-weight: bold;
  }
</style>
