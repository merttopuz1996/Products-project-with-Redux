import *as actionTypes from '../actions/actionTypes'
import initialState from './initialState';
//parametre olarak action ismi ve state in kendisi
export default function changeCategoryReducer(state =initialState.currentCategory,action){
  switch (action.type) {
      case actionTypes.CHANGE_CATEGORY:
          //statimizi return edicek
      return action.payload
      

      default:
          //action gönderilmemişse
          return state;
  }

}