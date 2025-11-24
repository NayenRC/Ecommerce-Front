import React from "react";
import { render, screen } from "@testing-library/react";
import NosotrosSection from "../../../components/molecules/NosotrosSection";

describe("NosotrosSection Molecule", () => {

    it("renderiza el título", () => {
        render(
            <NosotrosSection
                image="test.jpg"
                title="Quiénes Somos"
                paragraphs={["Texto 1", "Texto 2"]}
            />
        );

        expect(screen.getByText("Quiénes Somos")).toBeTruthy();
    });

    it("renderiza los párrafos", () => {
        render(
            <NosotrosSection
                image="test.jpg"
                title="Misión"
                paragraphs={["Primer párrafo", "Segundo párrafo"]}
            />
        );

        expect(screen.getByText("Primer párrafo")).toBeTruthy();
        expect(screen.getByText("Segundo párrafo")).toBeTruthy();
    });

    it("renderiza la imagen correctamente", () => {
        render(
            <NosotrosSection
                image="foto.png"
                title="Nuestra Historia"
                paragraphs={[]}
            />
        );

        const img = screen.getByRole("img");
        expect(img).toBeTruthy();
        expect(img.getAttribute("src")).toBe("foto.png");
    });

});
