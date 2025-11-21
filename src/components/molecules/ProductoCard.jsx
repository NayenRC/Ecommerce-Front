import React from "react";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import "../../styles/components/molecules/ProductoCard.css";

function ProductoCard({ producto }) {
  return (
    <div className="card-producto">

      <Link to={`/producto/${producto.producto_id}`}>
        <Image
          src={producto.imagenUrl}
          alt={producto.nombreProducto}
          className="card-img-producto"
        />
      </Link>

      <Text variant="h5" className="card-title-producto">
        {producto.nombreProducto}
      </Text>

      <Text className="categoria-producto">
        <strong>Categoría:</strong> {producto.categoria?.categorias?.nombreCategorias}, {producto.categoria?.nombreCategoria}
      </Text>

      <Text className="card-text-producto">
        {producto.descripcionProducto}
      </Text>

      <Text className="fw-bold">${producto.precio}</Text>

      <Link to={`/producto/${producto.producto_id}`}>
        <Button className="btn-detalles">Ver detalles</Button>
      </Link>

    </div>
  );
}

export default ProductoCard;
