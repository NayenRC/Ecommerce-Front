import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../molecules/CartItem";
import "../../styles/components/organisms/CartSidebar.css";

const CartSidebar = () => {
  const {
    cart,
    isOpen,
    toggleCart,
    totalPrice,
    increase,
    decrease,
    removeFromCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCartPage = () => {
    toggleCart();
    navigate("/carrito");
  };

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={toggleCart} />}

      <aside className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Carrito</h2>
          <button className="close-btn" onClick={toggleCart}>
            ✕
          </button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <p className="cart-empty">Tu carrito está vacío</p>
          ) : (
            cart.map((item) => (
              <CartItem
                key={item.productoId}
                item={item}
                increase={increase}
                decrease={decrease}
                removeFromCart={removeFromCart}
              />
            ))
          )}
        </div>

        <div className="cart-footer">
          <h3>
            Total: <span>${totalPrice}</span>
          </h3>

          <button className="view-cart-btn" onClick={goToCartPage}>
            Ver carrito completo
          </button>

          <button className="pay-btn">Finalizar Compra</button>
        </div>
      </aside>
    </>
  );
};

export default CartSidebar;
