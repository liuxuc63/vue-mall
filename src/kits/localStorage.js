// 操作localStorage的文件
// 获取数据

// 添加数据

// 移除数据
// 定义常量
export const KEY = "goodsData";
export var countObj = {goodId:0,count:0}
// 数据增加
export function setItem(value){
    var jsonStr = localStorage.getItem(KEY) || '[]';
    var arr = JSON.parse(jsonStr);
    // console.log(arr);
    arr.push(value);
    localStorage.setItem(KEY,JSON.stringify(arr));
}
// 获取数据
export function getItem(){
    var jsonStr = localStorage.getItem(KEY) || '[]';
    return jSON.parse(jsonStr) ;
}

// 删除数据
export function removeItem(){

}