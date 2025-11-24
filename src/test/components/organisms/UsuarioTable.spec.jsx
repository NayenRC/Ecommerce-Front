import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import UsuarioTable from "../../../components/organisms/UsuarioTable";

describe("UsuarioTable Organism", () => {

    it("muestra el título", () => {
        render(
            <UsuarioTable usuarios={[]} onEdit={() => { }} onDelete={() => { }} />
        );

        expect(screen.getByText("Usuarios Registrados")).toBeTruthy();
    });

    it("muestra mensaje cuando no hay usuarios", () => {
        render(
            <UsuarioTable usuarios={[]} onEdit={() => { }} onDelete={() => { }} />
        );

        expect(screen.getByText("No hay usuarios registrados.")).toBeTruthy();
    });

    it("renderiza filas de usuarios", () => {
        const mockUsuarios = [
            {
                id: 1,
                nombreUsuario: "Allan",
                correoElectronico: "allan@mail.com",
                comuna: { nombre_comuna: "Santiago" },
                direccion: "Calle 123"
            },
            {
                id: 2,
                nombreUsuario: "Luis",
                correoElectronico: "luis@mail.com",
                comuna: null,
                direccion: ""
            }
        ];

        render(
            <UsuarioTable
                usuarios={mockUsuarios}
                onEdit={() => { }}
                onDelete={() => { }}
            />
        );

        expect(screen.getByText("Allan")).toBeTruthy();
        expect(screen.getByText("Luis")).toBeTruthy();
        expect(screen.getByText("Santiago")).toBeTruthy();
        expect(screen.getAllByText("—").length).toBeGreaterThan(0);
    });

    it("llama a onEdit al hacer click en Editar", () => {
        const user = {
            id: 3,
            nombreUsuario: "Test",
            correoElectronico: "t@test.com",
            comuna: null,
            direccion: ""
        };

        const mockEdit = jasmine.createSpy("onEdit");

        render(
            <UsuarioTable usuarios={[user]} onEdit={mockEdit} onDelete={() => { }} />
        );

        const btn = screen.getByText("Editar");
        fireEvent.click(btn);

        expect(mockEdit).toHaveBeenCalledWith(user);
    });

    it("llama a onDelete al hacer click en Eliminar", () => {
        const mockDelete = jasmine.createSpy("onDelete");

        const user = {
            id: 5,
            nombreUsuario: "Beto",
            correoElectronico: "b@b.com",
            comuna: null,
            direccion: ""
        };

        render(
            <UsuarioTable usuarios={[user]} onEdit={() => { }} onDelete={mockDelete} />
        );

        const btn = screen.getByText("Eliminar");
        fireEvent.click(btn);

        expect(mockDelete).toHaveBeenCalledWith(5);
    });

});
