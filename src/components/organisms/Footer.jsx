import React from "react";
import { Container } from "react-bootstrap";
import Text from "../atoms/Text";
import Url from "../atoms/Url";
import "../../styles/components/organisms/Footer.css";


function Footer() {
    return (
        <footer className="footer-section">
            <Container className="footer-content">

                <Text className="footer-text">
                    © {new Date().getFullYear()} 미지 Beauty. Todos los derechos reservados.
                </Text>

                <div className="footer-links">
                    <Url href="#" className="footer-link">Aviso Legal</Url>
                    <span className="footer-separator">|</span>
                    <Url href="#" className="footer-link">Política de Privacidad</Url>
                </div>

            </Container>
        </footer>
    );
}

export default Footer;


