import React from "react";
import Text from "../atoms/Text";

function DetalleProductoInfo({ producto }) {
  return (
    <div className="detalle-info">
      <Text variant="h1" className="detalle-titulo">
        {producto.nombreProducto}
      </Text>

      <Text className="detalle-descripcion">
        {producto.descripcionProducto}
      </Text>

      <Text className="detalle-precio">${producto.precio}</Text>
    </div>
  );
}

export default DetalleProductoInfo;
