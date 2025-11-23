import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import ProductosService from "../../services/ProductosService";
import ImagenesService from "../../services/ImagenesService";
import ProductoListHome from "../../components/organisms/ProductoListHome";

import "../../styles/pages/Home.css";

function Home() {

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

        setProductos(productosImagen.slice(0, 2)); // 🔥 Solo dos productos destacados
      } catch (error) {
        console.error("Error cargando productos:", error);
      }
    };

    cargarDatos();
  }, []);

  return (
    <Container fluid className="home-container">

      {/* TÍTULO */}
      <div className="home-box">
        <h1 className="home-title">Bienvenid@s a 미지 Beauty</h1>
      </div>

      {/* TEXTO */}
      <div className="home-box">
        <p className="home-text">
          En <strong>Miji Beauty</strong> creemos que la belleza coreana es más que un estilo,
          es un ritual de autocuidado. Aquí encontrarás productos auténticos, innovadores y
          seleccionados especialmente para resaltar tu esencia.
        </p>
      </div>

      {/* PRODUCTOS DESTACADOS */}
      <div className="home-box">
        <h2 className="home-subtitle">Productos Destacados</h2>

        <ProductoListHome products={productos} />

        <div className="home-ver-mas">
          <a href="/productos" className="home-btn-mas">
            Ir a productos &gt;
          </a>
        </div>
      </div>

    </Container>
  );
}

export default Home;
