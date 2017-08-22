<template>
    <div>
        <!--1.0 利用mint-ui的mt-swipe组件实现轮播图-->
        <silder></silder>
    
        <!--2.0 利用MUI的九宫格组件实现实现导航区域-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news/newslist">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo/photolist">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goods/goodslist">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/feedback">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/musicList">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">音乐欣赏</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/contactUs">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </router-link>
                </li>
            </ul>
        </div>
    
    </div>
</template>

<script>
import silder from '../components/subcom/silder.vue'

export default {
    components:{
        silder
    }
}
</script>

<style scoped>
.mint-swipe {
    height: 300px;
}

.mint-swipe-item {
    /*background-color: red;*/
    width: 100%;
    height: 300px;
}

.mint-swipe-item img {
    width: 100%;
    height: 300px;
    display: block;
}

.mui-content,
.mui-content ul {
    background-color: #fff;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border-right: 0px;
    border-bottom: 0px;
}

.mui-grid-view.mui-grid-9 {
    border-top: 0px;
    border-left: 0px;
}

.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before {
    content: '';
    display: inline-block;
    width: 50px;
    height: 50px;
    background-repeat: round;
    border-radius: 50%;
}

.mui-icon-home:before {
    background-image: url(../../statics/imgs/1.png);
}

.mui-icon-email:before {
    background-image: url(../../statics/imgs/2.png);
}

.mui-icon-chatbubble:before {
    background-image: url(../../statics/imgs/3.png);
}

.mui-icon-location:before {
    background-image: url(../../statics/imgs/4.png);
}

.mui-icon-search:before {
    background-image: url(../../statics/imgs/5.png);
}

.mui-icon-phone:before {
    background-image: url(../../statics/imgs/6.png);
}
</style>