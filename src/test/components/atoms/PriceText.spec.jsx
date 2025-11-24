import React from "react";
import { render, screen } from "@testing-library/react";
import PriceText from "../../../components/atoms/PriceText";

describe("PriceText Atom", () => {

    it("renderiza el precio con el formato correcto", () => {
        render(<PriceText value={9990} />);
        expect(screen.getByText("$9990")).toBeTruthy();
    });

    it("aplica la clase price-text", () => {
        render(<PriceText value={5000} />);
        const element = screen.getByText("$5000");
        expect(element.classList.contains("price-text")).toBeTrue();
    });

});
