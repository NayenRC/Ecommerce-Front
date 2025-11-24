import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/pagos/create-preference",
        {
          items: cart.map(item => ({
            title: item.nombre,
            quantity: item.cantidad,
            unit_price: item.precio,
          })),
        }
      );
      console.log("Respuesta del backend:", response.data);


      const urlPago = response.data.init_point;
      window.location.href = urlPago;

    } catch (error) {
      console.error("Error al iniciar pago:", error);
    }
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

          <button className="pay-btn" onClick={handleCheckout}>
            Finalizar Compra
          </button>
        </div>
      </aside>
    </>
  );
};

export default CartSidebar;
