import React from "react";
import DynamicForm from "../molecules/DynamicForm";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

function ContactForm() {

    const inputs = [
        { id: "nombre", label: "Nombre *", type: "text", placeholder: "Ej: Allan" },
        { id: "correo", label: "Correo Electrónico *", type: "email", placeholder: "Ej: ejemplo@gmail.com" },
        { id: "telefono", label: "Teléfono", type: "tel", placeholder: "Ej: 979533255" },
        { id: "asunto", label: "Asunto *", type: "text", placeholder: "Escribe el asunto" },
        { id: "descripcion", label: "Descripción *", type: "textarea", placeholder: "Escribe tu mensaje..." }
    ];

    return (
        <div className="contact-card">
            <div className="contact-card-body">

                <Text variant="h2" className="card-title-formulario">
                    Formulario de contacto
                </Text>

                <DynamicForm inputs={inputs} />

                <Button variant="primary" className="btn-enviar mt-3">
                    Enviar
                </Button>

            </div>
        </div>
    );
}

export default ContactForm;
