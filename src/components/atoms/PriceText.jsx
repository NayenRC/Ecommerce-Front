import React from "react";
import "../../styles/components/atoms/PriceText.css";

const PriceText = ({ value }) => {
  return <p className="price-text">${value}</p>;
};

export default PriceText;
