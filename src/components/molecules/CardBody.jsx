import React from 'react';
import Text from '../atoms/Text';

function CardBody({ title, description }) {
  return (
    <>
      <Text variant="h5" className="project-card-title">{title}</Text>
      <Text variant="p" className="project-card-description">{description}</Text>
    </>
  );
}

export default CardBody;
