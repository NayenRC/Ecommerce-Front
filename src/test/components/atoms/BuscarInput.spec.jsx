import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BuscarInput from "../../../components/atoms/BuscarInput";

describe("BuscarInput Atom", () => {

    it("renderiza el input con placeholder", () => {
        render(<BuscarInput value="" />);
        const input = screen.getByPlaceholderText("Buscar...");
        expect(input).toBeTruthy();
    });

    it("muestra el valor recibido por props", () => {
        render(<BuscarInput value="labial" />);
        const input = screen.getByDisplayValue("labial");
        expect(input).toBeTruthy();
    });

    it("llama a onChange al escribir", () => {
        const onChangeSpy = jasmine.createSpy("onChange");
        render(<BuscarInput value="" onChange={onChangeSpy} />);

        const input = screen.getByPlaceholderText("Buscar...");
        fireEvent.change(input, { target: { value: "serum" } });

        expect(onChangeSpy).toHaveBeenCalled();
    });

    it("llama a onKeyDown al presionar una tecla", () => {
        const onKeySpy = jasmine.createSpy("onKeyDown");
        render(<BuscarInput value="" onKeyDown={onKeySpy} />);

        const input = screen.getByPlaceholderText("Buscar...");
        fireEvent.keyDown(input, { key: "Enter" });

        expect(onKeySpy).toHaveBeenCalled();
    });

});
