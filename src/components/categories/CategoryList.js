import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Badge } from "reactstrap";
import * as productActions from "../../redux/actions/productActions";
class CategoryList extends Component {
  componentDidMount() {
    // uyg. açıldığı anda categoryleri getir
    this.props.actions.getCategories();
  }
  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id)
  };
  render() {
    return (
      <div>
        <Badge color="warning">Categories</Badge>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              active={category.id === this.props.currentCategory.id}
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
//redux ta state = reducer
//reduxtaki state i proplara bağla
//map et bağla state i nereye componentin proplarına
function mapStateToProps(state) {
  return {
    //current category i proplara bağla reduxtaki reducerdan çek
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      //reduxtaki action buraya bağlancak
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}
//bir fonk döndürür categorylist i parametre alsın
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
