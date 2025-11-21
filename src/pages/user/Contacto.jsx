import React from "react";
import Text from '../../components/atoms/Text';
import ContactForm from "../../components/organisms/ContactoForm";
import CustomerService from "../../components/organisms/ContactoInfo";
import "../../styles/pages/Contacto.css";

function Contact() {
    return (
        <main className="contact-container">

            <Text variant="h1" className="h1-c">
                미지 Beauty | Miji Beauty
            </Text>

            <div className="contenedor-contacto">
                <ContactForm />
                <CustomerService />
            </div>

        </main>
    );
}

export default Contact;
