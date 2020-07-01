import *as actionTypes from '../actions/actionTypes'
import initialState from './initialState';
//parametre olarak action ismi ve state in kendisi
export default function productListReducer(state =initialState.products,action){
  switch (action.type) {
      case actionTypes.GET_PRODUCTS_SUCCESS:
          //payloaddan gelen apiler benin state imdir
      return action.payload
    
      default:
          //action gönderilmemişse
          return state;
  }

}