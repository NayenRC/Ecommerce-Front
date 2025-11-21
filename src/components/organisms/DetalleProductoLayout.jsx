import React from "react";
import Image from "../atoms/Image";
import DetalleProductoInfo from "../molecules/DetalleProductoInfo";
import DetalleProductoNi from "../molecules/DetalleProductoNi";

function DetalleProductoLayout({ producto }) {
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
        <DetalleProductoNi />
      </div>

    </div>
  );
}

export default DetalleProductoLayout;
