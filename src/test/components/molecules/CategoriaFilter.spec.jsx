import { render, screen } from "@testing-library/react";
import React from "react";
import CategoriaFilter from "../../../components/molecules/CategoriaFilter";

describe("CategoriaFilter Molecule", () => {

    it("renderiza los dos selects", () => {
        render(
            <CategoriaFilter
                categorias={[]}
                subcategorias={[]}
                categoriaSeleccionada=""
                setCategoriaSeleccionada={() => { }}
                subcategoriaSeleccionada=""
                setSubcategoriaSeleccionada={() => { }}
            />
        );

        const selects = screen.getAllByRole("combobox");
        expect(selects.length).toBe(2);
    });

});
