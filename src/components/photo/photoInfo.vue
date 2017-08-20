<template>
  <div class="info">
  <vue-loading type="spiningDubbles" color="#d9544e" :size="{ width: '50px', height: '50px' }" v-if="isLoading"></vue-loading>
    <!-- 标题 -->
    <div class="info-header">
      <h4 class="info-title">{{imageInfo.title}}</h4>
      <div class="info-time">{{imageInfo.add_time | dataFormat('YYYY-MM-DD HH:mm:ss')}} | {{imageInfo.click}}次浏览</div>
      <hr>
    </div>
    <!-- 图片 vue-images插件 -->
    <vue-images :imgs="photoInfoData"
                :modalclose="modalclose"
                :keyinput="keyinput"
                :mousescroll="mousescroll"
                :showclosebutton="showclosebutton"
                :showcaption="showcaption"
                :imagecountseparator="imagecountseparator"
                :showimagecount="showimagecount"
                :showthumbnails="showthumbnails" 
                v-if="isShow"
                class="info-image">
    </vue-images>

    <!-- 介绍 -->
    <p>{{imageInfo.content}}</p>
    <!-- 评论 -->
    <comment api="api"></comment>
  </div>
</template>
<script>
import vueImages from 'vue-images';
import comment from '../subComponent/comment.vue';
export default {
  components:{
    vueImages,
    comment
  },
  data () {
    return {
      isLoading:true,
      msg: 'info',
      id: 0,
      photoInfoData: [

      ],
      imageInfo:[],
      // 图片设置
      isShow:false,
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
  created () {
      this.id = this.$route.params.photoId;
      this.getPhotoInfo();
      this.getImageInfo()
  },
  methods: {
      getPhotoInfo() {
          var url =  this.$common.gankApi + '/6/30';
          this.$http.get(url).then(function (res) {
              if(res.status !== 200) {
                  this.$common.Toast(res.body);
                  return false;
              }
              this.photoInfoData = res.body.results;
              for(var i = 0;i < this.photoInfoData.length;i++ ){
                var v = this.photoInfoData[i];
                v.imageUrl = v.url;
                v.caption = 'vue-images';
              }
              this.isShow = true;
              this.isLoading = false;
          })
      },
      getImageInfo () {
        var url =  this.id;
        this.$http.get(url).then(function(res) {
          if(res.status !== 200) {
                  this.$common.Toast(res.body.message);
                  return false;
              }
              this.imageInfo = res.body.message[0];
              console.log(this.imageInfo)
        })
      }
  }
}
</script>
<style scoped>
.info{
  padding:10px;
}
.info-title{
  color:#0094ff;

}
.info-time{
  margin-top:10px;
  color:#ccc;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border-width: 0;
}
.mui-grid-view.mui-grid-9{
    border-width: 0;
    background-color: #fff;
}
.info-image{
  margin:20px 0;
}
</style>
