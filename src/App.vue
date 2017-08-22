<!-- 以后项目的根组件 -->
<template>
	<div class="paddingHeight">
		<!-- 1.0 利用mint-ui中的header组件实现整个系统的头部 -->
		<mt-header fixed title="萌萌商城"></mt-header>
		<div v-if="isshow" id="back">
			<a href="javascript:void(0)" @click="backto">返回</a>
		</div>
		<!-- 2.0 利用vue-router的 <router-view>进行占位 -->
		<router-view></router-view>

		<!-- 3.0 利用mui中的tabbar组件实现系统的底部 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			
			<router-link class="mui-tab-item " to="/userInfo">
				<span class="mui-icon mui-icon-person"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>

			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<!-- <span class="mui-badge" v-text="cartNumber"></span> -->
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/setting">
				<span class="mui-icon mui-icon-location"></span>
				<span class="mui-tab-label">定位</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
	// 负责导出 .vue这个组件对象(它本质上是一个Vue对象,所以Vue中该定义的元素都可以使用)
	export default{  // es6的导出对象的写法
		data(){  //等价于 es5的 data:function(){
			return {
				cartNumber:0,
				isshow:false
			}
		},
		methods:{
			backto(){
				this.$router.go(-1);
			}
		},
		watch:{
			'$common':function(now,old){
				console.log(now,old);
			},
			'$route':function(newroute,oldroute){
				if(newroute.path.toLowerCase() === '/home'
				|| newroute.path.toLowerCase() === '/userinfo'
				|| newroute.path.toLowerCase() === '/login'
				|| newroute.path.toLowerCase() === '/setting'
				|| newroute.path.toLowerCase() === '/shopcar'){
					this.isshow = false;
				}else{
					this.isshow = true;
				}
			}
		}
	}
</script>

<style scoped>
/*当前页面的css样式写到这里，其中scoped表示这个里面写的css代码只是在当前组件页面上有效，不会去影响到其他组件页面*/
	.paddingHeight{
		margin:40px 0 50px 0;
	}
	/*当前页面的css样式写到这里，其中scoped表示这个里面写的css代码只是在当前组件页面上有效，不会去影响到其他组件页面*/
#back{
	width: 60px;
	position: absolute;
	top:10px;
	left:10px;
	z-index: 101;
}
#back a{
	color:white;
	font-size: 16px;
	font-weight: 500;
}
</style>