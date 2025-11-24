import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import HomeAdmin from "../../../pages/admin/HomeAdmin";
import UserService from "../../../services/UsuarioService";
import ProductosService from "../../../services/ProductosService";

global.fetch = () =>
    Promise.resolve({
        json: () => Promise.resolve([]),
    });

    const mockUsuarios = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const mockProductos = [{ id: 10 }, { id: 11 }];


describe("HomeAdmin Page - render básico", () => {

    beforeEach(() => {
        spyOn(UserService, "getAll").and.returnValue(
            Promise.resolve({ data: mockUsuarios })
        );

        spyOn(ProductosService, "getAll").and.returnValue(
            Promise.resolve({ data: mockProductos })
        );
    });

    it("renderiza el título principal", () => {
        render(<HomeAdmin />);
        expect(screen.getByText("Panel de Administración")).toBeTruthy();
    });

    it("muestra cantidad de usuarios cargados", async () => {
        render(<HomeAdmin />);

        await waitFor(() => {
            expect(screen.getByText("3")).toBeTruthy();
        });
    });

    it("muestra cantidad de productos cargados", async () => {
        render(<HomeAdmin />);

        await waitFor(() => {
            expect(screen.getByText("2")).toBeTruthy();
        });
    });

});

