<template>
  <div>
  	<!-- video块 -->
  	<div class="videoB" >
  		<video src="http://tbm.alicdn.com/kRp9zdVjlFljygU69OX/mKkVTDxIsqXuHRCx6r1%40%40hd.mp4"></video>
  		<img class="Vimg-b" src="http://img.alicdn.com/tps/i4/TB11R.rmMoQMeJjy0Fpwu3TxpXa.png" alt="">
  		<img class="Vimg-c" src="http://img.alicdn.com/tfs/TB1uo3ygLxNTKJjy0FjXXX6yVXa-1048-336.png" alt="">
  	</div>
  </div>
</template>
<script>
import * as axios from '../assets/js/myAxios' 
export default {
  data () {
    return {
     
    }
  },
  methods:{
   
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	.videoB{
		width: 100%;
		height: 420px;
		position: relative;
		overflow: hidden;
	}
	.Vimg-b{
		position: absolute;
		top:0;
		height: 420px;
		left: -270px;
	}
	.Vimg-c{
		width: 524px;
		position: absolute;
		top: 30px;
    	left: 50%;
    	margin-left: -262px;
	}
</style>
