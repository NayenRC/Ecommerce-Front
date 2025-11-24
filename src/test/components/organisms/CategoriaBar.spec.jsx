import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoriaBar from "../../../components/organisms/CategoriaBar";
import { MemoryRouter } from "react-router-dom";

describe("CategoriaBar Organism", () => {

    const mockCategorias = [
        { categorias_id: 1, nombreCategorias: "Skincare" },
        { categorias_id: 2, nombreCategorias: "Makeup" },
    ];

    const mockSubcategorias = [
        {
            categoria_id: 10,
            nombreCategoria: "Cremas",
            categorias: { categorias_id: 1 }
        },
        {
            categoria_id: 20,
            nombreCategoria: "Labiales",
            categorias: { categorias_id: 2 }
        }
    ];

    const mockSetCategoria = jasmine.createSpy("setCategoriaSeleccionada");
    const mockSetSubcategoria = jasmine.createSpy("setSubcategoriaSeleccionada");

    const renderComp = () =>
        render(
            <MemoryRouter>
                <CategoriaBar
                    categorias={mockCategorias}
                    subcategorias={mockSubcategorias}
                    categoriaSeleccionada=""
                    setCategoriaSeleccionada={mockSetCategoria}
                    subcategoriaSeleccionada=""
                    setSubcategoriaSeleccionada={mockSetSubcategoria}
                />
            </MemoryRouter>
        );

    it("renderiza correctamente los selects", () => {
        renderComp();

        expect(screen.getByText("Skincare")).toBeTruthy();

        expect(screen.getByText("Todas las categorías")).toBeTruthy();
    });

    it("llama a setCategoriaSeleccionada cuando el usuario cambia la categoría", () => {
        renderComp();

        const select = screen.getAllByRole("combobox")[0];

        fireEvent.change(select, { target: { value: "1" } });

        expect(mockSetCategoria).toHaveBeenCalledWith("1");
    });

    it("deshabilita el select de subcategorías cuando no hay categoría seleccionada", () => {
        renderComp();

        const subSelect = screen.getAllByRole("combobox")[1];

        expect(subSelect.disabled).toBeTrue();
    });
});
