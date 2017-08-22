<template>
  <div >
    
    <!--1.0 图片分类-->
    <div id='cate'>
        <ul class="ulWidth">
            <li >全部</li>
            <li v-for="(item,index) in cates" @click="getimages(item.id)" :key = 'index'>{{item.title}}</li>
        </ul>
    </div>
<!--     <vue-loading type="spiningDubbles" color="#d9544e" :size="{ width: '50px', height: '50px' }" v-show="isShow"></vue-loading> -->
    <!--2.0 图片列表-->
    <div id='imglist' >
        <ul>
            <li v-for="(item,index) in list" :key='index'>
                <router-link v-bind="{to:'/photo/photoinfo/'+item.id}">
                    <img v-lazy="item.img_url">
                    <div id="desc">
                        <h5 v-text="item.title"></h5>
                        <p v-text="item.zhaiyao"></p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
        ulWidth:320,
        cates : [
            {
            "title": "家居生活",
            "id": 14
            },
            {
            "title": "摄影设计",
            "id": 15
            },
            {
            "title": "明星美女",
            "id": 16
            },
            {
            "title": "空间设计",
            "id": 17
            },
            {
            "title": "户型装饰",
            "id": 18
            },
            {
            "title": "广告摄影",
            "id": 19
            },
            {
            "title": "摄影学习",
            "id": 20
            },
            {
            "title": "摄影器材",
            "id": 21
            },
            {
            "title": "明星写真",
            "id": 22
            },
            {
            "title": "清纯甜美",
            "id": 23
            },
            {
            "title": "古典美女",
            "id": 24
            }
      ],   //用来存储图片分类数据的数组
        list:[
            {
            "id": 45,
            "title": "Vassilis Tangoulis意境风光摄影作品",
            "img_url": "https://ws1.sinaimg.cn/large/d23c7564ly1fg6qckyqxkj20u00zmaf1.jpg",
            "zhaiyao": "Vassilis Tangoulis 白色的沉默摄影作品集，Vassilis Tangoulis 是一位屡获殊荣的艺术摄影师，他创作了一组迷人的黑白意境摄影作品，每一张图片都传达了沉默中的宁静时光，给人以宁静致远的深思。"
            },
            {
            "id": 47,
            "title": "宁静唯美的黑白风光摄影欣赏",
            "img_url": "http://ww1.sinaimg.cn/large/610dc034jw1f7wws4xk5nj20u011hwhb.jpg",
            "zhaiyao": "摄影绝不仅仅只是按动快门那么简单，色彩上微妙的变化，拍摄的时候尝试调节不同的曝光补偿，一张好的黑白摄影布光发挥了至关重要的作用，同时对于我来说是不同寻常的。肉丁为你分享不一样的黑白摄影，下面给大家分享一篇像油画一样迷人的黑白色的风景摄影作品欣赏，看摄影师的…"
            },
            {
            "id": 48,
            "title": "西班牙摄影师的人像创意摄影作品：血秀",
            "img_url": "https://ws1.sinaimg.cn/large/610dc034ly1ffyp4g2vwxj20u00tu77b.jpg",
            "zhaiyao": "现居马德里的西班牙摄影师Paco Peregrn的西班牙摄影师的人像创意摄影作品。这组名为“血秀（The Blood Show）”的作品是为《Ae》杂志拍摄，艺术指导/造型师：Kattaca，化妆师/发型师：Yurema Villa。PacoPeregrn生于西班牙阿尔梅利亚，毕业于塞尔维亚艺术学院，后又到圣马丁艺…"
            }
      ] //存储图片数据的数据
    };
  },
  created(){
        // 1.0 获取图片分类数据
        // this.getcates();

        // 2.0 加载图片数据
        // var all = 0; //获取所有数据
        // this.getimages(all);
    },
  methods:{
        getcates(){
            // 1.0 确定url
            var url = this.$common.apidomain + '/api/getimgcategory';
            // 2.0 调用$http的get方法获取数据
            this.$http.get(url).then(function(res){
                if(res.body.status != 0){
                    this.$common.Toast(res.body.message);
                    return;
                }

                // 3.0 实现数据的赋值操作
                this.cates = res.body.message;

                // 4.0 实现当前分类数据所在的ul的总宽度 = 分类个数 * 每个分类数据的宽度
                var w = 62;
                var count = res.body.message.length + 1;
                this.ulWidth = w * count ;

            });
        },
        // 2.0 加载图片数据
        getimages(cateid){
            // 0.0 如果方法的cateid参数没有传递，则默认是0,代表获取所有图片数据
            cateid = cateid || 0;
                        // 1.0 确定url
            var url = this.$common.apidomain + '/api/getimages/'+cateid;
            // 2.0 ajax请求数据
            this.$http.get(url).then(function(res){
                var body = res.body;
                if(body.status != 0){
                    this.$common.Toast(res.body.message);
                    return;
                }

                // 3.0 将数据复制给this.list
                this.list = body.message;
            });
            // this.isShow = true;
        }
    }
}
</script>
<style scoped>
    /*1.0 图片分类*/
    .ulWidth{
        width:750px;
    }
	#cate{
		width: 375px;
		max-width: 375px;
		overflow-x: auto;
	}
	#cate ul{
		margin: 0px;
		padding-left: 10px;
	}
	#cate li{
		cursor: pointer;
		list-style: none;
		display: inline-block;
		color:#0094ff;
		font-size: 14px;
		padding-left: 6px;
	}

	/*2.0 实现图片列表样式*/
	#imglist ul {
		padding-left: 0px;
	}
	#imglist li{
		list-style:none;
		position: relative ;
	}
	#imglist img{
		width:100%;
		height: 300px;
        display: block;
	}

	#desc{
		width: 100%;
		background-color: rgba(0,0,0,0.2);
		position: absolute;
		bottom: 2px;
		left: 0px;
	}

    #desc h5{
        color: #ffffff;
        font-weight: bold;
    }
    #desc p{
        color:#fff;
    }

    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>