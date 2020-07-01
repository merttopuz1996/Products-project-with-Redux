import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  //categories: result
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}
export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}
export function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}
export function saveProductApi(product) {
  //eğer id gönderilmemişse bir ekleme gönderilmişse günceleme
  //adrese post işlemi yap
  //id varsa post değilse put
  return fetch("http://localhost:3000/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    //body adrese gönderdiğimi datadır post yada put yapıtğımızda
    //elimizdeki json ı stringify yapmamız lazım datayı bz gönderiyoruz
    body: JSON.stringify(product)
  })
  //sonucu handlerespona yolladık
    .then(handleResponse)
    .catch(handleError);
}
export function saveProduct(product) {
  //dispatch aciton u devreye sokar
  return function (dispatch) {
    //parametreile gelen product ı yolladık
    //eğer göndeirlen product.id varsa update actionı çalıştır
    //yoksa create i .çalıştır ve saved ı yolla
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id
          ? 
            dispatch(updateProductSuccess(savedProduct))
          : dispatch(createProductSuccess(savedProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}
export async function handleResponse(response){
 if(response.ok){
   //responsun sonucuna göre karar verecek bi durum oluşturduk
   return response.json()
 }
  const error =await response.text()
  throw new Error(error)
}
export function handleError(error){
  console.log( " bir api hatası oluştu")
  throw error;
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return (
      fetch(url)
        .then((response) => response.json())
        //fonk.a result geçtik
        .then((result) => dispatch(getProductsSuccess(result)))
    );
  };
}
