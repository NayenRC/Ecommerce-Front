import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../../components/organisms/Footer";

describe("Footer Organism", () => {

    it("muestra el texto de derechos reservados", () => {
        render(<Footer />);
        expect(
            screen.getByText(/Todos los derechos reservados/i)
        ).toBeTruthy();
    });

    it("muestra el año actual", () => {
        render(<Footer />);
        const year = new Date().getFullYear().toString();
        expect(screen.getByText(new RegExp(year))).toBeTruthy();
    });

    it("renderiza los enlaces del footer", () => {
        render(<Footer />);
        expect(screen.getByText("Aviso Legal")).toBeTruthy();
        expect(screen.getByText("Política de Privacidad")).toBeTruthy();
    });

});
