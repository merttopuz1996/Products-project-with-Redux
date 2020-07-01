import *as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function cartReducer(state =initialState.cart,action){
switch (action.type) {
    case actionTypes.ADD_TO_CART:
        //eğer eklenmeye çalışılan ürün daha önce sepette varsa state:sepet 
        //her bir elemanın idsi payoad ile gelen productin id si ise adde ıtem dolu olucak
          var addedItem =state.find(c=>c.product.id ===action.payload.product.id);
    if(addedItem){
        var newState =state.map(cartItem =>{
            //cartItem yerine payload olucak cartıtem in kendisi
            if(cartItem.product.id ===action.payload.product.id){
                return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
     
            }
            //
            return cartItem;
        })
      return newState;
    }else{
        //statein bir kopyasını al ve o kopyaya aciton ile gelen payload ı ekle reduxta push pop yok
   return [...state,{...action.payload}]

    }
    case actionTypes.REMOVE_FROM_CART:
        //sepetteki her bir eleman cartıtem için ilgili cartıtem in
        //p.id !== acsiyonla gelen payload.id is(action la direkt product gönderdiğimiz için)
       //parametre ile gönderilenden farklı olanları filtrele
        const newState2 =state.filter(cartItem=>cartItem.product.id !==action.payload.id)
    return newState2; 
  default:
    return state;
}


}