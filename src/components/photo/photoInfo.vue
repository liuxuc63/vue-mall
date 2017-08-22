<template>
	<div>
       <!--  <vue-loading type="spiningDubbles" color="#d9544e" :size="{ width: '50px', height: '50px' }" v-show="isShow"></vue-loading> -->
	    <!--1.0 实现的是图片详情和缩略图-->
		<div id="desc" >
			<!--图片详情- 标题部分-->
			<div class="title">
				<h4>{{photoinfo.title}}</h4>
				<p>
					2017-7-9 | {{photoinfo.click}}次浏览
				</p>
				<p class="line"></p>
			</div>
            <vue-images :imgs="photoInfoData"
                :modalclose="modalclose"
                :keyinput="keyinput"
                :mousescroll="mousescroll"
                :showclosebutton="showclosebutton"
                :showcaption="showcaption"
                :imagecountseparator="imagecountseparator"
                :showimagecount="showimagecount"
                :showthumbnails="showthumbnails" >
             </vue-images>
             <!--图片详情- 摘要部分-->
            <p v-html="photoinfo.content"></p>
		</div>
        
		<!--2.0。3 集成评论组件-->
		<div id="comment"> 
			<comment :id="id"></comment>
		</div>
	</div>
</template>

<script>
import vueImages from 'vue-images'
	// 2.0.0 导入评论组件
	import comment from '../subcom/comment.vue';
	export default{
		name:'photo-info',
		components:{
			//2.0.1 注册评论组件,
			comment, 
			vueImages: vueImages
		},
		data(){
			return {
				id:0,  //图片的id
				photoinfo :{},
                photoInfoData :[
                {imageUrl:'https://ws1.sinaimg.cn/large/610dc034ly1fh7hwi9lhzj20u011hqa9.jpg'},{
                	imageUrl:'https://ws1.sinaimg.cn/large/610dc034ly1fgllsthvu1j20u011in1p.jpg'
                },{
                	imageUrl:'https://ws1.sinaimg.cn/large/610dc034ly1fgj7jho031j20u011itci.jpg'
                }
				],
			  // isShow:true,
              modalclose: true,
              keyinput: true,
              mousescroll: true,
              showclosebutton: true,
              showcaption: true,
              imagecountseparator: '/',
              showimagecount: true,
              showthumbnails: true
            }
		},
		created(){
			this.id = this.$route.params.id;

            // 1.0 请求图片的详情数据
			this.getinfo();

			// 2.0 请求缩略图数据
			// this.getimgs();

		},
		methods:{
            // 1.0  获取图片详情描述数据
			getinfo(){
				var url =this.$common.apidomain +'/api/getimageInfo/'+this.id;

				this.$http.get(url).then(function(res){
					var body = res.body;
					if(body.status != 0 ){
						this.$common.Toast(body.message);
						return;
					}

                    // 将正常的逻辑数据赋值给this.photoinfo对象
					this.photoinfo = body.message[0];
                    // this.isShow = false
				});
			},
			// 2.0 获取缩略图数据
			getimgs(){
				var url = this.$common.gankApi + '/3/10';
				this.$http.get(url).then(function(res){
					if(res.status !== 200 ){
						this.$common.Toast(res);
						return;
					}
					// 将正常的逻辑数据赋值给this.list数组
					// 由于vue-preview组件要求的数据是 {src:,w:,h:}但是服务器响应回来的数据中是没有 w ,h 的，所以只能自己添加了
					 this.photoInfoData = res.body.results;
					this.photoInfoData.forEach(function(item){
					// 当前所有图片不管有多大都设置为宽高为400，就会导致图片失真了，所以应该按照图片的实际尺寸来设置
						item.imageUrl = item.url;
                        item.caption = '1';
						// console.log(item.caption);
					});
					// console.log(this.photoInfoData)
                    
				});

			},
		}
	}

</script>

<style scoped>
  /*图片详情样式*/
  
  #desc{
	  padding: 10px;
  }
	#desc  .title h4{
		color: #0094ff;
	}

  #desc .title p{
	color:rgba(0,0,0,0.4);
	  margin-top: 10px;
  }

  #desc .title .line{
	  width: 100%;
	  height: 1px;
	  border-bottom: 1px solid rgba(0,0,0,0.4);
  }

  .mui-content,.mui-content ul{
	  background-color: #fff;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
	  border-right:0px;
	  border-bottom:0px;
  }
  .mui-grid-view.mui-grid-9{
	  border-top:0px;
	  border-left:0px;
  }

  /* 9宫格缩略图的样式*/
	.mui-content img{
		height: 100px;
	}
</style>