
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../../styles/components/molecules/ProductoCard.css";

const ProductoCard = ({ producto }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart({
      productoId: producto.productoId,
      nombre: producto.nombre,
      precio: producto.precio,
      imagenUrl: producto.imagenUrl, // adapta al nombre real
    });
  };

  return (
    <div className="producto-card">
      {/* resto de tu card... */}
      <button className="btn-add-cart" onClick={handleAdd}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductoCard;
