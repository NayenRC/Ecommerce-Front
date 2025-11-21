import React from "react";

const Button = ({ text, className = "", ...props }) => {
  return (
    <button className={className} {...props}>
      {text}
    </button>
  );
};

export default Button;

