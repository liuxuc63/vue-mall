<template>
  <div id="app">
    <!-- mint-ui header -->
    <mt-header fixed title="萌萌商城"></mt-header>
    <!-- vue-router 占位符 -->
    <router-view></router-view>
    <!-- mui tabbar -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link >
      <router-link  class="mui-tab-item" to="/person">
        <span class="mui-icon mui-icon-person"></span>
        <span class="mui-tab-label">会员</span>
      </router-link >
      <router-link  class="mui-tab-item" to="/cart">
        <span class=" mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link >
      <router-link  class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link >
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#app{
  margin:40px 0 50px 0;
}
</style>
