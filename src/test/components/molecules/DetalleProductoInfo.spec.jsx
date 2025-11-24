import React from "react";
import { render, screen } from "@testing-library/react";
import DetalleProductoInfo from "../../../components/molecules/DetalleProductoInfo";

describe("DetalleProductoInfo Component", () => {

    const producto = {
        nombreProducto: "Audífonos Gamer",
        descripcionProducto: "Sonido envolvente 7.1",
        precio: 49990
    };

    it("renderiza el nombre del producto correctamente", () => {
        render(<DetalleProductoInfo producto={producto} />);

        const titulo = screen.getByText("Audífonos Gamer");
        expect(titulo).toBeTruthy();
        expect(titulo.tagName).toBe("H1"); 
    });

    it("renderiza la descripción del producto", () => {
        render(<DetalleProductoInfo producto={producto} />);

        const descripcion = screen.getByText("Sonido envolvente 7.1");
        expect(descripcion).toBeTruthy();
        expect(descripcion.tagName).toBe("P"); 
    });

    it("renderiza el precio del producto con formato $", () => {
        render(<DetalleProductoInfo producto={producto} />);

        const precio = screen.getByText("$49990");
        expect(precio).toBeTruthy();
    });

    it("aplica las clases correctas", () => {
        render(<DetalleProductoInfo producto={producto} />);

        const titulo = screen.getByText("Audífonos Gamer");
        const descripcion = screen.getByText("Sonido envolvente 7.1");
        const precio = screen.getByText("$49990");

        expect(titulo.classList.contains("detalle-titulo")).toBeTrue();
        expect(descripcion.classList.contains("detalle-descripcion")).toBeTrue();
        expect(precio.classList.contains("detalle-precio")).toBeTrue();
    });

});
