import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/molecules/CartItem";
import { useNavigate } from "react-router-dom";
import { generarMensaje } from "../../utils/GenerarMensaje";
import "../../styles/pages/Carrito.css";

const Carrito = () => {
  const { cart, totalPrice, increase, decrease, removeFromCart } =
    useContext(CartContext);

  const navigate = useNavigate();

  const handleIrCheckout = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      generarMensaje("Debes iniciar sesión para continuar", "error");
      navigate("/login");
      return;
    }

    navigate("/checkout");
  };

  return (
    <div className="cart-page">
      <h1 className="cart-page-title">Tu Carrito</h1>

      {cart.length === 0 ? (
        <p className="cart-page-empty">Tu carrito está vacío</p>
      ) : (
        <>
          <div className="cart-page-items">
            {cart.map((item) => (
              <CartItem
                key={item.productoId}
                item={item}
                increase={increase}
                decrease={decrease}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>

          <div className="cart-page-summary">
            <h2>Resumen</h2>
            <p>
              Total: <strong>${totalPrice}</strong>
            </p>

            <button className="cart-page-pay" onClick={handleIrCheckout}>
              Finalizar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;
