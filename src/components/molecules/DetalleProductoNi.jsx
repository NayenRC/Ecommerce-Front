import React from "react";
import NumItems from "../atoms/NumItems";
import Button from "../atoms/Button";

function DetalleProductoNi() {
  return (
    <div className="detalle-actions">
      <NumItems
        className="detalle-select"
        options={[1, 2, 3, 4, 5]}
      />

      <Button className="btn-detalle-carrito">
        Añadir al carrito
      </Button>
    </div>
  );
}

export default DetalleProductoNi;
