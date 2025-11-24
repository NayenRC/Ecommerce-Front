import React from "react";
import ProductoCard from "../molecules/ProductoCard";
import "../../styles/components/organisms/ProductoList.css";

function ProductoList({ products, admin = false }) {
  return (
    <div className="productos-grid">
      {products.map((product) => (
        <ProductoCard key={product.producto_id} producto={product} admin={admin}
        />
      ))}
    </div>
  );
}

export default ProductoList;

