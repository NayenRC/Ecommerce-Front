import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UsuarioRow from "../../../components/molecules/UsuarioAdmi";

describe("UsuarioRow Component", () => {

    const usuario = {
        id: 10,
        nombreUsuario: "Juan Pérez",
        correoElectronico: "juan@example.com"
    };

    const onEditMock = jasmine.createSpy("onEdit");
    const onDeleteMock = jasmine.createSpy("onDelete");

    beforeEach(() => {
        onEditMock.calls.reset();
        onDeleteMock.calls.reset();
    });

    it("renderiza los datos del usuario", () => {
        render(
            <UsuarioRow
                usuario={usuario}
                onEdit={onEditMock}
                onDelete={onDeleteMock}
            />
        );

        expect(screen.getByText("10")).toBeTruthy();
        expect(screen.getByText("Juan Pérez")).toBeTruthy();
        expect(screen.getByText("juan@example.com")).toBeTruthy();
    });

    it("dispara onEdit con el objeto usuario", () => {
        render(
            <UsuarioRow
                usuario={usuario}
                onEdit={onEditMock}
                onDelete={onDeleteMock}
            />
        );

        const editButton = screen.getByText("Editar");
        fireEvent.click(editButton);

        expect(onEditMock).toHaveBeenCalledWith(usuario);
    });

    it("dispara onDelete con el id del usuario", () => {
        render(
            <UsuarioRow
                usuario={usuario}
                onEdit={onEditMock}
                onDelete={onDeleteMock}
            />
        );

        const deleteButton = screen.getByText("Eliminar");
        fireEvent.click(deleteButton);

        expect(onDeleteMock).toHaveBeenCalledWith(10);
    });

});

