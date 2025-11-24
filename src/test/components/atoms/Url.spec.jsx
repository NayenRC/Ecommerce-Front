import React from "react";
import { render, screen } from "@testing-library/react";
import Url from "../../../components/atoms/Url";

describe("Url Component", () => {

    it("renderiza el texto correctamente", () => {
        render(<Url href="https://google.com">Ir a Google</Url>);
        const link = screen.getByText("Ir a Google");
        expect(link).toBeTruthy();
    });

    it("incluye el atributo href correctamente", () => {
        render(<Url href="https://google.com">Google</Url>);
        const link = screen.getByText("Google");
        expect(link.getAttribute("href")).toBe("https://google.com");
    });

    it("agrega el className enviado además de 'atom-url'", () => {
        render(<Url href="#" className="custom-class">Link</Url>);
        const link = screen.getByText("Link");

        expect(link.classList.contains("atom-url")).toBeTrue();
        expect(link.classList.contains("custom-class")).toBeTrue();
    });

    it("abre el enlace en una nueva pestaña por defecto", () => {
        render(<Url href="#">Link</Url>);
        const link = screen.getByText("Link");

        expect(link.getAttribute("target")).toBe("_blank");
        expect(link.getAttribute("rel")).toBe("noopener noreferrer");
    });

});
