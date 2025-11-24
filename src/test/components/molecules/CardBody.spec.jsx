import React from "react";
import { render, screen } from "@testing-library/react";
import CardBody from "../../../components/molecules/CardBody";

describe("CardBody Component", () => {

    it("renderiza el título correctamente", () => {
        render(<CardBody title="Mi Proyecto" description="Descripción" />);

        const title = screen.getByText("Mi Proyecto");
        expect(title).toBeTruthy();
        expect(title.tagName).toBe("H5"); 
    });

    it("renderiza la descripción correctamente", () => {
        render(<CardBody title="Proyecto" description="Una descripción aquí" />);

        const description = screen.getByText("Una descripción aquí");
        expect(description).toBeTruthy();
        expect(description.tagName).toBe("P"); 
    });

    it("aplica las clases correctas a cada Text", () => {
        render(<CardBody title="Titulo" description="Desc" />);

        const title = screen.getByText("Titulo");
        const description = screen.getByText("Desc");

        expect(title.classList.contains("project-card-title")).toBeTrue();
        expect(description.classList.contains("project-card-description")).toBeTrue();
    });

});
