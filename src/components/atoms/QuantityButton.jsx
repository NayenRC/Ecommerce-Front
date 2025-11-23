import React from "react";
import "../../styles/components/atoms/QuantityButton.css";

const QuantityButton = ({ children, onClick }) => {
  return (
    <button className="qty-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default QuantityButton;
