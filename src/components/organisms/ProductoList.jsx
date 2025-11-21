import React from "react";
import ProductoCard from "../molecules/ProductoCard";
import "../../styles/components/organisms/ProductoList.css";

function ProductoList({ products }) {
  return (
    <div className="productos-grid">
      {products.map((product) => (
        <ProductoCard key={product.producto_id} producto={product} />
      ))}
    </div>
  );
}

export default ProductoList;

