import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../../styles/components/atoms/CartButton.css";

const CartButton = () => {
  const { totalItems, toggleCart } = useContext(CartContext);

  return (
    <button className="cart-button" onClick={toggleCart}>
      🛒 {totalItems}
    </button>
  );
};

export default CartButton;
