import CategoriaFilter from "../molecules/CategoriaFilter";
import "../../styles/components/organisms/CategoriaBar.css";

function CategoriaBar({
  categorias,
  subcategorias,
  categoriaSeleccionada,
  setCategoriaSeleccionada,
  subcategoriaSeleccionada,
  setSubcategoriaSeleccionada
}) {
  return (
    <div className="categoria-filter-bar">
      <CategoriaFilter
        categorias={categorias}
        subcategorias={subcategorias}
        categoriaSeleccionada={categoriaSeleccionada}
        setCategoriaSeleccionada={setCategoriaSeleccionada}
        subcategoriaSeleccionada={subcategoriaSeleccionada}
        setSubcategoriaSeleccionada={setSubcategoriaSeleccionada}
      />
    </div>
  );
}

export default CategoriaBar;