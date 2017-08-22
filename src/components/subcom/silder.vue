<template>
	<div>
    <vue-loading type="spiningDubbles" color="#d9544e" :size="{ width: '50px', height: '50px' }" v-show="isShow"></vue-loading>
		<mt-swipe :auto="2000" v-show="!isShow" :show-indicators="false">
			<mt-swipe-item v-for="(item,index) in swipeImagesData" :key='index'>
				<img :src="item.url">
			</mt-swipe-item>
		</mt-swipe>

	</div>
</template>

<script>
export default {
  data () {
    return {
      isShow:true,
      swipeImagesData: [
              /*{
              "_id": "57e7e200421aa95dd351b076",
              "createdAt": "2016-09-25T22:41:04.582Z",
              "desc": "9-26",
              "publishedAt": "2016-09-26T11:52:58.626Z",
              "source": "chrome",
              "type": "福利",
              "url": "http://ww1.sinaimg.cn/large/610dc034jw1f867mvc6qjj20u00u0wh7.jpg",
              "used": true,
              "who": "daimajia"
              },
              {
              "_id": "57e477fa421aa95bc338987d",
              "createdAt": "2016-09-23T08:31:54.365Z",
              "desc": "9-23",
              "publishedAt": "2016-09-23T11:38:57.170Z",
              "source": "chrome",
              "type": "福利",
              "url": "http://ww3.sinaimg.cn/large/610dc034jw1f837uocox8j20f00mggoo.jpg",
              "used": true,
              "who": "daimajia"
              },
              {
              "_id": "57e319fd421aa95bc338986a",
              "createdAt": "2016-09-22T07:38:37.240Z",
              "desc": "9-22",
              "publishedAt": "2016-09-22T11:44:08.156Z",
              "source": "chrome",
              "type": "福利",
              "url": "http://ww4.sinaimg.cn/large/610dc034jw1f820oxtdzzj20hs0hsdhl.jpg",
              "used": true,
              "who": "代码家"
              },
              {
              "_id": "57e1c76c421aa95bd05015f2",
              "createdAt": "2016-09-21T07:34:04.60Z",
              "desc": "9-21",
              "publishedAt": "2016-09-21T11:37:24.210Z",
              "source": "chrome",
              "type": "福利",
              "url": "http://ww3.sinaimg.cn/large/610dc034jw1f80uxtwgxrj20u011hdhq.jpg",
              "used": true,
              "who": "daimajia"
              },
              {
              "_id": "57dff891421aa95bc7f06a66",
              "createdAt": "2016-09-19T22:39:13.808Z",
              "desc": "9-20",
              "publishedAt": "2016-09-20T11:42:05.477Z",
              "source": "chrome",
              "type": "福利",
              "url": "http://ww4.sinaimg.cn/large/610dc034jw1f7z9uxopq0j20u011hju5.jpg",
              "used": true,
              "who": "daimajia"
              }*/
]
    }
  },
  created () {
    this.getSwipeImages()
  },
  methods: {
    // 获取轮播图图片信息
    getSwipeImages () {
      // var url = this.$common.baseUrl + '/api/getlunbo'
      var url = this.$common.gankApi + '/5/40';
      console.log(url);
      this.$http.get(url).then(function (res) {
        if (res.status !== 200) {
          this.$common.Toast(res.body)
        } else {
          this.swipeImagesData = res.body.results;
          console.log(this.swipeImagesData )
          this.isShow =false;
        }
      }, function (res) {
        this.$common.Toast(res.body)
      })
    }
  }
}
</script>

<style scoped>
	.mint-swipe{
		max-height: 400px;
    height: 400px;
	}
	.mint-swipe-item img{
		width: 100%;
	}
	.mint-swipe-item{
		/*background-color: red;*/
		width: 100%;
		max-height: 400px;
    height: 400px;
	}
</style>