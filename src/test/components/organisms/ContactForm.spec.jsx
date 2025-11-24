import React from "react";
import { render, screen } from "@testing-library/react";
import ContactForm from "../../../components/organisms/ContactoForm";
import { MemoryRouter } from "react-router-dom";

describe("ContactForm Organism", () => {

    const renderComp = () =>
        render(
            <MemoryRouter>
                <ContactForm />
            </MemoryRouter>
        );

    it("renderiza el título del formulario", () => {
        renderComp();

        expect(screen.getByText("Formulario de contacto")).toBeTruthy();
    });

    it("renderiza todos los inputs definidos", () => {
        renderComp();

        // Inputs según el array
        const placeholders = [
            "Ej: Allan",
            "Ej: ejemplo@gmail.com",
            "Ej: 979533255",
            "Escribe el asunto",
            "Escribe tu mensaje..."
        ];

        placeholders.forEach((ph) => {
            expect(screen.getByPlaceholderText(ph)).toBeTruthy();
        });
    });

    it("renderiza el botón Enviar", () => {
        renderComp();

        expect(screen.getByText("Enviar")).toBeTruthy();
    });
});
