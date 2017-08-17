import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import mintUi from 'mint-ui'
import moment from 'moment'

import 'mint-ui/lib/style.min.css'
import '../../static/css/site.css'
import '../../static/mui/css/mui.css'
import '../../static/mui/css/icons-extra.css'

import common from '../assets/common.js'
import home from '../components/home.vue'
import newsList from '../components/news/newsList.vue'
import newsInfo from '../components/news/newsInfo.vue'

Vue.use(Router)
Vue.use(Resource)
Vue.use(mintUi)
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
    }
  ]
})
