<template>
    <div >
        <!--评论组件-->
        <!--1.0 实现提交评论数据到服务器的静态结构-->
        <vue-loading type="spiningDubbles" color="#d9544e" :size="{ width: '50px', height: '50px' }" v-show="isShow"></vue-loading>
        <div id="postcomment">
            <h3 class="comment-title">提交评论</h3>
            <p class="p"></p>
            <textarea placeholder="请输入您要评论的内容..." v-model="postcontent" rows="5"></textarea>
            <mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
        </div>
    
        <!--2.0 实现获取评论数据列表-->
        <div id="list" v-show="!isShow">
            <h3 class="comment-title list">评论列表</h3>
            <p class="p"></p>
            <div v-for="(item,index) in list" v-if="item.content.length!==0">
                <div class="title">
                    <span>第{{index + 1}}楼:</span>
                    <span>用户：{{item.user_name}}</span>
                    <span>发表时间：{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
                </div>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell" v-text="item.content"></li>
                </ul>
            </div>
        </div>
    
        <!--3.0 实现获取更多按钮-->
        <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    props: ['id'],//用来接收父组件传递过来的值
    data() {
        return {
            pageindex: 1,
            postcontent: '',  //用来自动获取用户填写的评论内容
            list: [],  //评论数据的数组
            isShow:true
        };
    },
    created() {
        // 获取当前资讯数据的评论信息列表
        this.getcommentlist(this.pageindex);
    },
    methods: {
        //1.0 评论数据的提交
        postcomment() {
            //0.0 判断用户是否填写评论内容
            if (this.postcontent.trim().length <= 0) {
                this.$common.Toast('您要评论的内容不能为空');
                return;
            }
            //1.0 确定提交的地址 /api/postcomment/:artid
            var url = this.$common.apidomain + '/api/postcomment/' + 21;
            //2.0 利用ajax的post请求将数据提交到指定的地址
            //2.0.1 获取到用户在文本框中填写的评论内容，通过 content: 内容 格式提交到请求报文体中
            this.$http.post(url, { content: this.postcontent }, { emulateJSON: true }).then(function (res) {
                this.$common.Toast('提交评论成功');

                // 3.0 将最新的评论数据追加到评论列表的最顶部
                this.list = [{
                    "user_name": "匿名用户",
                    "add_time": new Date(),
                    "content": this.postcontent
                }].concat(this.list);
                
                //4.0 将文本框中的评论内容清空
                this.postcontent = '';
            });
        },
        // 2.0 获取当前数据的评论数据 pageindex:代表的是当前获取的是哪一页的数据，默认值是1
        getcommentlist(pageindex) {
            pageindex = pageindex || 1;
            // 1.0 确定评论数据的url
            var url = this.$common.apidomain + '/api/getcomments/' + 21+ '?pageindex=' + pageindex;
            // 2.0 发出ajax请求获取数据即可
            this.$http.get(url).then(function (res) {
                if (res.status !== 200) {
                    this.$common.Toast(res.body.message);
                    return;
                }
                // 3.0 将message数组中的数据赋值给this.list
                this.list = this.list.concat(res.body.message);
                this.isShow = false;
            });
        },
        // 3.0 实现加载更多的方法
        getmore() {
            // 1.0 实现this.pageindex值的增加1
            this.pageindex++;

            // 2.0 获取当前this.pageindex值对应的分页数据
            this.getcommentlist(this.pageindex);
        }
    }
}
</script>
<style scoped>
.comment-title{
    margin-bottom: 20px;
}
/* 1.0 实现提交评论样式 */
.comment-title.list{
    margin-top:10px;
}
#postcomment {
    padding: 5px;
}

.p {
    height: 1px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}


/*2.0 评论列表的样式*/

#list {
    padding: 5px;
}

.title {
    padding: 5px;
    color: #6d6d72;
    font-size: 15px;
    background-color: rgba(0, 0, 0, 0.1);
}
</style>