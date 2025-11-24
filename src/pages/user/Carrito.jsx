import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/molecules/CartItem";
import CarritoService from "../../services/CarritoService";
import "../../styles/pages/Carrito.css";

const Carrito = () => {
  const { cart, totalPrice, increase, decrease, removeFromCart } =
    useContext(CartContext);

  
  const handleFinalizarCompra = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Debes iniciar sesión para comprar");
      return;
    }

    // Construimos el carrito
    const nuevoCarrito = {
      usuario: {
        id: user.id,
      },
      fechaCreacion: new Date().toISOString(),
      estado: { estadoId: 1 },          // Pendiente
      metodoPago: { metodoPagoId: 1 },  // Sin pago real
      detalleCarrito: JSON.stringify(cart),
      total: totalPrice,
    };

    try {
      await CarritoService.create(nuevoCarrito);
      alert("Compra registrada correctamente.");
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al guardar el carrito");
    }
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

          
            <button className="cart-page-pay" onClick={handleFinalizarCompra}>
              Finalizar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;
