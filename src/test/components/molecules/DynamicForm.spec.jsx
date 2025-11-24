import React from "react";
import { render, screen } from "@testing-library/react";
import DynamicForm from "../../../components/molecules/DynamicForm";

describe("DynamicForm Component", () => {

    const inputs = [
        {
            id: "nombre",
            label: "Nombre",
            type: "text",
            placeholder: "Ingresa tu nombre"
        },
        {
            id: "email",
            label: "Correo",
            type: "email",
            placeholder: "Ingresa tu correo",
            error: "Correo inválido"
        }
    ];

    it("renderiza todos los inputs enviados", () => {
        render(<DynamicForm inputs={inputs} />);

        expect(screen.getByPlaceholderText("Ingresa tu nombre")).toBeTruthy();
        expect(screen.getByPlaceholderText("Ingresa tu correo")).toBeTruthy();
    });

    it("renderiza los labels cuando existen", () => {
        render(<DynamicForm inputs={inputs} />);

        expect(screen.getByText("Nombre")).toBeTruthy();
        expect(screen.getByText("Correo")).toBeTruthy();
    });

    it("muestra mensajes de error cuando el input los tiene", () => {
        render(<DynamicForm inputs={inputs} />);

        expect(screen.getByText("Correo inválido")).toBeTruthy();
    });


});

