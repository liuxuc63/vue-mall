// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象
import App from './App.vue';

// 3.0 将vue-router集成到这个项目中来
import vueRouter from 'vue-router';
// 3.0.1 将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);

// 3.0.2 导入路由规则对应的组件对象
import home from './components/Home.vue';
import shopcar from './components/shopcar/car.vue';
import newslist from './components/news/newslist.vue';
import newsinfo from './components/news/newsinfo.vue';
import photolist from './components/photo/photolist.vue';
import photoinfo from './components/photo/photoinfo.vue';
import goodslist from './components/goods/goodslist.vue';
import goodsinfo from './components/goods/goodsinfo.vue';
import goodsdesc from './components/goods/goodsdesc.vue';
import goodscomment from './components/goods/goodscomment.vue';

import setting from './components/location/setting.vue';
import map from './components/location/map.vue';
import musicList from './components/video/musicList.vue';
import login from './components/account/login.vue';

import feedBack from './components/feedback/feedback.vue';
import contactUs from './components/contactUs/contactUs.vue';
import userInfo from './components/account/userInfo.vue';
// 3.0.2 定义路由规则
var router1 = new vueRouter({
    linkActiveClass: 'mui-active', //改变路由激活时的class名称
    routes: [
        { path: '/', redirect: '/home' }, // 默认进入home页面(将跟页面重定向到首页home)
        { path: '/home', component: home },
        { 
            path: '/shopcar', 
            component: shopcar,
            meta: { requiresAuth: true },
            beforeEnter: (to, from, next) => {
                if (to.meta.requiresAuth) {
                    // this route requires auth, check if logged in
                    // if not, redirect to login page.
                    var info = JSON.parse(localStorage.getItem('userInfo')) || {};
                    if (!info || info.userName !== 'admin' || info.passWord !== '123') {
                        next({
                            path: '/login',
                            query: { redirect: to.fullPath }
                        })
                    } else {
                        next()
                    }
                } else {
                    next() // 确保一定要调用 next()
                }
            }
        },
        { path: '/news/newslist', component: newslist },
        { path: '/news/newsinfo/:id', component: newsinfo },
        { path: '/photo/photolist', component: photolist },
        { path: '/photo/photoinfo/:id', component: photoinfo },
        { path: '/goods/goodslist', component: goodslist },
        { path: '/goods/goodsinfo/:id', component: goodsinfo },
        { path: '/goods/goodsdesc/:id', component: goodsdesc },
        { path: '/goods/goodscomment/:id', component: goodscomment },
        { path: '/feedback', component: feedBack },
        { path: '/contactUs', component: contactUs },
        { path: '/login', component: login },
        {path:'/setting',component:setting},
        {path:'/map',component:map},
        {path: '/musicList',component:musicList},
        {
            path: '/userInfo',
            component: userInfo,
            meta: { requiresAuth: true },
            beforeEnter: (to, from, next) => {
                if (to.meta.requiresAuth) {
                    // this route requires auth, check if logged in
                    // if not, redirect to login page.
                    var info = JSON.parse(localStorage.getItem('userInfo')) || {};
                    if (!info || info.userName !== 'admin' || info.passWord !== '123') {
                        next({
                            path: '/login',
                            query: { redirect: to.fullPath }
                        })
                    } else {
                        next()
                    }
                } else {
                    next() // 确保一定要调用 next()
                }
            }
        }
    ]
});

// 4.0 注册mint-ui
// 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
// 导入mint-ui组件对象
import mintui from 'mint-ui';
// 在Vue中全局使用mintui
Vue.use(mintui);

// 5.0 注册mui的css样式
import '../statics/mui/css/mui.css';
import '../statics/mui/css/icons-extra.css';
// 6.0 导入一个当前系统的全局基本样式
import '../statics/css/site.css';

// 7.0 将vue-resource在vue中绑定，自动在vue实例对象上注入一个$http对象就可以使用ajax方法请求数据
import vueResource from 'vue-resource';
Vue.use(vueResource);

// 8.0 定义一个全局过滤器实现日期格式化
import moment from 'moment';
Vue.filter('datefmt', function(input, fmtstring) {
    // 使用momentjs这个日期格式化类库实现日期的格式化功能
    return moment(input).format(fmtstring);
})
// 公共属性
import common from './kits/common.js';
Vue.prototype.$common = common
// 9.0 使用图片预览组件


// 导入加载插件
import vueLoading from 'vue-loading-template';
Vue.component('vue-loading', vueLoading)
// 利用Vue对象进行解析渲染
new Vue({
    el: '#app',
    // 使用路由对象实例
    router: router1,
    // render:function(create){create(App)} //es5的写法
    render: c => c(App) // es6的函数写法 =>：goes to
});