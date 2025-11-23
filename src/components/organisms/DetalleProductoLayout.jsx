import React from "react";
import Image from "../atoms/Image";
import DetalleProductoInfo from "../molecules/DetalleProductoInfo";
import NumItems from "../atoms/NumItems";

function DetalleProductoLayout({ producto, cantidad, setCantidad, handleAddToCart }) {
  return (
    <div className="detalle-layout">

      <div className="detalle-imagen">
        <Image
          src={producto.imagenUrl}
          alt={producto.nombreProducto}
        />
      </div>

      <div className="detalle-derecha">
        <DetalleProductoInfo producto={producto} />

        <NumItems
          options={[1, 2, 3, 4, 5]}
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          className="detalle-select"
        />

        <button className="btn-detalle-carrito" onClick={handleAddToCart}>
          Añadir al carrito
        </button>
      </div>

    </div>
  );
}

export default DetalleProductoLayout;
