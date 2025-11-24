import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import UsuarioAdmin from "../../../pages/admin/UsuarioAdmin";
import UserService from "../../../services/UsuarioService";

window.confirm = () => true;

const usuariosMock = [
    {
        id: 1,
        nombreUsuario: "Allan",
        correoElectronico: "allan@test.com",
        direccion: "Mi casa 123",
        clave: "1234",
        comuna: { nombre_comuna: "Santiago" },
        rol: { nombreRol: "USER" }
    },
    {
        id: 2,
        nombreUsuario: "María",
        correoElectronico: "maria@test.com",
        direccion: "Otra 456",
        clave: "1234",
        comuna: { nombre_comuna: "Ñuñoa" },
        rol: { nombreRol: "ADMIN" }
    }
];

describe("UsuarioAdmin Page", () => {

    beforeEach(() => {
        spyOn(UserService, "getAll").and.returnValue(
            Promise.resolve({ data: usuariosMock })
        );
        spyOn(UserService, "deleteUser").and.returnValue(Promise.resolve());
        spyOn(UserService, "updateUser").and.returnValue(Promise.resolve());
    });

    it("muestra usuarios cargados", async () => {
        render(<UsuarioAdmin />);

        await waitFor(() => {
            expect(screen.getByText("Allan")).toBeTruthy();
            expect(screen.getByText("María")).toBeTruthy();
        });
    });

    it("abre el modal al presionar Editar", async () => {
        render(<UsuarioAdmin />);

        await waitFor(() => {
            expect(screen.getByText("Allan")).toBeTruthy();
        });

        fireEvent.click(screen.getAllByText("Editar")[0]);

        await waitFor(() => {
            expect(screen.getByText("Editar Usuario")).toBeTruthy();
        });
    });

    it("llama a deleteUser al eliminar", async () => {
        render(<UsuarioAdmin />);

        await waitFor(() => {
            expect(screen.getByText("Allan")).toBeTruthy();
        });

        fireEvent.click(screen.getAllByText("Eliminar")[0]);

        await waitFor(() => {
            expect(UserService.deleteUser).toHaveBeenCalled();
        });
    });

    it("guarda cambios al presionar Guardar", async () => {
        render(<UsuarioAdmin />);

        await waitFor(() => {
            expect(screen.getByText("María")).toBeTruthy();
        });

        fireEvent.click(screen.getAllByText("Editar")[1]);

        await waitFor(() => {
            expect(screen.getByDisplayValue("María")).toBeTruthy();
        });

        const inputNombre = screen.getByDisplayValue("María");
        fireEvent.change(inputNombre, { target: { value: "María Editada" } });

        fireEvent.click(screen.getByText("Guardar"));

        await waitFor(() => {
            expect(UserService.updateUser).toHaveBeenCalled();
        });
    });

});

