import *as actionTypes from '../actions/actionTypes'
import initialState from './initialState';
//parametre olarak action ismi ve state in kendisi
export default function saveProductReducer(state =initialState.savedProduct,action){
  switch (action.type) {
      case actionTypes.UPDATE_PRODUCT_SUCCESS:
          //payloaddan gelen apiler benin state imdir
      return action.payload
    case actionTypes.CREATE_PRODUCT_SUCCESS:
        return action.payload
      default:
        
          return state;
  }

}