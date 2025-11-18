import React from 'react';
import { Container } from 'react-bootstrap';


const image = {
    src: 'https://i.pinimg.com/originals/5e/49/bb/5e49bb8cc1b6c36002cddd3a2b536245.jpg',
    alt: 'Not Found Image',
}

function NotFound() {
  return (
    <Container className="my-5">
      <h1>Página no encontrada</h1>
      <p>¿Estás seguro de que era aquí?</p>
      
      <Image src={image.src} alt={image.alt} className="" />
    </Container>
  );
}

export default NotFound;
