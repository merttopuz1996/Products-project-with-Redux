import {createStore, applyMiddleware} from 'redux'
import rootReducer from './index'
import thunk from 'redux-thunk'
 export default function configureStore(){
//fonnk içine root reducure geçtik
//tüm middlewarei reducerlarrımıza birlikte reduxa ilettik   
return createStore(rootReducer,applyMiddleware(thunk))
 }