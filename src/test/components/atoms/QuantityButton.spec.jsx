import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import QuantityButton from "../../../components/atoms/QuantityButton";

describe("QuantityButton Atom", () => {

    it("renderiza el contenido dentro del botón", () => {
        render(<QuantityButton>+</QuantityButton>);
        expect(screen.getByText("+")).toBeTruthy();
    });

    it("llama a onClick cuando se hace click", () => {
        const mockClick = jasmine.createSpy("onClick");

        render(<QuantityButton onClick={mockClick}>-</QuantityButton>);

        fireEvent.click(screen.getByText("-"));

        expect(mockClick).toHaveBeenCalled();
    });

    it("tiene la clase CSS correcta", () => {
        render(<QuantityButton>x</QuantityButton>);
        const btn = screen.getByText("x");
        expect(btn.classList.contains("qty-btn")).toBeTrue();
    });

});
