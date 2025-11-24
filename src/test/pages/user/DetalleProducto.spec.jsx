import React from "react";
import { render, screen } from "@testing-library/react";
import DetalleProducto from "../../../pages/user/DetalleProducto";
import ProductosService from "../../../services/ProductosService";
import ImagenesService from "../../../services/ImagenesService";
import { CartContext } from "../../../context/CartContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("DetalleProducto Page", () => {


    const mockCart = {
        addToCart: jasmine.createSpy("addToCart")
    };

    const mockProducto = {
        producto_id: 1,
        nombre: "Tónico Facial",
        precio: 5000,
        descripcionProducto: "Refrescante",
    };

    const mockImagen = {
        urlImagen: "tonico.jpg",
        producto: { producto_id: 1 }
    };

    beforeEach(() => {
        spyOn(ProductosService, "getAll").and.returnValue(
            Promise.resolve({ data: [mockProducto] })
        );

        spyOn(ImagenesService, "getAll").and.returnValue(
            Promise.resolve({ data: [mockImagen] })
        );
    });

    it("muestra 'Cargando...' primero", () => {
        render(
            <CartContext.Provider value={mockCart}>
                <MemoryRouter initialEntries={["/producto/1"]}>
                    <Routes>
                        <Route path="/producto/:id" element={<DetalleProducto />} />
                    </Routes>
                </MemoryRouter>
            </CartContext.Provider>
        );

        expect(screen.getByText("Cargando...")).toBeTruthy();
    });

    it("llama a addToCart al presionar 'Añadir al carrito'", async () => {
        render(
            <CartContext.Provider value={mockCart}>
                <MemoryRouter initialEntries={["/producto/1"]}>
                    <Routes>
                        <Route path="/producto/:id" element={<DetalleProducto />} />
                    </Routes>
                </MemoryRouter>
            </CartContext.Provider>
        );

        const boton = await screen.findByText("Añadir al carrito");
        boton.click();

        expect(mockCart.addToCart).toHaveBeenCalled();
    });

});
