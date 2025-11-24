import { useEffect, useState } from "react";

import ProductosService from "../../services/ProductosService";
import ImagenesService from "../../services/ImagenesService";
import ProductoList from "../../components/organisms/ProductoList";
import CategoriaService from "../../services/CategoriaService";
import SubcategoriaService from "../../services/SubCategoriaService";
import CategoriaBar from "../../components/organisms/CategoriaBar";

import "../../styles/pages/Productos.css";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubcategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState("");

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const productosRes = await ProductosService.getAll();
        const imagenesRes = await ImagenesService.getAll();
        const categoriasRes = await CategoriaService.getAll();
        const subcategoriasRes = await SubcategoriaService.getAll();
        const productosApi = productosRes.data;
        const imagenesApi = imagenesRes.data;

        const productosImagen = productosApi.map((p) => {
          const imagen = imagenesApi.find(
            (img) => img.producto.producto_id === p.producto_id
          );
          return {
            ...p,
            imagenUrl: imagen ? `/img/${imagen.urlImagen}` : "/img/no-image.png",
          };
        });

        setProductos(productosImagen);
        setFiltrados(productosImagen);
        setCategorias(categoriasRes.data);
        setSubcategorias(subcategoriasRes.data);

        console.log("Productos FINAL:", productosImagen);

      } catch (error) {
        console.error("Error cargando datos:", error);
      }
    };

    cargarDatos();
  }, []);

  useEffect(() => {
    let resultado = productos;

    if (categoriaSeleccionada) {
      resultado = resultado.filter(
        (p) =>
          p.categoria?.categorias?.categorias_id == categoriaSeleccionada
      );
    }

    if (subcategoriaSeleccionada) {
      resultado = resultado.filter(
        (p) => p.categoria?.categoria_id == subcategoriaSeleccionada
      );
    }

    setFiltrados(resultado);
  }, [categoriaSeleccionada, subcategoriaSeleccionada, productos]);

  return (
    <div className="productos-container">

      <div className="productos-header">
        <h1 className="productos-titulo">Productos</h1>
        <p className="productos-descripcion">
          Descubre nuestra colección de productos de belleza coreana, creados
          para cuidar tu piel con fórmulas innovadoras, texturas ligeras y
          resultados visibles. Desde limpiadores suaves hasta tratamientos
          intensivos, cada producto está pensado para realzar tu belleza natural.
        </p>
      </div>

      <CategoriaBar
        categorias={categorias}
        subcategorias={subcategorias}
        categoriaSeleccionada={categoriaSeleccionada}
        setCategoriaSeleccionada={setCategoriaSeleccionada}
        subcategoriaSeleccionada={subcategoriaSeleccionada}
        setSubcategoriaSeleccionada={setSubcategoriaSeleccionada}
      />

      <ProductoList products={filtrados} />
    </div>
  );
}

export default Productos;
