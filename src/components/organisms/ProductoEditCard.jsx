import ProductoEditForm from "../molecules/ProductoEditForm";
import Button from "../atoms/Button";

function ProductoEditCard({ producto, handleChange, guardar, volver }) {
  return (
    <div className="edit-card">

      <h1 className="edit-title">Edición de Producto</h1>

      <ProductoEditForm producto={producto} handleChange={handleChange} />

      <div className="botones">
        <Button
          text="Volver"
          className="btn-volver"
          onClick={volver}
        />

        <Button
          text="Guardar"
          className="btn-guardar"
          onClick={guardar}
        />
      </div>

    </div>
  );
}

export default ProductoEditCard;
