<template>
  <div>
    <!-- mint-ui 轮播图 -->
    <mt-swipe :auto="5000" class="home-swipe" :show-indicators="false">
      <mt-swipe-item v-for="(item,index) in swipeImagesData" :key="index"><a :href="item.url"><img :src="item.img" alt=""></a></mt-swipe-item>
    </mt-swipe>
    <!-- mui 九宫格 -->
    <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news/newsList">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photos/">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods/">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/feedbacks/">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/videos/">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/contacts/">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></router-link></li>
        </ul> 
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swipeImagesData: []
    }
  },
  created () {
    this.getSwipeImages()
  },
  methods: {
    // 获取轮播图图片信息
    getSwipeImages () {
      var url = this.$common.baseUrl + '/api/getlunbo'
      this.$http.get(url).then(function (res) {
        if (res.status !== 200) {
          this.$common.Toast(res.body.message)
        } else {
          this.swipeImagesData = res.body.message
        }
      }, function (res) {
        this.$common.Toast(res.status)
      })
    }
  }
}
</script>

<style scoped>
/*
    轮播图
*/
.mint-swipe{
    height: 300px;
}
/* 九宫格 */
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border-width: 0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border-width: 0;
}
.home-swipe img{
  width: 100%;
}
/* 替换九宫格图片 */
.mui-icon-home:before, .mui-icon-email:before, .mui-icon-chatbubble:before, .mui-icon-location:before, .mui-icon-search:before, .mui-icon-phone:before{
  content: '';
  display: block;
  width: 50px;
  height: 50px;
  background-repeat: round;
}
.mui-icon-home:before {
  background-image: url(../../static/images/1.png)
}
.mui-icon-email:before {
  background-image: url(../../static/images/2.png)
}
.mui-icon-chatbubble:before {
  background-image: url(../../static/images/5.png)
}
.mui-icon-location:before {
  background-image: url(../../static/images/3.png)
}
.mui-icon-search:before {
  background-image: url(../../static/images/4.png)
}
.mui-icon-phone:before {
  background-image: url(../../static/images/6.png)
}
</style>
