import Input from "../atoms/Input";

function ProductoEditForm({ producto, handleChange }) {
  return (

    <div className="edit-form">

      <label>Nombre</label>
      <Input
        name="nombreProducto"
        value={producto.nombreProducto}
        onChange={handleChange}
      />

      <label>Precio</label>
      <Input
        type="number"
        name="precio"
        value={producto.precio}
        onChange={handleChange}
      />

      <label>Stock</label>
      <Input
        type="number"
        name="stock"
        value={producto.stock}
        onChange={handleChange}
      />
    </div>
  );
}

export default ProductoEditForm;
