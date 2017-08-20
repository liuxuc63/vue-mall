import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import mintUi from 'mint-ui'
import moment from 'moment'
// 加载状态插件
import vueLoading from 'vue-loading-template'

import 'mint-ui/lib/style.min.css'
import '../../static/css/site.css'
import '../../static/mui/css/mui.css'
import '../../static/mui/css/icons-extra.css'

import common from '../assets/common.js'
import home from '../components/home.vue'
import newsList from '../components/news/newsList.vue'
import newsInfo from '../components/news/newsInfo.vue'
import photoInfo from '../components/photo/photoInfo.vue'
import photoList from '../components/photo/photoList.vue'
import goodList from '../components/good/goodList.vue'
import goodInfo from '../components/good/goodInfo.vue'
import goodDesc from '../components/good/goodDest.vue'
import goodComment from '../components/good/goodComment.vue'
import feedback from '../components/feedback/feedback.vue'
import contactUs from '../components/contactUs/contactUs.vue'
import video from '../components/video/video.vue'

Vue.use(Router)
Vue.use(Resource)
Vue.use(mintUi)
// 注册为全局组件
Vue.component('vue-loading',vueLoading)
Vue.prototype.$common = common
Vue.filter('datefmt', function (input, fmtString) {
  return moment(input).format(fmtString)
})
export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/news/newsList',
      component: newsList
    },
    {
      path: '/news/newsList/:newsId',
      component: newsInfo
    },
    {
      path:'/photo/photoList',
      component: photoList
    },{
      path: '/photo/photoInfo/:id',
      component:photoInfo
    },{
      path: '/good/goodList',
      component:goodList
    },{
      path: '/good/goodInfo/:id',
      component:goodInfo
    },
    {
      path: '/good/goodDesc/:id',
      component:goodDesc
    },{
      path: '/good/goodComment/:id',
      component:goodComment
    },
    {
      path: '/feedback',
      component:feedback
    },{
      path: '/video',
      component:video
    }
  ]
})
