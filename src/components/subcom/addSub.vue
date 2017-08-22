<template>
    <div class="mui-numbox" >
        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="sub">-</button>
        <input class="mui-input-numbox" type="number" v-model="number"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add">+</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            number:1
        }
    },
  methods:{
    sub(){
        this.number--;
        // 确保最小值为1
        if(this.number< 1){
            this.number = 1;
        }
        this.sendNumber();
    },
    add(){
        this.number++;
        this.sendNumber();
    },
    //子组件向父组件发送数据
    sendNumber(){
        this.$emit('sendProductNum',this.number);
        // console.log(this.number);
    }
  }
}
</script>
<style scoped>
</style>