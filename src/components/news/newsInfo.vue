<template>
  <div>
    <!-- mint-ui 头部返回 -->
    <mt-header title="图文详情" class="seconde-title" fixed>
      <router-link to="/news/newsList" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="detail return-nav-bar">
      <div class="detail-header">
        <div class="detail-title">{{newsInfoData.title}}</div>
        <div class="detail-time">
          <span>发布于{{newsInfoData.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
          <span class="detail-click">{{newsInfoData.click}}次浏览</span>
          <span class="detail-click">分类：经济民生</span>
        </div>
      </div>
      <hr>
      <div class="detail-content" v-html="newsInfoData.content">
      </div>
      <comment :newsId="newsId"></comment>
    </div>
    
  </div>
</template>
<script>
import comment from '../subComponents/comment.vue'
export default {
  data () {
    return {
      newsId: this.$route.params.newsId,
      newsInfoData: {}
    }
  },
  created () {
    this.getNewsInfoData()
  },
  methods: {
    // 获取图文详情
    getNewsInfoData () {
      var url = this.$common.baseUrl + '/api/getnew/' + this.newsId
      console.log(url)
      this.$http.get(url).then(function (res) {
        if (res.status !== 200) {
          this.$common.Toast(res.body.message)
        } else {
          this.newsInfoData = res.body.message[0]
        }
      }, function (res) {
        this.$common.Toast(res.body.message)
      })
    }
  },
  components: {
    comment
  }
}
</script>
<style scoped>
.detail{
  padding: 10px;
}
.detail-title{
  font-weight: 900;
  font-size: 20p;
  color: #0094ff
}
.detail-time{
  color: #999;
  font-size:14px;
  margin: 5px 0
}
.detail-click{
  margin-left: 8px
}
</style>