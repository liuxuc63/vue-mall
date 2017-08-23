<template>
	<div>
	  <!--1.0 商品轮播图-->
		<div class="silder">
		<silder :imgs="imgs"></silder>
		</div>

		<!--2.0 实现商品购买区-->
		<div id="buy">
			<h4 v-text="info.title"></h4>
			<p class="line"></p>
			<ul>
				<li class="price">
					市场价: <s>￥{{info.market_price}}</s>    销售价：<span>￥{{info.sell_price}}</span>
				</li>
				<li>
					购买数量:
                    <addSub v-on:sendProductNum="getProductNum"></addSub>
                    <transition name="show" @before-enter="beforeEnter" @enter="Enter" 
                    @after-enter="afterEnter">
                        <div class="info-ball" v-if="isShow"></div>
                    </transition>
				</li>
				<li>
					<mt-button type="primary" size="small" @click="payMoneyNow">立即购买</mt-button>
					<mt-button type="danger" size="small" @click="addCart">加入购物车</mt-button>
				</li>
			</ul>
		</div>

		<div id="params">
				<h6>商品参数</h6>
				<p class="line"></p>
			<ul>
				<li>商品货号：{{info.goods_no}}</li>
				<li>库存情况：{{info.stock_quantity}}</li>
				<li>上架时间：{{info.add_time | datefmt('YYYY-MM-DD')}}</li>
			</ul>
		</div>

		<!--3.0 图文详情-->
		<!--4.0 商品评论-->
		<div id="other">
			<router-link v-bind="{to:'/goods/goodsdesc/'+id}">
			    <mt-button class="imgdesc" type="primary" size="large">图文详情</mt-button>
			</router-link>
            <router-link v-bind="{to:'/goods/goodscomment/'+id}">
                <mt-button type="danger" size="large">商品评论</mt-button>
            </router-link>
		</div>
	</div>
</template>

<script>
    import addSub from '../subcom/addSub.vue';
	import silder from '../subcom/silder.vue';
    import {vm,COUNTSTR} from '../../kits/vm.js';
    import {setItem,countObj} from '../../kits/localStorage.js';
	export default{
		components:{silder,addSub},
		data(){
			return {
				id : 0,  //表示商品id
				imgs:[],
                info:{},
                receive:0,
                isShow:false
			}
		},
		created(){
            // 获取url传入的商品id值
			this.id = this.$route.params.id;
			this.getimgs();
            this.getinfo();
		},
		methods:{
            // 1.0 获取商品详细描述
			getinfo(){
				var url = this.$common.apidomain +'/api/goods/getinfo/'+this.id;
				this.$http.get(url).then(function(res){
					//判断状态
                    var body = res.body;
					if(body.status != 0 ){
						this.$common.Toast(body.message);
						return;
					}
					this.info =res.body.message[0];
				});
			},
			getimgs(){
				var url  = this.$common.apidomain + '/api/getthumimages/'+this.id;
				this.$http.get(url).then(function(res){
					//判断状态
                    var body = res.body;
					if(body.status != 0 ){
						this.$common.Toast(body.message);
						return;
					}
				    this.imgs =res.body.message;
				});
			},
            // 接受子组件传递过来的值
            getProductNum(num){
                this.receive = num;
                // console.log(num);
            },
            // 将数字传递到APP.vue中
            addCart(){
                //触发事件
                vm.$emit(COUNTSTR,this.receive);
                // 存储数据
                countObj.goodId = this.id;
                countObj.count = this.receive;
                setItem(countObj);
                this.isShow = !this.isShow;
            },
            payMoneyNow(){
                this.$router.push('/shopcar')
            },
            //动画钩子函数
            beforeEnter(el){
                el.style.transform = 'translate(0px,0px)';
            },
            Enter(el,done){
                el.offsetWidth;
                el.style.transform = 'translate(90px,417px)';
                done();
            },
            afterEnter(el){
                // el.style.transform = 'translate(0px,0px)';
                this.isShow = !this.isShow;
            }

		}
	}

</script>

<style scoped>
.silder{
    border:1px solid rgba(0,0,0,0.4);
    border-radius: 5px;
    margin: 5px;
}

#buy,#params,#other
{
    margin: 5px;
    padding: 5px;
    border:1px solid rgba(0,0,0,0.4);
    border-radius: 5px;
}
.line{
    height: 1px;
    border: 1px solid rgba(0,0,0,0.2);
}
#buy ul,#params ul{
    padding-left: 0px;
}
 #buy h4{
	 color:#0094ff;
	padding: 5px;
 }
 #buy li,#params li{
	 list-style: none;
	 padding: 8px;
 }

#buy .price span{
    color:red;
}

#other .imgdesc{
    margin-bottom: 20px;
}
.info-ball{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #f00;
    position: absolute;
    top:480px;
    left:147px;
    transition:all 0.4s ease;
    z-index: 100000;
}
</style>