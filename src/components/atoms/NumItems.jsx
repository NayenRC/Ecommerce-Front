import React from "react";

function NumItems({ options = [], className = "", ...props }) {
  return (
    <select className={className} {...props}>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export default NumItems;
