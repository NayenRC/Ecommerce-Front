import React from "react";
import { useState } from "react";
import BuscarInput from "../atoms/BuscarInput";
import ButtonBuscar from "../atoms/ButtonBuscar";

function BuscarBar({ onBuscar }) {
  const [buscar, setBuscar] = useState("");

  const handleSearch = () => {
    if (buscar.trim() !== "") onBuscar(buscar);
  };

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <BuscarInput
        value={buscar}
        onChange={(e) => setBuscar(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />

      <ButtonBuscar onClick={handleSearch} />
    </div>
  );
}

export default BuscarBar;
