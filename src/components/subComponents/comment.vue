<template>
  <div>
    <h4 class="comment-post">提交评论</h4>
    <hr>
    <textarea placeholder="请输入评论内容" v-model="commentContent" class="comment-txt"></textarea>
    <hr>
    <mt-button type="primary" @click.native="postComment" size="large">发表</mt-button>
    <h4 class="comment-list">评论列表</h4>
    <hr>
    <mt-button plain size="large" type="danger" @click.native="getMoreComments">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  name: 'comment',
  data () {
    return {
      msg: '评论',
      commentContent: '',
      moreCommentsData: []
    }
  },
  props: ['newsId'],
  methods: {
    // 提交评论
    postComment () {
      var url = this.$common.baseUrl + '/api/postcomment/' + this.newsId
      console.log(url)
      this.$http.post(url, {content: this.commentContent}, {emulateJSON: true}).then(function (res) {
        this.$common.Toast(res.body.message)
      }, function (res) {
        this.$common.Toast(res.body.message)
      })
    },
    getMoreComments (pageindex) {
      pageindex = pageindex || 1
      var url = this.$common.baseUrl + '/api/getcomments/' + this.newsId + '?pageindex=' + pageindex
      this.$http.get(url).then(function (res) {
        if (res.status !== 200) {
          this.$common.Toast(res.body.message)
          return false
        }
        this.moreCommentsData = res.body.message
      }, function (res) {
        this.$common.Toast(res.body.message)
      })
    }
  }
}
</script>
<style scoped>
.comment-post, .comment-list{
  margin: 10px 0 20px 0
}
.comment-txt{
  margin-top: 15px
}
.comment-list{
  margin-top: 20px
}
</style>