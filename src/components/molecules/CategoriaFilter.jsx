import Input from "../atoms/Input";

export default function CategoriaFilter({
  categorias,
  subcategorias,
  categoriaSeleccionada,
  setCategoriaSeleccionada,
  subcategoriaSeleccionada,
  setSubcategoriaSeleccionada
}) {
  return (
    <div className="filtro-container">

      <Input
        type="select"
        className="filtro-select"
        value={categoriaSeleccionada}
        onChange={(e) => {
          setCategoriaSeleccionada(e.target.value);
          setSubcategoriaSeleccionada("");
        }}
        options={[
          { value: "", label: "Todas las categorías" },
          ...categorias.map((c) => ({
            value: c.categorias_id,
            label: c.nombreCategorias,
          })),
        ]}
      />

      <Input
        type="select"
        disabled={!categoriaSeleccionada}
        className="filtro-select"
        value={subcategoriaSeleccionada}
        onChange={(e) => setSubcategoriaSeleccionada(e.target.value)}
        options={[
          { value: "", label: "Todas las subcategorías" },
          ...subcategorias
            .filter((s) => s.categorias.categorias_id == categoriaSeleccionada)
            .map((s) => ({
              value: s.categoria_id,
              label: s.nombreCategoria,
            })),
        ]}
      />
    </div>
  );
}
