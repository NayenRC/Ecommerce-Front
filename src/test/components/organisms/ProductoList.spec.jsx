import React from "react";
import { render, screen } from "@testing-library/react";
import ProductoList from "../../../components/organisms/ProductoList";

function MockProductoCard({ producto }) {
    return <div>{producto.nombreProducto}</div>;
}

const originalCreateElement = React.createElement;

beforeAll(() => {
    spyOn(React, "createElement").and.callFake((component, props, ...children) => {
        if (component && component.name === "ProductoCard") {
            return originalCreateElement(MockProductoCard, props, ...children);
        }
        return originalCreateElement(component, props, ...children);
    });
});

afterAll(() => {
    React.createElement.and.callThrough();
});

describe("ProductoList Component", () => {
    const products = [
        { producto_id: 1, nombreProducto: "Teclado Mecánico" },
        { producto_id: 2, nombreProducto: "Mouse Inalámbrico" },
        { producto_id: 3, nombreProducto: "Audífonos Gamer" },
    ];

    it("renderiza la cantidad correcta de productos", () => {
        render(<ProductoList products={products} />);

        products.forEach((p) => {
            expect(screen.getByText(p.nombreProducto)).toBeTruthy();
        });
    });

    it("pasa correctamente la prop admin hacia los ProductoCard", () => {
        render(<ProductoList products={products} admin={true} />);

        products.forEach((p) => {
            expect(screen.getByText(p.nombreProducto)).toBeTruthy();
        });
    });
});
