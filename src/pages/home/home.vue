<template>
  <div class="homemain">
    <headertop :pagetitle="address.name">
      <div class="left" slot="left" @click="$router.replace('/search')">
        <span class="iconfont icon-search"></span>
      </div>
      <div class="right" slot="right">
        <p v-if="!userinfo._id" @click="$router.push('/login')">登录/注册</p>
      	<span class="iconfont icon-usercenter" v-else @click="$router.replace('/mcenter')"></span>
      </div>
    </headertop>
    <!--轮播开始-->
  	<div class="imgshow">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(categorys,index) in categoryarr" :key="index">
            	<div class="mimglist" v-for="(category,index) in categorys" :key='index'>
            		<span class="iconfont icon-map"></span>
            		<span>{{category.title}}</span>
            	</div>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div v-else><img src="../../../static/images/msite_back.svg"></div>
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
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import headertop from '../../components/headertop.vue'
  import shoplist from '../../components/shoplist/shoplist.vue'

  export default {
    mounted() {
      this.$store.dispatch('getCategorys') //发送异步请求 ,触发action 将数据保存到state
    },
    name: 'home',
    components: {
      headertop,
      shoplist
    },
    computed: {
      ...mapState(['address','categorys','userinfo']),  // 获取state 里面的数据
      categoryarr: function(){               //将 state 里categorys 转化为二维数组 返回给 categorysarr
        const {categorys} = this
        const arrmax = []
        let arrmin = []
        categorys.forEach(function(v){
          if(arrmin.length==8){
            arrmin=[]
          }
          if(arrmin.length==0){
            arrmax.push(arrmin)
          }
          arrmin.push(v)
        })
      return arrmax
      },
      userstatus(){
        const {userinfo} = this
        if(localStorage.key == userinfo._id){
          this.$store.commit('RECEIVE_USERINFO',{userinfo})
        } else{
          localStorage.removeItem('userid')
        }
      }

    },
    watch: {                                        //数据是异步过来的，所以创建 swiper 要在数据过来之后生成
      categoryarr(value){                           //vue是数据更新完之后，再去重新渲染dom
        this.$nextTick(()=>{                         //数据改变(更新)之后，立马使用 vue.nexttick
          //创建swiper 对象                          //会在dom 重新渲染之后 立即执行 vue.nexttick
          new Swiper('.swiper-container',{
            loop: true,
            pagination: {
                  el: '.swiper-pagination',
               }
          })
        })
      }
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
