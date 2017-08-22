<template>
    <div>
        <vue-loading type="spiningDubbles" color="#d9544e" :size="{ width: '50px', height: '50px' }" v-show="isShow"></vue-loading>
        <transition name="fade" >
            <div class="info" v-show="!isShow">
                <img class="portrait" :src='imageUrl.url' width="200" height="200" />
                <div class="user-info" >
                  <h1 class="nick">Steve Xu</h1>
                        <a href="javascript:;" class="logout" @click="logout" v-if="!isLogouting"> [退出]</a>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default { 
  name: 'UserInfo',
  data(){
    return {
      isLogouting: false,
      imageUrl:{},
      isShow:true,
    }
  },
  created(){
    this.getImage()
  },
  methods: {
    // 获取用户图像
    getImage(){
        var rand = parseInt(Math.random()*50) || 1;
        var url = this.$common.gankApi + '/5/' + rand;
        this.$http.get(url).then(function(res){
            if(res.status !== 200){
                this.$common.Toast(res.body);
                return ;
            }
            this.imageUrl = res.body.results[0]
            console.log(this.imageUrl);
            this.isShow = false;
        })
    },
    // 注销
    logout(){
      sessionStorage.clear();
      this.isLogouting = true;
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.info{background: #fff; width: 100%; height: 600px; color: #2c3e50; text-align: center; padding-top: 170px;}
.portrait{width: 200px; height: 200px; overflow:hidden; -webkit-border-radius: 100%;
-moz-border-radius: 100%;
-ms-border-radius: 100%;
-o-border-radius: 100%; 
border-radius: 100%; background-color: #CCCCCC; margin:0 auto 15px;border: 2px solid #2c3e50; display: block;}
.user-info{margin: 38px 0 0 0; vertical-align: top;}
.user-info, .w-star, .w-diamond, .nick, .level{display: inline-block;}
.nick{margin-right: 10px;}
.cut{padding: 0 10px; color:#E9E9E9; font-size: 15px;}
.logout{color: #2c3e50; display: block; margin-top: 20px;}
.vue-loading{
    position: relative;
    top:200px;
    margin:0 auto;
}
</style>
