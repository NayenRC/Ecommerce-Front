import React from "react";
import Text from "../atoms/Text";
import Url from "../atoms/Url";

function CustomerService() {
    return (
        <div className="contact-card">
            <div className="contact-card-body">

                <Text variant="h2" className="card-title-formulario">
                    Servicio al cliente
                </Text>

                <Text className="p-contacto">
                    Horario: Lunes a Viernes de 9:00am a 6:00pm
                </Text>

                <div className="centrar-mail">
                    <Url href="mailto:mijibeauty@gmail.com">미지Beauty@gmail.com</Url>
                </div>

                <Text className="p-contacto">+569 979533255</Text>

            </div>
        </div>
    );
}

export default CustomerService;
