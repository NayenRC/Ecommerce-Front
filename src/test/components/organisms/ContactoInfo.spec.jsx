import React from "react";
import { render, screen } from "@testing-library/react";
import ContactoInfo from "../../../components/organisms/ContactoInfo";

describe("ContactoInfo Component", () => {

    it("renderiza el título correctamente", () => {
        render(<ContactoInfo />);
        expect(screen.getByText("Servicio al cliente")).toBeTruthy();
    });

    it("muestra el horario de atención", () => {
        render(<ContactoInfo />);
        expect(
            screen.getByText("Horario: Lunes a Viernes de 9:00am a 6:00pm")
        ).toBeTruthy();
    });

    it("muestra el correo con el href mailto correcto", () => {
        render(<ContactoInfo />);

        const email = screen.getByText("미지Beauty@gmail.com");

        expect(email).toBeTruthy();
        expect(email.tagName.toLowerCase()).toBe("a");
        expect(email.getAttribute("href")).toBe("mailto:mijibeauty@gmail.com");
    });

    it("muestra el número de teléfono correctamente", () => {
        render(<ContactoInfo />);
        expect(screen.getByText("+569 979533255")).toBeTruthy();
    });

});
