<template>
  <div class="comment">
    <comment :newsId="id"></comment>
  </div>
</template>
<script>
import comment from '../subComponent/comment.vue';
export default {
    components:{
        comment
    },
  data () {
    return {
        id:0
    }
  },
  created(){
    this.id = this.$route.params.id;
  }
}
</script>
<style scoped>
.comment{
    margin-top:60px;
}
</style>