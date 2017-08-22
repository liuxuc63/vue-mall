<template>
    <div>
        <!--1.0 实现新闻详情-->
        <vue-loading type="spiningDubbles" color="#d9544e" :size="{ width: '50px', height: '50px' }" v-show="isShow"></vue-loading>
        <div class="title" v-show="!isShow">
            <h4 v-text="info.title"></h4>
            <p>2017-7-20 | {{info.click}}次浏览</p>
        </div>
        <div id="content" v-html="info.content">
    
        </div>
        <!--2.0 实现评论组件的集成-->
        <!--III. 使用评论组件-->
        <comment :id='id'></comment>
    </div>
</template>
<script>
// I. 导入评论组件
import comment from '../subcom/comment.vue';

export default {
    components: {
        comment  // II. 注册评论组件
    },
    data() {
        return {
            id: 0,
            info: {},
            isShow:true
        }
    },
    created() {
        // 1.0 获取URL传入的参数id赋值给data中的id属性
        this.id = this.$route.params.id;

        // 2.0 请求数据获取对应id的详情对象
        this.getinfo();
    },
    methods: {
        getinfo() {
            // 1.0 定义URL
            const url = this.$common.apidomain + '/api/getnew/' + this.id;

            // 2.0 发送请求获取数据
            this.$http.get(url).then(function (response) {
                var body = response.body;
                if (body.status != 0) {
                    this.$common.Toast(body.message);
                    return;
                }

                // 3.0 把正确数据赋值给data中的info
                this.info = body.message[0];
                this.isShow = false;
            })
        }
    }
}
</script>
<style scoped>
#tmpl{
    padding:10px;
  }
.title h4 {
    color: #0094ff;
}

.title p {
    color: rgba(0, 0, 0, 0.5);
}

.title,
#content {
    padding: 5px;
}
</style>