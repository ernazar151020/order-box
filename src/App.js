import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import Basket from "./components/Basket";
import "./index.css";
import { data } from "./data/data";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const checkExist = cartItems.find((item) => item.id === product.id);
    if (checkExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...checkExist, quantity: checkExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const onRemove = (product) => {
    const checkExist = cartItems.find((item) => item.id === product.id);
    if (checkExist.quantity === 1) {
      const FilterRemove = cartItems.filter((item) => item.id !== product.id);
      setCartItems(FilterRemove);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...checkExist, quantity: checkExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const remove = () => {
    setCartItems([]);
  };
  const { products } = data;
  return (
    <AppSec className="App">
      <Menu products={products} onAdd={onAdd} />
      <Basket
        remove={remove}
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    </AppSec>
  );
}

export default App;

const AppSec = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    display: block;
  }
`;
