<template>
  <div>
        <div class="list-bar">
            <ul :style="{width:ulWidth + 'px'}">
                <li v-for="item in category" @click="changePhoto(item.id)">{{item.title}}</li>
            </ul>
        </div>
        <!-- // mui 卡片视图 -->
        
        <div class="mui-card" v-for="item in photos" @click="getDetail(item.id)">
        <router-link v-bind="{to:'/photo/photoInfo/' + item.id}">
            <div class="mui-card-header mui-card-media">
                <img :src="item.img_url" />
                <div class="mui-media-body">
                    {{item.title}}
                </div>
            </div>
            <div class="mui-card-content" >
                <img :src="item.img_url" alt="" width="100%"/>
            </div>
            <div class="mui-card-footer">
                <a class="mui-card-link">Like</a>
                <a class="mui-card-link">Comment</a>
                <a class="mui-card-link">Read more</a>
            </div>
            </router-link>
        </div>
        
  </div>
</template>
<script>
export default {
  data () {
    return {
      category:[
            /*{
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
            }*/
      ],
      ulWidth:0,
      photos:[
            {
            "id": 45,
            "title": "Vassilis Tangoulis意境风光摄影作品",
            "img_url": "https://ws1.sinaimg.cn/large/d23c7564ly1fg6qckyqxkj20u00zmaf1.jpg",
            "zhaiyao": "Vassilis Tangoulis 白色的沉默摄影作品集，Vassilis Tangoulis 是一位屡获殊荣的艺术摄影师，他创作了一组迷人的黑白意境摄影作品，每一张图片都传达了沉默中的宁静时光，给人以宁静致远的深思。"
            },
            {
            "id": 47,
            "title": "宁静唯美的黑白风光摄影欣赏",
            "img_url": "https://ws1.sinaimg.cn/large/610dc034ly1fg5dany6uzj20u011iq60.jpg",
            "zhaiyao": "摄影绝不仅仅只是按动快门那么简单，色彩上微妙的变化，拍摄的时候尝试调节不同的曝光补偿，一张好的黑白摄影布光发挥了至关重要的作用，同时对于我来说是不同寻常的。肉丁为你分享不一样的黑白摄影，下面给大家分享一篇像油画一样迷人的黑白色的风景摄影作品欣赏，看摄影师的…"
            },
            {
            "id": 48,
            "title": "西班牙摄影师的人像创意摄影作品：血秀",
            "img_url": "https://ws1.sinaimg.cn/large/610dc034ly1ffyp4g2vwxj20u00tu77b.jpg",
            "zhaiyao": "现居马德里的西班牙摄影师Paco Peregrn的西班牙摄影师的人像创意摄影作品。这组名为“血秀（The Blood Show）”的作品是为《Ae》杂志拍摄，艺术指导/造型师：Kattaca，化妆师/发型师：Yurema Villa。PacoPeregrn生于西班牙阿尔梅利亚，毕业于塞尔维亚艺术学院，后又到圣马丁艺…"
            }
      ]
    }
  },
  created (){
    this.getCategory();
  },
  methods:{
    getCategory(){
        // 获取图片分类
        var url = this.$common.baseUrl + '/api/getimgcategory';
        console.log(url);
        this.$http.get(url).then(function(res){
            if(res.status !== 200){
                this.$common.Toast(res.body);
                return ;
            }
            this.category = res.body.message;
            this.ulWidth = this.category.length * 98;
        })
    },
    // 切换不同分类下的图片
    changePhoto(id){
        /*var url = this.$common.baseUrl + '/api/getimages/' + id;
        this.$http.get(url).then(function(res){
            if(res.status !== 200){
                this.$common.Toast(res.body);
                return;
            }
            this.photos = res.body.message;
        })*/
    }
  }
}
</script>
<style scoped>
.list-bar{
    width: 100%;
    overflow-x:scroll;
}
.list-bar ul{
    display: flex;
    width:1000px;
    flex-direction: row; 
}
li{
    list-style: none;
    padding:0 5px;
}
-webkit-overflow-scrolling: touch;
</style>