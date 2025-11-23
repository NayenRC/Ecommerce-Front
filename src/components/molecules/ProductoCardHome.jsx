
import React from "react";


function ProductoCardHome({ product }) {
    return (
        <div className="producto-card">
            <img
                src={product.imagenUrl}
                alt={product.nombre}
                className="producto-img"
            />

            <h3 className="producto-nombre">{product.nombre}</h3>

            <p className="producto-descripcion">{product.descripcion}</p>

            <p className="producto-precio">${product.precio}</p>

            <a href={`/producto/${product.producto_id}`} className="btn-detalles">
                Ver detalles
            </a>
        </div>
    );
}

export default ProductoCardHome;
