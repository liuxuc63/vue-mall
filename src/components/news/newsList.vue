<template>
    <div >
        <vue-loading type="spiningDubbles" color="#d9544e" :size="{ width: '50px', height: '50px' }" v-show="isShow"></vue-loading>
        <ul class="mui-table-view" v-show="!isShow">
            <li v-for="item in list" class="mui-table-view-cell mui-media">
                <router-link v-bind="{to:'/news/newsinfo/'+item.id}">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>{{item.zhaiyao}}</p>
                        <div class="ft">
                            <span>发表时间:2017-7-20</span>
                            <span class="click">点击数:{{item.click}}</span>
                        </div>
                    </div>
                </router-link>
            </li>
    
        </ul>
    </div>
</template>

<script>

import { Toast } from 'mint-ui';
import common from '../../kits/common.js';

export default {
    data() {
        return {
            list: [],
            isShow:true
        }
    },
    created() {
        this.getNewsList();
    },
    methods: {
        // 获取新闻列表资讯
        getNewsList() {
            /*
            this.list = [
                {
                    "id": 13,
                    "title": "1季度多家房企利润跌幅超50% 去库存促销战打响",
                    "add_time": "2015-04-16T03:50:28.000Z",
                    "zhaiyao": "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
                    "click": 1,
                    "img_url": "http://www.webhm.top:8080/upload/201504/16/201504161149414479.jpg"
                },
                {
                    "id": 14,
                    "title": "买房还是炒股，2015年买房无法拒绝的5大理由",
                    "add_time": "2015-04-16T04:05:34.000Z",
                    "zhaiyao": "转眼间2015年已经过去了4个月，在这短短的四个月",
                    "click": 2,
                    "img_url": "http://www.webhm.top:8080/upload/201504/16/201504161205596364.jpg"
                },
                {
                    "id": 15,
                    "title": "抢先实拍猎豹CS10 霸气时尚2.0T涡轮增压",
                    "add_time": "2016-12-07T08:49:04.000Z",
                    "zhaiyao": "在SUV当道的天下，许多自主品牌相继推出了旗下多款",
                    "click": 1,
                    "img_url": "http://www.webhm.top:8080/upload/201504/16/201504161218505373.jpg"
                }
            ]*/

            // 1.0 确定URL
            const url = this.$common.apidomain + '/api/getnewslist';

            // 2.0 利用$http.get请求数据
            this.$http.get(url).then(function (response) {
                // 3.0 获取返回的数据
                var body = response.body;

                // 4.0 判断响应报文中的状态码，如果是非0则提示用户请求异常
                if (body.status != 0) {
                    this.$common.Toast(body.message);
                    return;
                }

                // 5.0 将正确数据赋值给list
                this.list = body.message;
                this.isShow = false;
            })
        }
    }
}
</script>

<style scoped>
.mui-table-view img {
    width: 80px;
    height: 80px;
}

.mui-table-view .mui-media-object {
    max-width: 80px;
    line-height: 80px;
}

.ft {
    margin-top: 1.5em;
    font-size: 14px;
    color: #0094ff;
}

.ft .click {
    margin-left: 20px;
}
</style>
