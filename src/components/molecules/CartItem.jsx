import React from "react";
import QuantityButton from "../atoms/QuantityButton";
import PriceText from "../atoms/PriceText";
import "../../styles/components/molecules/CartItem.css";

const CartItem = ({ item, increase, decrease, removeFromCart }) => {
  const imageSrc = item.imagenUrl || item.imagen || item.urlImagen;

  return (
    <div className="cart-item">
      {imageSrc && (
        <img src={imageSrc} alt={item.nombre} className="cart-item-img" />
      )}

      <div className="cart-item-info">
        <h4 className="cart-item-name">{item.nombre}</h4>
        <PriceText value={item.precio} />

        <div className="cart-item-qty">
          <QuantityButton onClick={() => decrease(item.productoId)}>
            -
          </QuantityButton>
          <span className="cart-item-count">{item.cantidad}</span>
          <QuantityButton onClick={() => increase(item.productoId)}>
            +
          </QuantityButton>
        </div>
      </div>

      <button
        className="cart-item-delete"
        onClick={() => removeFromCart(item.productoId)}
      >
        🗑
      </button>
    </div>
  );
};

export default CartItem;
