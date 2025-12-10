import ProductoEditForm from "../molecules/ProductoEditForm";
import Button from "../atoms/Button";

function ProductoEditCard({ producto, handleChange, guardar, eliminar, volver, categorias =[], }) {
  return (
    <div className="edit-card">

      <h1>Edición de Producto</h1>

      <ProductoEditForm producto={producto} handleChange={handleChange} categorias={categorias} />

      <div className="botones">
        <Button className="btn-volver" onClick={volver} text="Volver" />
        <Button className="btn-guardar" onClick={guardar} text="Guardar" />
        <Button className="btn-eliminar" onClick={eliminar} text="Eliminar" />
      </div>

    </div>
  );
}

export default ProductoEditCard;
