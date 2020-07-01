import *as actionTypes from '../actions/actionTypes'
import initialState from './initialState';
//parametre olarak action ismi ve state in kendisi
export default function categoryListReducer(state =initialState.categories,action){
  switch (action.type) {
      case actionTypes.GET_CATEGORİES_SUCCESS:
          //payloaddan gelen apiler benin state imdir
      return action.payload
    
      default:
          //action gönderilmemişse
          return state;
  }

}