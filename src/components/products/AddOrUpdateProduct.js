import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";
//useEffect:component did mount yerinek ullanıcaz,lifesycl tek bir operasyonda toplamışlar
//useState:setState yerine kullanıcaz
//...props mevcut fucnk proplarına ekle
function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  //stateki product ı setproduct fonk ile set edebilirim demek
  const [product, setProduct] = useState({ ...props.product });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    //direkt buraya gelmiş categori sayfasına gelmemiş
    //önce bir categorileri toparladık
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  }, [props.product]); //props.productı izle
  function handleChange(event) {
    //textbox ın name ini ve value sunu atadık
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      //önceki product ın name değerini control ediyoruz
      //eğer categori id alano varsa int e çevir
      //çünkü categoryId int olmalı aks takdirde direkt value olarak bas
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
    validate(name,value);
  }
  function validate(name,value) {
    if (name === "productName" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "Ürün ismi olmalıdır",
      }));
    }else{
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "",
      }));
    }
  }
  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      //daha önceki sayfalara yönlendirme yapmak için
      history.push("/");
    });
  }
  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}
export function getProductById(products, productId) {
  let product = products.find((product) => product.id == productId) || null;
  return product;
}

function mapStateToProps(state, ownProps) {
  //parametreleren prodcutıd yi çek
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}

const mapDistpatchToProps = {
  getCategories,
  saveProduct,
};
export default connect(
  mapStateToProps,
  mapDistpatchToProps
)(AddOrUpdateProduct);
