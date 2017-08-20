<template>
  <div>
    <h4 class="post-comment">提交评论</h4>
    <hr>
    <textarea v-model="commentContent" class="comment-txt"></textarea>
    <!-- mint-ui buttton -->
    <mt-button size="large" type="primary" @click="postComment">发表</mt-button>
    <h4 class="comment-list">评论列表</h4>
    <!-- mint-ui buttton -->
    <div v-for="(item,index) in moreCommentsData" :key="index" v-if="item.content.length > 0">
        <div class="title">
            <span>第{{index + 1}}楼</span>
            <span class="comment-floor">{{item.user_name}}</span>
            <span>{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
        </div>
        <ul class="mui-table-view">
             <li class="mui-table-view-cell">{{item.content}}</li>
        </ul>
    </div>
    <mt-button size="large" type="danger" @click.native="getMoreComments">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  name: 'comment',
  data () {
    return {
      msg: '评论',
      commentContent: '',
      moreCommentsData: [
/*{
"user_name": "匿名用户",
"add_time": "2017-08-18T14:16:39.000Z",
"content": "undefined"
},
{
"user_name": "匿名用户",
"add_time": "2017-08-18T14:16:39.000Z",
"content": "undefined"
},
{
"user_name": "匿名用户",
"add_time": "2017-08-18T14:16:39.000Z",
"content": "undefined"
},
{
"user_name": "匿名用户",
"add_time": "2017-08-18T14:16:39.000Z",
"content": "undefined"
},
{
"user_name": "匿名用户",
"add_time": "2017-08-18T14:16:39.000Z",
"content": "undefined"
},
{
"user_name": "匿名用户",
"add_time": "2017-08-18T14:16:39.000Z",
"content": "undefined"
},
{
"user_name": "匿名用户",
"add_time": "2017-08-18T14:16:38.000Z",
"content": "undefined"
},
{
"user_name": "匿名用户",
"add_time": "2017-08-18T14:16:38.000Z",
"content": "undefined"
},
{
"user_name": "匿名用户",
"add_time": "2017-08-18T14:16:38.000Z",
"content": "undefined"
},
{
"user_name": "匿名用户",
"add_time": "2017-08-18T14:16:38.000Z",
"content": "undefined"
}*/
      ],
      pageindex:1
    }
  },
  created(){
    this.getComments();
  },
  props: ['api'],
  methods: {
    // 提交评论
    postComment () {

      var id = this.api.charAt(this.api.length-1);
      var url = this.$common.baseUrl + '/api/postcomment/' + id;
      /*console.log(url)*/
      if(this.commentContent.trim().length <= 0){
        return;
      }
      this.$http.post(url, {content: this.commentContent}, {emulateJSON: true}).then(function (res) {
        this.$common.Toast(res.body.message)
      }, function (res) {
        this.$common.Toast(res.body.message)
      })
    },
    // 获取更多评论
    getMoreComments(){
      this.getComments(++this.pageindex)
    },
    getComments (pageindex) {
      pageindex = pageindex || 1
      // var url = this.$common.baseUrl + '/api/getcomments/' + this.newsId + '?pageindex=' + pageindex
      var url = this.$common.baseUrl + this.api+ '?pageindex=' + pageindex;
      // console.log(url);
      this.$http.get(url).then(function (res) {
        if (res.status !== 200) {
          this.$common.Toast(res.body.message)
          return false
        }
        this.moreCommentsData = this.moreCommentsData.concat(res.body.message);
        // console.log(this.moreCommentsData);
      }, function (res) {
        this.$common.Toast(res.body.message)
      })
    }
  }
}
</script>
<style scoped>
.postButton{
    background-color: #0094ff;
    border-radius: 5px;
    text-align: center;
    height: 40px;
    line-height: 40px;
}
.title{
    color: #6d6d72;
    font-size: 15px;
    background-color: #ccc;
    height: 40px;
    line-height: 40px;
    margin-top:10px;
    padding-left:15px;
}
.comment-floor{
    margin:0 15px ;
}
.post-comment{
    margin:20px 15px;
}
.comment-txt{
    margin-top:15px;
}
.comment-list{
    margin:20px 15px 15px;
}
</style>