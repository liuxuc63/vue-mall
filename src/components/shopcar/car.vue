<template>
    <div>
        <div class="row" v-for="(item,index) in datalist">
            <mt-switch class="switch" v-model="value[index]"></mt-switch>
            <img class="img" :src="item.thumb_path" alt="商品图片" >
            <div class="inforight">
                <h4 v-text="item.title"></h4>
                <div class="bottom">
                    <ul>
                        <li>￥{{item.sell_price}}</li>
                        <li class="car-num"><addSub :num="item.cou"></addSub></li>
                        <li><a href="javascript:void(0)" @click="delrow(item.id,index)">删除</a></li>
                    </ul>

                </div>
            </div>
        </div>

        <div id="total">
            <!-- <mt-switch class="switch" v-model="isAll"></mt-switch> -->
            <div class="desc">
                    已勾选商品{{totalcount}}件 总价: <span  class="car-price">￥{{totalAmount}}</span>
            </div>
            <mt-button  type="danger" size="small" class="pay-money"  @click="payMoney">结算</mt-button>
        </div>
        <!-- {{value}} -->
    </div>
</template>

<script>
    import addSub from '../subcom/addSub.vue';
    export default{
        components:{
            addSub
        },
        data(){
            return {
                value:[],
                datalist:[
                        {
                        "cou": 2,
                        "id": 90,
                        "title": "佳能（Canon） EOS 700D 单反套机",
                        "sell_price": 4799,
                        "thumb_path": 'http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200154277661.jpg'
                        },{
                        "cou": 4,
                        "id": 87,
                        "title": "华为（HUAWEI）荣耀 6Plus",
                        "sell_price": 2195,
                        "thumb_path": "http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200046589514.jpg"
                        },
                        {
                        "cou": 5,
                        "id": 88,
                        "title": "苹果Apple iPhone 6 Plus",
                        "sell_price": 5780,
                        "thumb_path": "http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200059017695.jpg"
                        },
                        {
                        "cou": 1,
                        "id": 92,
                        "title": "联想（Lenovo） G510AM 15.6`",
                        "sell_price": 2999,
                        "thumb_path":"http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200225107390.jpg"
                        }
                                                                
                ],
                totalcount:0,
                totalAmount:0
            }
        },
        watch:{
            value:function(now){
                // console.log(now);
                var len = this.datalist.length,total = 0,temp = 0;
                for(var i = 0;i < len;i++){
                    temp = now[i] || 0;
                    total += temp * this.datalist[i].cou 
                }
                this.totalcount = total;
                total = 0;
                for(var i = 0;i < len;i++){
                    temp = now[i] || 0;
                    total += temp * this.datalist[i].cou * this.datalist[i].sell_price;
                }
                this.totalAmount = total;
            }
        },
        computed:{
            /*totalcount:function(){
                var len = this.datalist.length;
                var total = 0;
                for(var i = 0;i < len;i++){
                    total += Number(this.value[i]) * this.datalist[i].cou 
                }
                return total ||0 ;
            },
            totalAmount:function(){
                var len = this.datalist.length;
                var total = 0;
                for(var i = 0;i < len;i++){
                    total += Number(this.value[i]) * this.datalist[i].cou * this.datalist[i].sell_price;
                }
                return total || 0;
            }*/
            /*isAll:{
                get:function(){
                    var len = this.datalist.length;
                    for(var i = 0;i < len;i++){
                        if(!this.value || !this.value[i]){
                            break;
                        }

                    }
                    return (i === len) ? true:false;
                },
                set:function(newValue){
                    var len = this.datalist.length;
                    for(var i = 0;i < len;i++){
                        this.value[i] = newValue;
                    }
                    // console.log(newValue);
                    // console.log(this.value);
                }
            }*/
        },
        methods:{
            getNum(num,index){
                // console.log(num,index);
            },
            payMoney(){
                this.$common.Toast('暂无支付接口');
            }
        }
    }
</script>

<style scoped>
    .row{
        border-bottom: 1px solid rgba(0,0,0,0.3);
        height: 102px;
        display: flex;
        padding:10px 5px;
    }


    .img{
        height: 60px;
        width: 60px;
        vertical-align: middle;
        margin:13px 3px 0 3px;
    }

    .inforight{
        margin-left: 5px;
  
    }
    .inforight ul{
        padding-left: 0px;
        margin:15px 0 0 0;
    }
    .inforight li{
        list-style: none;
        display: inline-block;
    }

    .inforight h4{
        color: #0094ff;
        font-size: 14px;
    }
    .car-num{
        margin:0 5px ;
    }
    .bottom {
        display: flex;
    }
.car-price{
    color:#f00;
}
    #total{
        height: 50px;
        line-height: 50px;
        /*border-top: 1px solid rgba(0,0,0,0.3);*/
        background-color: rgba(0,0,0,0.1);
        position: fixed;
        bottom:50px;
        left:0;
        width:100%;
        display:flex;
        justify-content: space-between;
        padding:0 5px;
    }

    .pay-money{
        margin-top:9px;
    }
</style>
