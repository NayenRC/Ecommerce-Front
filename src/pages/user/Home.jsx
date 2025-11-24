import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ProductosService from "../../services/ProductosService";
import ImagenesService from "../../services/ImagenesService";
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
            imagenUrl: imagen
              ? `/img/${imagen.urlImagen}`
              : "/img/no-image.png",

            nombre: p.nombreProducto || "Producto sin nombre",
            descripcion: p.descripcionProducto || "Descripción no disponible",
          };
        });

        const conImagen = productosImagen.filter(
          (p) => p.imagenUrl !== "/img/no-image.png"
        );

        setProductos(conImagen.slice(0, 2));

      } catch (error) {
        console.error("Error cargando productos:", error);
      }
    };

    cargarDatos();
  }, []);


  return (
    <Container className="home-container">

      <div className="home-box">
        <h1 className="home-title">Bienvenid@s a 미지 Beauty</h1>
      </div>

      <div className="home-box">
        <p className="home-text">
          En <strong>Miji Beauty</strong> creemos que la belleza coreana es más que un estilo,
          es un ritual de autocuidado. Aquí encontrarás productos auténticos, innovadores y
          seleccionados especialmente para resaltar tu esencia.
        </p>
      </div>

      <div className="productos-home-wrapper">

        <div className="productos-home-list">
          {productos.map((p) => (
            <div key={p.producto_id} className="home-card">

              <img src={p.imagenUrl} alt={p.nombre} className="home-card-img" />

              <h3 className="home-card-title">{p.nombre}</h3>

              <p className="home-card-desc">
                {p.descripcion?.slice(0, 160)}
              </p>

              <a className="home-card-btn" href={`/producto/${p.producto_id}`}>
                Ir a detalles
              </a>

            </div>
          ))}
        </div>

        <div className="home-circle-container">
          <a href="/productos" className="home-circle-btn">
            Ir a productos <br /> &gt;
          </a>
        </div>
      </div>

    </Container>
  );
}

export default Home;