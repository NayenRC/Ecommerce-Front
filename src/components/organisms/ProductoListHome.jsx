import React from "react";
import ProductoCardHome from "../molecules/ProductoCardHome";

function ProductoListHome({ products }) {
    return (
        <div className="producto-list">
            {products.map((product) => (
                <ProductoCardHome
                    key={product.producto_id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default ProductoListHome;

