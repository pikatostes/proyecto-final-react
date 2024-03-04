// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Shop from "./Shop";
import ShoppingCart from "./ShoppingCart";
import { ShoppingCartProvider } from "./ShoppingCartContext";

const App = () => {
  return (
    <Router>
      <ShoppingCartProvider>
        <Routes>
          <Route path="/" exact component={Shop} />
          <Route path="/shopping-cart" component={ShoppingCart} />
        </Routes>
      </ShoppingCartProvider>
    </Router>
  );
};

export default App;
