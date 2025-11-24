import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NumItems from "../../../components/atoms/NumItems";

describe("NumItems Atom", () => {

    it("renderiza todas las opciones enviadas", () => {
        const opciones = [1, 2, 3];

        render(<NumItems options={opciones} />);

        opciones.forEach(opt => {
            expect(screen.getByText(opt.toString())).toBeTruthy();
        });
    });

    it("aplica la clase enviada por props", () => {
        render(<NumItems options={[1]} className="detalle-select" />);

        const select = screen.getByRole("combobox");
        expect(select.classList.contains("detalle-select")).toBeTrue();
    });

    it("llama a onChange cuando se selecciona una opción", () => {
        const onChangeSpy = jasmine.createSpy("onChangeSpy");

        render(<NumItems options={[1, 2, 3]} onChange={onChangeSpy} />);

        const select = screen.getByRole("combobox");
        fireEvent.change(select, { target: { value: "2" } });

        expect(onChangeSpy).toHaveBeenCalled();
    });

});
