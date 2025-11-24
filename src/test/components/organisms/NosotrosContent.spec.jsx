import React from "react";
import { render, screen } from "@testing-library/react";
import NosotrosContent from "../../../components/organisms/NosotrosContent";

describe("NosotrosContent Organism", () => {

    it("renderiza el título principal", () => {
        render(<NosotrosContent />);
        expect(screen.getByText("Nosotros")).toBeTruthy();
    });

    it("renderiza la sección 'Nuestra Historia'", () => {
        render(<NosotrosContent />);
        expect(screen.getByText("Nuestra Historia")).toBeTruthy();
        expect(
            screen.getByText(/Somos un grupo de estudiantes universitarios/i)
        ).toBeTruthy();
    });

    it("renderiza la sección 'Hacemos la belleza más cercana'", () => {
        render(<NosotrosContent />);
        expect(screen.getByText("Hacemos la belleza más cercana")).toBeTruthy();
    });

    it("renderiza la sección 'Este es solo el comienzo'", () => {
        render(<NosotrosContent />);
        expect(screen.getByText("Este es solo el comienzo")).toBeTruthy();
    });

});
