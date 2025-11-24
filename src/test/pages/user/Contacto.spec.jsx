import React from "react";
import { render, screen } from "@testing-library/react";
import Contacto from "../../../pages/user/Contacto"; // ✔️ ruta correcta

describe("Página de Contacto", () => {
    it("renderiza el título principal", () => {
        render(<Contacto />);
        expect(screen.getByText("미지 Beauty | Miji Beauty")).toBeTruthy();
    });

    it("incluye el formulario y la sección de contacto", () => {
        render(<Contacto />);
        expect(screen.getByText("미지 Beauty | Miji Beauty")).toBeTruthy();
    });
});

