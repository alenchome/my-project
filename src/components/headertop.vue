<template>
  <div class="header">
    <slot name="left"></slot>
  	<div class="title ellipsis">
  		{{pagetitle}}
  	</div>
    <slot name="right"></slot>
  </div>
</template>

<script>
  export default {
    name: 'headertop',
    props: {
      pagetitle: String
    }
  }
</script>

<style scoped>
  .header{
  	height: 40px;
  	width: 100%;
  	background-color: green;
  	color: white;
  	display: flex;
  	flex-direction: row;
    flex-wrap: nowrap;
  	justify-content: space-between;
  	align-items: center;
  }
  .header .left span, .header .right span{
  	font-size: 20px;
  }
.left, .title, .right{
  	padding: 0 10px;
  }
 .title {
 		flex-grow: 1;
 	  text-align: center;
 }
</style>
