import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BuscarBar from "../../../components/molecules/BuscarBar";

describe("BuscarBar Molecule", () => {

    it("renderiza el input y el botón", () => {
        render(<BuscarBar onBuscar={() => { }} />);

        expect(screen.getByPlaceholderText("Buscar...")).toBeTruthy();
        expect(screen.getByText("Buscar")).toBeTruthy();
    });

    it("actualiza el valor del input cuando el usuario escribe", () => {
        render(<BuscarBar onBuscar={() => { }} />);

        const input = screen.getByPlaceholderText("Buscar...");
        fireEvent.change(input, { target: { value: "serum" } });

        expect(input.value).toBe("serum");
    });

    it("llama a onBuscar cuando se hace click en el botón", () => {
        const mockBuscar = jasmine.createSpy("onBuscar");

        render(<BuscarBar onBuscar={mockBuscar} />);

        const input = screen.getByPlaceholderText("Buscar...");
        const button = screen.getByText("Buscar");

        fireEvent.change(input, { target: { value: "crema" } });
        fireEvent.click(button);

        expect(mockBuscar).toHaveBeenCalledWith("crema");
    });

    it("llama a onBuscar al presionar Enter", () => {
        const mockBuscar = jasmine.createSpy("onBuscar");

        render(<BuscarBar onBuscar={mockBuscar} />);

        const input = screen.getByPlaceholderText("Buscar...");

        fireEvent.change(input, { target: { value: "tonico" } });
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

        expect(mockBuscar).toHaveBeenCalledWith("tonico");
    });

});
