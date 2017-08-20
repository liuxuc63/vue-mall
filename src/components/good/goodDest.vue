<template>
  <div class="desc-center">
    <h5 v-text="descData.title" class="desc-title"></h5>
    <hr>
    <div v-html="descData.content">  
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      descData:{},
      id:0
    }
  },
  created(){
    this.id = this.$route.params.id;
    this.getDescData()
  },
  methods:{
    getDescData(){
        var url = this.$common.baseUrl + '/api/goods/getdesc/' + this.id;
        this.$http.get(url).then(function(res){
            if(res.status!== 200){
                this.$common.Toast(res.body.message);
                return false;
            }
            this.descData = res.body.message[0];
            console.log(this.descData)
        })
    }
  }
}
</script>
<style scoped>
.desc-title{
    color:#0094ff;
    font-size:18px;
    margin:60px 0 20px 0;
}
p{
    width:320px
}
.gomeImgLoad{
    width:320px
}
</style>