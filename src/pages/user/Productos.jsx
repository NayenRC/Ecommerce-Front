import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";  

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
  const location = useLocation(); 
  const params = new URLSearchParams(location.search);
  const search = params.get("search");

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

      } catch (error) {
        console.error("Error cargando datos:", error);
      }
    };

    cargarDatos();
  }, []);

  useEffect(() => {
    if (!search) return; 

    const buscar = async () => {
      try {
        const res = await ProductosService.buscarPorNombre(search);
        const productosBuscados = res.data || [];
        const imagenesRes = await ImagenesService.getAll();
        const imagenesApi = imagenesRes.data;

        const productosConImagen = productosBuscados.map((p) => {
          const imagen = imagenesApi.find(
            (img) => img.producto.producto_id === p.producto_id
          );
          return {
            ...p,
            imagenUrl: imagen ? `/img/${imagen.urlImagen}` : "/img/no-image.png",
          };
        });

        setFiltrados(productosConImagen);
      } catch (err) {
        console.error("Error buscando productos:", err);
      }
    };

    buscar();
  }, [search]);

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
          Descubre nuestra colección de productos de belleza coreana...
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

      {search && (
        <button className="btn-limpiar-search" onClick={() => window.location.href = "/productos"} > Limpiar búsqueda </button>
)}

      <ProductoList products={filtrados} />
    </div>
  );
}

export default Productos;
