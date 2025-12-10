import Input from "../atoms/Input";

function ProductoEditForm({ producto, handleChange, categorias = [] }) {
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

      <label>Categoría</label>
      <Input
        type="select"
        name="categoriaId"
        className="filtro-select"   
        value={producto.categoriaId || ""}
        onChange={handleChange}
        options={[
          { value: "", label: "Selecciona una categoría" },
          ...categorias.map((c) => ({
            value: c.categorias_id,
            label: c.nombreCategorias,
          })),
        ]}
      />
    </div>
  );
}

export default ProductoEditForm;
