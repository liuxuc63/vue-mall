<template>
  <div class="feedback">
    <div class="fd-tip">您好,如需帮助，请留言，我们将尽快解决您的问题</div>
    <div class="fd-phone">
        <h4>手机号码:</h4>
        <div class="mui-input-row mui-text">
            <input type="text" class="mui-input-password">
        </div>
    </div>
    <div class="fd-content">
        <h4>留言内容:</h4>
        <div class="mui-input-row" style="margin: 10px 5px;">
            <textarea id="textarea" rows="10" placeholder="请输入留言内容" v-model="postContent" required></textarea>
        </div>
    </div>
    <mt-button type="danger" size="large" @click="postFeedback">提交</mt-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      postContent:''
    }
  },
  methods:{
    postFeedback(){
        if(this.postContent.trim().length === 0){
          this.$common.Toast('留言不能为空');
          return;
        }
        this.$common.Toast('提交留言成功');
        // var url = '';
        /*this.$http.post(url,{content:this.postContent},{emulateJSON: true}).then(function(res){
            this.$common.Toast(res.body);
        })*/
    }
  }
}
</script>
<style scoped>
.feedback{
  color:#333;
    padding:10px;
}
.fd-tip{
    padding:20px 0;
    font-size:16px;
}
.fd-phone{
    margin-bottom:10px;
}
.fd-phone>h4{
    margin-bottom:10px;
}
</style>