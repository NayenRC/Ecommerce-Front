import React from 'react';
import Image from '../../components/atoms/Image';
import Text from '../../components/atoms/Text';
import Url from '../../components/atoms/Url';
import { Container } from 'react-bootstrap';
import "../../styles/pages/Home.css";


function Home() {
  return (
    <Container fluid className="home-container">

      {/* Caja 1: Título */}
      <div className="home-box title-box">
        <h1 className="home-title">Bienvenid@s a 미지 Beauty</h1>
      </div>

      {/* Caja 2: Texto */}
      <div className="home-box text-box">
        <Text className="home-text">
          En <strong>Miji Beauty</strong> creemos que la belleza coreana es más que un estilo,
          es un ritual de autocuidado. Aquí encontrarás productos auténticos, innovadores y
          seleccionados especialmente para resaltar tu esencia.
          Descubre la magia del skincare y maquillaje K-Beauty en un solo lugar.
        </Text>
      </div>

    </Container>

  );
}

export default Home;

