import _ from 'lodash'
export default{
    namespaced:true,
    state:{
        //[productId->{productId,productName,price,number}]
        orderLines:new Map()
    },
    getters:{
        total(state){
            let result=0;
            for(let orderLine of state.orderLines.values()){
                result += orderLine.price*orderLine.number;
            }
            return result;
        }
    },
    mutations:{
        addShopCar(state,orderLine){
            state.orderLines.set(orderLine.productId,orderLine);
            //克隆对象，改变引用地址，目的是为了让监听机制监听到orderLine的改变
            state.orderLines=_.clone(state.orderLines);
            // state.orderLines=Object.assign({},state.orderLines);
        },
        clearShopCar(state){
            state.orderLines.clear();
            state.orderLines=_.clone(state.orderLines)
        }
    },
    actions:{
        //添加购物车不需要保存在数据库，不需要异步操作
        
    }
}