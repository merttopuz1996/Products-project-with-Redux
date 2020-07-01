import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
import { Switch, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import notFound from "../common/notFound";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={DashBoard} />
        <Route path="/product" exact component={DashBoard} />
        <Route
          path="/saveproduct/:productId"
          component={AddOrUpdateProduct}
        >
        </Route>
        <Route path="/saveproduct" exact component={AddOrUpdateProduct} />
         <Route path="/cart" exact component={CartDetail} />
        <Route  component ={notFound}></Route>
       
      </Switch>
    </Container>
  );
}

export default App;
