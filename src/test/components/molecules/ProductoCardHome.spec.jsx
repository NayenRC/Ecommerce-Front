import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductoCardHome from "../../../components/molecules/ProductoCardHome";
import { CartContext } from "../../../context/CartContext";

const fakeAddToCart = jasmine.createSpy("addToCart");

const FakeCartProvider = ({ children }) => (
    <CartContext.Provider value={{ addToCart: fakeAddToCart }}>
        {children}
    </CartContext.Provider>
);

describe("ProductoCardHome Molecule", () => {
    const mockProduct = {
        producto_id: 1,
        nombre: "Tónico Hidratante",
        precio: 5990,
        imagenUrl: "tonico.jpg",
    };

    beforeEach(() => {
        fakeAddToCart.calls.reset();
    });

    it("renderiza el nombre del producto", () => {
        render(
            <FakeCartProvider>
                <ProductoCardHome product={mockProduct} />
            </FakeCartProvider>
        );

        expect(screen.getByText("Tónico Hidratante")).toBeTruthy();
    });

    it("renderiza el precio del producto", () => {
        render(
            <FakeCartProvider>
                <ProductoCardHome product={mockProduct} />
            </FakeCartProvider>
        );

        expect(screen.getByText("$5990")).toBeTruthy();
    });

    it("renderiza la imagen correctamente", () => {
        render(
            <FakeCartProvider>
                <ProductoCardHome product={mockProduct} />
            </FakeCartProvider>
        );

        const img = screen.getByRole("img");
        expect(img.getAttribute("src")).toBe("tonico.jpg");
    });

    it("renderiza el botón de añadir al carrito", () => {
        render(
            <FakeCartProvider>
                <ProductoCardHome product={mockProduct} />
            </FakeCartProvider>
        );

        expect(screen.getByText(/Añadir/i)).toBeTruthy();
    });

    it("llama a addToCart cuando se hace clic en el botón", () => {
        render(
            <FakeCartProvider>
                <ProductoCardHome product={mockProduct} />
            </FakeCartProvider>
        );

        fireEvent.click(screen.getByText(/Añadir/i));

        expect(fakeAddToCart).toHaveBeenCalled();
        expect(fakeAddToCart).toHaveBeenCalledWith({
            productoId: 1,
            nombre: "Tónico Hidratante",
            precio: 5990,
            imagenUrl: "tonico.jpg",
        });
    });

});
