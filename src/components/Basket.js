import React from "react";
import styled from "styled-components";
const Basket = ({ cartItems, onAdd, onRemove, remove }) => {
  const itemPrice = cartItems.reduce((accum, current) => {
    return accum + current.price * current.quantity;
  }, 0);
  return (
    <BasketCont>
      <Header>
        You Have
        <span>{cartItems.length === 0 ? "0" : cartItems.length}</span> Items In
        The Order-Box
      </Header>
      <Content>
        {cartItems.map((item) => {
          const { id, title, price } = item;
          return (
            <Single key={id}>
              <h3>{title}</h3>
              <BtnContainer>
                <ButtonPlus onClick={() => onAdd(item)}>+</ButtonPlus>
                <ButtonMinus onClick={() => onRemove(item)}>-</ButtonMinus>
              </BtnContainer>
              {item.quantity} x {price}
            </Single>
          );
        })}
        <Total>
          Total: <span>{cartItems.length === 0 ? "0" : itemPrice}KGZ</span>
        </Total>
        {cartItems.length !== 0 && (
          <RemoveAll onClick={remove}>Remove all</RemoveAll>
        )}
      </Content>
    </BasketCont>
  );
};

export default Basket;
const BasketCont = styled.div`
  background: #dda6f8;
  width: 100%;
  padding: 1rem;
  text-align: center;
`;
const Header = styled.h1`
  margin-bottom: 3rem;
`;
const Content = styled.div``;
const Single = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 10px 20px;
  position: relative;
  margin: 1rem 0;
  background: #0c0c0c;
  color: #fff;
`;
const BtnContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;
const ButtonPlus = styled.button`
  background: #ffc222;
  border: none;
  outline: none;
  border-radius: 7px;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
`;
const ButtonMinus = styled.button`
  background: #ffc222;
  border: none;
  outline: none;
  border-radius: 7px;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
`;
const Total = styled.button`
  margin-top: 5rem;
  background: #ffc222;
  border: none;
  outline: none;
  border-radius: 7px;
  padding: 10px 5rem;
  margin: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 800;
`;
const RemoveAll = styled.button`
  margin-top: 5rem;
  background: red;
  border: none;
  outline: none;
  border-radius: 7px;
  padding: 10px 5rem;
  margin: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 800;
`;
