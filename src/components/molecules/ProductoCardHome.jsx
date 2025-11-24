import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../../styles/components/molecules/ProductoCardHome.css";

const ProductoCardHome = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart({
      productoId: product.producto_id,
      nombre: product.nombre,
      precio: product.precio,
      imagenUrl: product.imagenUrl,
    });
  };

  return (
    <div className="producto-card-home">

      <div className="producto-img-box">
        <img src={product.imagenUrl} alt={product.nombre} />
      </div>

      <div className="producto-info-home">
        <h3 className="producto-nombre">{product.nombre}</h3>
        <p className="producto-precio-home">${product.precio}</p>
      </div>

      <button className="btn-add-home" onClick={handleAdd}>
        Añadir <br /> al carrito
      </button>

    </div>
  );
};

export default ProductoCardHome;

