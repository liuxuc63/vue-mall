<template>
	<div>
		<vue-loading type="spiningDubbles" color="#d9544e" :size="{ width: '50px', height: '50px' }" v-show="isShow"></vue-loading>
	<div class="paddingWidth" v-show="!isShow">
		<h4 v-text="info.title" class="desc-title"></h4>
		<hr>
		<p class="line"></p>
		<p v-html="info.content"></p>
	</div>
	</div>
</template>

<script>

	export default{
		data(){
			return {
				id:0, // 代表的是当前商品的id
				info:{},
				isShow:true
			}
		},
		created(){
			this.id = this.$route.params.id;
			this.getinfo();
		},
		methods:{
			getinfo(){
				var url =this.$common.apidomain +'/api/goods/getdesc/'+this.id;
				this.$http.get(url).then(function(res){
					var body = res.body;
					if(body.status != 0 ){
						this.$common.Toast(body.message);
						return;
					}
					this.info = res.body.message[0];
					this.isShow = false;
				});
			}
		}
	}

</script>

<style scoped>
.desc-title{
	color:#0094ff;
}
.paddingWidth{
    padding: 10px;
}
#tmpl h4{
	color: #0094ff;
}
#tmpl .line{
    height: 1px;
    border:1px solid rgba(0,0,0,0.3);
}
p{
	font-size:16px;
}
table,tr,td,tbody,img{
	width: 100% !important;
	max-width:400px !important;
	width:200px;
}
</style>