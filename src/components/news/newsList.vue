<template>
  <div >
    <!-- mint-ui 头部返回 -->
    <mt-header title="图文资讯" class="seconde-title" fixed>
      <router-link to="/home" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- mui 图文列表 -->
    <div class="mui-content return-nav-bar">
      <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-media" v-for="(v,i) in newsListData" :key="i">
              <router-link v-bind="{to:'/news/newsList/' + v.id}">
                  <img class="mui-media-object mui-pull-left news-image" :src="v.img_url" >
                  <div class="mui-media-body">
                      <div class="news-title">{{v.title}}</div>
                      <p class='mui-ellipsis news-abstract'>{{v.zhaiyao}}</p>
                      <div class="news-time">
                        <span>发布时间:{{v.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
                        <span class="news-click">点击数:{{v.click}}</span>
                      </div>
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
      newsListData: []
    }
  },
  created () {
    this.getNewsListData()
  },
  methods: {
    getNewsListData () {
      var url = this.$common.baseUrl + '/api/getnewslist'
      this.$http.get(url).then(function (res) {
        console.log(this)
        if (res.status !== 200) {
          this.$common.Toast(res.body.message)
        } else {
          this.newsListData = res.body.message
        }
      }, function (res) {
        this.$common.Toast(res.body.message)
      })
    }
  }
}
</script>

<style scoped>

.news-image{
  width: 80px;
  height: 80px;
  display: inline-block;
}
.news-title{
  font-weight: 900
}
.news-click{
  margin-left: 10px;
}
.news-abstract{
  font-size: 14px;
  margin: 10px 0 5px 0;
}
.news-time{
  font-size: 12px;
  color: #0094ff
}
.mui-table-view .mui-media-object{
  max-width: 80px;
  line-height: 80px;
}
</style>
