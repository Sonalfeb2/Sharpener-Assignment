import "./Cart.css";
import CartContext from "../store/CartContext";
import { useContext, useState } from "react";
import Modal from "../ui/Modal";
const Cart = () => {
  const CartCtx = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const badge = CartCtx.items.reduce((curr, item) => {
    return (curr = curr + item.count);
  }, 0);
  const showCartHandler = () => {
    setShowCart(!showCart);
  };
  const removeItem = id => {
    CartCtx.removeItemHandler(id);
  };
  return (
    <div>
      <button className="cart" onClick={showCartHandler}>
        Cart- {badge}
      </button>
      {showCart &&
        <Modal onClose={() => setShowCart(!showCart)}>
          <div>
            <ul>
              {CartCtx.items.map(item =>
                <li key={item.id}>
                  {item.name}-{item.price} , Quantity {item.count}
                  <button CartHandler={() => removeItem(item.id)}>
                    Remove
                  </button>
                </li>
              )}
            </ul>
            <hr />
            <div className="amount">
              <p className="amount_heading">Total Amount</p>
              <p>
                Rs. {CartCtx.totalAmount}
              </p>
            </div>
            <hr />
            <div className="open_close">
              <button onClick={() => setShowCart(!showCart)}>Close</button>
              <button>Purchase</button>
            </div>
          </div>
        </Modal>}
    </div>
  );
};
export default Cart;
