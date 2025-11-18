import React from 'react';
import Image from '../../components/atoms/Image';
import Text from '../../components/atoms/Text';
import Url from '../../components/atoms/Url';
import { Container } from 'react-bootstrap';


function Home() {
  return (
    <Container fluid className="home-container">
      <div className="home-section">

        <h1 className="home-title">Allan</h1>

        <Text className="home-text">
          Estudiante de informática Duoc UC
        </Text>

        <Text className="home-text">
          <Url href="https://github.com/AllanxSF">
            https://github.com/AllanxSF
          </Url>
        </Text>

        <Text className="home-text">
          Bienvenido a mi portafolio personal donde comparto mis proyectos y
          noticias recientes. ¡Explora y conoce más sobre mi trabajo!
        </Text>
      </div>
    </Container>
  );
}

export default Home;

