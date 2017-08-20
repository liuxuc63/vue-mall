<template>
  <div id="info">
    <div>
        <div class="info-border">
          <swiper-img :imageUrl="id"></swiper-img>
        </div>
        <div class="info-border">
          <h4 class="info-title">{{info.title}}</h4>
          <hr>
          <div class="info-price">
            市场价：<span class="info-market">￥{{info.market_price}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销售价：<span class="info-sell">￥{{info.sell_price}}</span>
          </div>
          <div class="info-number">
            <span>购买数量：</span>
          </div>
          <div class="info-btn"> 
            <mt-button type="primary" size="small">立即购买</mt-button>
              &nbsp;&nbsp;
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </div>
        </div>
        <div class="info-params">
          <h4>商品参数</h4>
          <hr>
          <div>商品货号：{{info.goods_no}}</div>
          <div class="info-stock">库存情况：{{info.stock_quantity}}</div>
          <div>上架时间：{{info.add_time | dataFormat('YYYY-MM-DD HH:mm:ss')}}</div>
        </div>
    <router-link v-bind="{to:'/good/goodDesc/' + id}">
      <mt-button size="large" type="primary">商品描述</mt-button>
    </router-link>
    <br>
    <router-link v-bind="{to:'/goods/goodsComment/' + id}">
      <mt-button size="large" type="danger">商品评论</mt-button>
    </router-link>
  
    </div>
  </div>
</template>
<script>
import swiper from '../subComponent/swiper.vue';

export default {
  components:{
    'swiper-img':swiper
  },
  data () {
    return {
      id:0,
      info:{
        "id": 87,
        "title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
        "add_time": "2015-04-19T16:51:03.000Z",
        "goods_no": "SD9102356032",
        "stock_quantity": 60,
        "market_price": 2499,
        "sell_price": 2195
        },
        imagesData:[]
    }
  },
  created(){
    this.id = this.$route.params.id;
    this.getInfoData()
  },
  methods: {
    getInfoData(){
      // 获取具体信息
      var url = this.$common.baseUrl + '/api/goods/getinfo/' + this.id;
      console.log(url);
    },
    getImagesData(){
      // 获取轮播图信息
      var url = 'http://www.lovegf.cn:8899/api/getthumimages/' + this.id;
      this.$http.get(url).then(function(res){
        if(res.status !== 200){
          this.$common.Toast(res.body.message);
          return false;
        }
        this.imagesData = res.body.message;
      })
    }
  }
}
</script>
<style scoped>
.info-border,.info-params{
  border:1px solid #ccc;
  border-radius:5px;
  padding:5px;
}
.info-number{
  padding:20px 0 ;
}
#info{
  padding:3px;
}
.info-market{
  text-decoration: line-through;
}
.info-sell{
  color:#f00;
}
.info-title{
  color:#0094ff;
  padding:20px 0 10px 0;
}
.info-btn{
  padding-bottom:20px;
}
.info-params{
  padding:20px 10px;
  color:#666;
  margin-bottom:20px;
}
.info-params>h4{
  /*padding:20px 0 5px 0;*/
  color:#aaa;
}
.info-stock{
  padding:10px 0;
}
</style>