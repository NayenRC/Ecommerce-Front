import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import ButtonBuscar from "../../../components/atoms/ButtonBuscar";

describe("ButtonBuscar Atom", () => {
    it("renderiza el botón con el texto 'Buscar'", () => {
        render(<ButtonBuscar />);
        expect(screen.getByText("Buscar")).toBeTruthy();
    });

    it("llama a onClick al hacer clic", () => {
        const onClickMock = jasmine.createSpy("onClick");
        render(<ButtonBuscar onClick={onClickMock} />);

        const btn = screen.getByText("Buscar");
        fireEvent.click(btn);

        expect(onClickMock).toHaveBeenCalled();
    });
});
