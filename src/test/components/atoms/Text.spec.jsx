import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "../../../components/atoms/Text";

describe("Text Component", () => {

    it("renderiza el contenido correctamente", () => {
        render(<Text>Hola Mundo</Text>);
        const text = screen.getByText("Hola Mundo");
        expect(text).toBeTruthy();
    });

    it("usa por defecto la etiqueta <p>", () => {
        render(<Text>Texto por defecto</Text>);
        const text = screen.getByText("Texto por defecto");
        expect(text.tagName).toBe("P");
    });

    it("permite cambiar la etiqueta según el prop 'variant'", () => {
        render(<Text variant="h2">Título</Text>);
        const text = screen.getByText("Título");
        expect(text.tagName).toBe("H2");
    });

    it("aplica la clase enviada por props", () => {
        render(<Text className="text-primary">Hola</Text>);
        const text = screen.getByText("Hola");
        expect(text.classList.contains("text-primary")).toBeTrue();
    });

});
