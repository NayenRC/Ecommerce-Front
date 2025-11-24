import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext} from "react";
import ProductosService from "../../services/ProductosService";
import ImagenesService from "../../services/ImagenesService";
import DetalleProductoLayout from "../../components/organisms/DetalleProductoLayout";
import "../../styles/pages/DetalleProducto.css";
import "../../styles/pages/DetalleProducto.css";
import { CartContext } from "../../context/CartContext";

export default function DetalleProducto() {

  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const cargar = async () => {
      try {
        const productosRes = await ProductosService.getAll();
        const imagenesRes = await ImagenesService.getAll();
        const productos = productosRes.data;
        const imagenes = imagenesRes.data;

        const productoEncontrado = productos.find(
          (p) => p.producto_id == id
        );

        if (!productoEncontrado) return;

        const img = imagenes.find(
          (img) => img.producto.producto_id == id
        );

        setProducto({
          ...productoEncontrado,
          imagenUrl: img ? `/img/${img.urlImagen}` : "/img/no-image.png",
        });
      } catch (e) {
        console.log("Error:", e);
      }
    };

    cargar();
  }, [id]);

  const handleAddToCart = () => {
    addToCart({
      productoId: producto.producto_id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagenUrl: producto.imagenUrl,
      cantidad: Number(cantidad),
    });
  };

  if (!producto) return <p>Cargando...</p>;

  return (
    <div className="detalle-producto-contenedor">
      <DetalleProductoLayout
        producto={producto}
        cantidad={cantidad}
        setCantidad={setCantidad}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
}
