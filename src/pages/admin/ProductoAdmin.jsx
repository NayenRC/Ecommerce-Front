import { useEffect, useState } from "react";
import ProductosService from "../../services/ProductosService";
import ImagenesService from "../../services/ImagenesService";
import ProductoList from "../../components/organisms/ProductoList";
import "../../styles/pages/Productos.css";

function ProductoAdmin() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const cargar = async () => {
      const productosRes = await ProductosService.getAll();
      const imagenesRes = await ImagenesService.getAll();
      const productosApi = productosRes.data;
      const imagenesApi = imagenesRes.data;

      const lista = productosApi.map(p => {
        const img = imagenesApi.find(
          (i) => i.producto.producto_id === p.producto_id
        );

        return {
          ...p,
          imagenUrl: img ? `/img/${img.urlImagen}` : "/img/no-image.png",
        };
      });

      setProductos(lista);
    };

    cargar();
  }, []);

  return (
    <div className="productos-container">
      <h1 className="productos-titulo">Administrar Productos</h1>

      <ProductoList products={productos} admin={true} />
    </div>
  );
}

export default ProductoAdmin;
