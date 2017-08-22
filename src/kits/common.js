// 系统中所有的公共配置
import {Toast} from 'mint-ui'
var url = 'http://gank.io/api/data/' + encodeURI('福利');
export default{
    apidomain:'http://www.lovegf.cn:8899', // 所有数据请求的根域名地址
    gankApi:url,
    Toast,
    productNum:0
}