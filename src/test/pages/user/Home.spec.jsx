import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../../pages/user/Home";

global.fetch = () =>
    Promise.resolve({
        json: () => Promise.resolve([]),
    });

describe("Home Page render básico", () => {

    it("renderiza el título principal", () => {
        render(<Home />);
        expect(screen.getByText("Bienvenid@s a 미지 Beauty")).toBeTruthy();
    });

    it("renderiza parte del texto de bienvenida", () => {
        render(<Home />);

        expect(
            screen.getByText(/creemos que la belleza coreana/i)
        ).toBeTruthy();
    });

});



