// src/test/Button.spec.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../../../components/atoms/Button";

describe("Button Component", () => {

    it("renderiza el contenido usando children", () => {
        render(<Button>Mi Botón</Button>);
        const btn = screen.getByText("Mi Botón");
        expect(btn).toBeTruthy();
    });

    it("renderiza el contenido usando text cuando no hay children", () => {
        render(<Button text="Texto por prop" />);
        const btn = screen.getByText("Texto por prop");
        expect(btn).toBeTruthy();
    });

    it("aplica correctamente la clase enviada por props", () => {
        render(<Button className="btn-primary">Botón</Button>);
        const btn = screen.getByText("Botón");
        expect(btn.classList.contains("btn-primary")).toBeTrue();
    });

    it("pasa los demás props correctamente", () => {
        const onClickMock = jasmine.createSpy("onClick");
        render(<Button onClick={onClickMock}>Click</Button>);

        const btn = screen.getByText("Click");
        btn.click();

        expect(onClickMock).toHaveBeenCalled();
    });

});
