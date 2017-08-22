<template>
  <div class="paddingTop">
    <div class="container">
        <div class="title">Mobile:</div>
        <div class="content">11111111111</div>
    </div>
    
    <div class="container">
        <div class="title">Email:</div>
        <div class="content">stevexugc@gmail.com</div>
    </div>
    <div class="container">
        <div class="title">github:</div>
        <div class="content"><a href="https://github.com/nusr">https://github.com/nusr</a></div>
    </div>
    <div class="user-name">By 徐琦</div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.paddingTop{
    padding-top:10px;
}
.container{
    display: flex;
    font-size:20px;
    font-weight: 600;
    justify-content: space-between;
    border-radius: 5px;
    margin:20px 10px;
    height: 80px;
    line-height: 80px;
    border:1px solid #ccc;
}
.container>.content>a{
 color:#0094ff;   
}
.user-name{
     padding-top:50px;
     font-size:30px;
     font-weight: 900;
     text-align: center;
}
</style>