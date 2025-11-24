import React from "react";
import { render, screen } from "@testing-library/react";
import Image from "../../../components/atoms/Image";

describe("Image Component", () => {

    it("renderiza la imagen correctamente con src y alt", () => {
        render(<Image src="test.jpg" alt="Imagen de prueba" />);

        const img = screen.getByAltText("Imagen de prueba");

        expect(img).toBeTruthy();
        expect(img.getAttribute("src")).toContain("test.jpg");
    });

    it("aplica la clase enviada por props", () => {
        render(<Image src="foto.png" alt="foto" className="img-large" />);

        const img = screen.getByAltText("foto");
        expect(img.classList.contains("img-large")).toBeTrue();
    });

});


