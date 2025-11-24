import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DetalleProductoLayout from "../../../components/organisms/DetalleProductoLayout";

describe("DetalleProductoLayout Organism", () => {

    const mockProducto = {
        imagenUrl: "test.jpg",
        nombreProducto: "Serum Coreano",
        precio: 9990,
        descripcionProducto: "Hidrata y repara la piel"
    };

    it("renderiza imagen del producto", () => {
        render(
            <DetalleProductoLayout
                producto={mockProducto}
                cantidad={1}
                setCantidad={() => { }}
                handleAddToCart={() => { }}
            />
        );

        const img = screen.getByRole("img");
        expect(img).toBeTruthy();
    });

    it("muestra el nombre del producto", () => {
        render(
            <DetalleProductoLayout
                producto={mockProducto}
                cantidad={1}
                setCantidad={() => { }}
                handleAddToCart={() => { }}
            />
        );

        expect(screen.getByText("Serum Coreano")).toBeTruthy();
    });

    it("llama a handleAddToCart al hacer click en el botón", () => {
        const mockAdd = () => (mockAdd.called = true);
        mockAdd.called = false;

        render(
            <DetalleProductoLayout
                producto={mockProducto}
                cantidad={1}
                setCantidad={() => { }}
                handleAddToCart={mockAdd}
            />
        );

        fireEvent.click(screen.getByText("Añadir al carrito"));
        expect(mockAdd.called).toBeTrue();
    });

    it("renderiza el selector de cantidad", () => {
        render(
            <DetalleProductoLayout
                producto={mockProducto}
                cantidad={2}
                setCantidad={() => { }}
                handleAddToCart={() => { }}
            />
        );

        const select = screen.getByDisplayValue("2");
        expect(select).toBeTruthy();
    });

});
