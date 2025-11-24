import React from "react";
import { render, screen } from "@testing-library/react";
import NosotrosContent from "../../../components/organisms/NosotrosContent";

describe("NosotrosContent Page", () => {
    it("Renderiza el título principal", () => {
        render(<NosotrosContent />);
        expect(screen.getByText("Nosotros")).toBeTruthy();
    });

    it("Renderiza todas las secciones de la página", () => {
        render(<NosotrosContent />);

        expect(screen.getByText("Nuestra Historia")).toBeTruthy();
        expect(screen.getByText("Hacemos la belleza más cercana")).toBeTruthy();
        expect(screen.getByText("Este es solo el comienzo")).toBeTruthy();
    });
});
