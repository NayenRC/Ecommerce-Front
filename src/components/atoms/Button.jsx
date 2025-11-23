import React from "react";

const Button = ({ children, text, className = "", ...props }) => {
  return (
    <button className={className} {...props}>
      {children || text}
    </button>
  );
};

export default Button;


