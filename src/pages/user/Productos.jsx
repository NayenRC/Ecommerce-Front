import { useEffect, useState } from "react";
import ProductosService from "../../services/ProductosService";
import ImagenesService from "../../services/ImagenesService";
import ProductoList from "../../components/organisms/ProductoList";
import "../../styles/pages/Productos.css";

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const productosRes = await ProductosService.getAll();
        const imagenesRes = await ImagenesService.getAll();
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
      console.log("Productos FINAL:", productosImagen);
      } catch (error) {
        console.error("Error cargando datos:", error);
      }
    };
    cargarDatos();
  }, []);

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

      <ProductoList products={productos} />
    </div>
  );
}

export default Productos;
