<template>
	<div class="ratings">
    <span v-for="(classname ,index) in starclassarr" :class="classname" :key="index"></span>
    <b>评分:{{score}}</b>
  </div>
</template>

<script>
	export default {
    name: 'ratingstar',
    props:{
      score: Number
    },
    computed: {                                 //star的显示就是，添加不同的类名，所以根据分数来确定， 这个确定类名数组的内容
      starclassarr() {                          // 将 'on' ,'half' 'off' 按照顺序装进数组 并返回
        const arr = []
        const {score} = this
        const scoreint = Math.floor(score)
        for (let i = 0; i < scoreint; i++) {
          arr.push('on')               //执行几次 看score 的整数部分
        }
        if(score*10-scoreint*10>=5){
          arr.push('half')             //小数部分大于等于0.5 时 添加 'half' 且只会添加一次 ;乘 10 方便计算
        }
        while(arr.length<5){
          arr.push('off')              //总共只有5个 ，有剩余的 填充'off'
        }
        return arr
      }
    }
  }
</script>

<style scoped>
  .ratings {
  	display: inline-block;
    line-height: 20px;
  }
  .ratings b{
    color: orange;
    margin-left: 5px;
  }
  .ratings span {
    display: inline-block;
    width: 20px;
    height: 20px;
  }
  .ratings span.on{
    background: url(../../../src/components/rating/images/star24_on.png);
  }
  .ratings span.half{
    background: url(../../../src/components/rating/images/star24_half.png);
  }
  .ratings span.off{
    background: url(../../../src/components/rating/images/star24_off.png);
  }

</style>
