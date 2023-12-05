import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  addItem: obj => {},
  removeItem: id => {},
  totalAmount: 0
});
export const CartContextProvider = props => {
  const [itemState, setItemState] = useState([]);
  const addItemHandler = newItem => {
    const found = itemState.find(element => element._id === newItem._id);
    if (found) {
      const prevState = [...itemState];
      found.count += newItem.count;
      setItemState(prevState);
    } else {
      setItemState(item => [...item, newItem]);
    }
  };

  const removeItemHandler = id => {
    const removeData = itemState.filter(item => item._id !== id);
    setItemState(removeData);
  };
  const totalAmount = itemState.reduce((curr, item) => {
    return (curr = curr + item.price * item.count);
  }, 0);
  const contextValue = {
    items: itemState,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    totalAmount: totalAmount
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
