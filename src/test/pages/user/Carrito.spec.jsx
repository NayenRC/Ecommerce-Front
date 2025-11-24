import React from "react";
import { render, screen } from "@testing-library/react";
import Carrito from "../../../pages/user/Carrito";
import { CartContext } from "../../../context/CartContext";

const renderWithCart = (cartValue) => {
    return render(
        <CartContext.Provider value={cartValue}>
            <Carrito />
        </CartContext.Provider>
    );
};

describe("Carrito Page", () => {
    it("muestra mensaje cuando el carrito está vacío", () => {
        renderWithCart({
            cart: [],
            totalPrice: 0,
            increase: () => { },
            decrease: () => { },
            removeFromCart: () => { },
        });

        expect(screen.getByText("Tu carrito está vacío")).toBeTruthy();
    });

    it("muestra productos cuando el carrito tiene items", () => {
        renderWithCart({
            cart: [
                {
                    productoId: 1,
                    nombre: "Serum Coreano",
                    precio: 15000,
                    cantidad: 1,
                },
            ],
            totalPrice: 15000,
            increase: () => { },
            decrease: () => { },
            removeFromCart: () => { },
        });

        expect(screen.getByText("Tu Carrito")).toBeTruthy();
        expect(screen.getByText("Serum Coreano")).toBeTruthy();
        expect(screen.getByText(/Total:/i)).toBeTruthy();
    });
});
