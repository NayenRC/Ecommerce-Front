import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CartSidebar from "../../../components/organisms/CartSidebar";
import { CartContext } from "../../../context/CartContext";
import { MemoryRouter } from "react-router-dom";

describe("CartSidebar Organism", () => {

    const mockContext = {
        cart: [],
        isOpen: true,
        toggleCart: jasmine.createSpy("toggleCart"),
        totalPrice: 0,
        increase: jasmine.createSpy("increase"),
        decrease: jasmine.createSpy("decrease"),
        removeFromCart: jasmine.createSpy("removeFromCart"),
    };

    const renderWithContext = (ctx) =>
        render(
            <CartContext.Provider value={ctx}>
                <MemoryRouter>
                    <CartSidebar />
                </MemoryRouter>
            </CartContext.Provider>
        );

    it("muestra el mensaje de carrito vacío", () => {
        renderWithContext(mockContext);

        expect(screen.getByText("Tu carrito está vacío")).toBeTruthy();
    });

    it("renderiza los items cuando el carrito no está vacío", () => {
        const ctxWithItems = {
            ...mockContext,
            cart: [
                { productoId: 1, nombre: "Serum", cantidad: 1, precio: 10000 },
            ],
        };

        renderWithContext(ctxWithItems);

        expect(screen.getByText("Serum")).toBeTruthy();
    });

    it("llama cuando se hace click en el botón cerrar", () => {
        renderWithContext(mockContext);

        const closeBtn = screen.getByText("✕");
        fireEvent.click(closeBtn);

        expect(mockContext.toggleCart).toHaveBeenCalled();
    });

    it("muestra el total correctamente", () => {
        const ctx = {
            ...mockContext,
            totalPrice: 25000,
        };

        renderWithContext(ctx);

        expect(screen.getByText("$25000")).toBeTruthy();
    });
});
