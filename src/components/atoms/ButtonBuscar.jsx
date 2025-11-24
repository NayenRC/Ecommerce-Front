import React from "react";

function ButtonBuscar({ onClick }) {
    return (
        <button className="btn-search" onClick={onClick}>
            Buscar
        </button>
    );
}

export default ButtonBuscar;