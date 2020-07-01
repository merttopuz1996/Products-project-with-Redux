import *as actionTypes from './actionTypes'


//category parametresi gönderdik
export function changeCategory(category){

    //obje döndürüyor, type in changecategory ve payload ise
    //gönderilen categorynin kendisidir
    //reducer bu chanecategory i gördüğü anda state i payload daki 
    //değer olarak set et
    return {type:actionTypes.CHANGE_CATEGORY,payload:category}


    

}
 export function getCategoriesSuccess(categories){
   //categories: result
   return{type:actionTypes.GET_CATEGORİES_SUCCESS,payload:categories}
 }

export function getCategories(){
    
  return function(dispatch){
      let url ="http://localhost:3000/categories";
       return fetch(url)
       .then(response =>response.json())
       //fonk.a result geçtik  
       .then(result =>dispatch(getCategoriesSuccess(result)));
    };
}






















