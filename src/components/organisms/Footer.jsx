import React from "react";
import { Container } from "react-bootstrap";
import Text from "../atoms/Text";
import Url from "../atoms/Url";
import git from "../../assets/img/gati.webp";
import Image from "../atoms/Image";
import "../../styles/components/organisms/Footer.css";

function Footer() {
    return (
        <footer className="footer-section">
            <Container className="text-center">
                <Text className="footer-text">
                    © {new Date().getFullYear()} Allan - Todos los derechos reservados.
                </Text>
                <Url href="https://github.com/AllanxSF">
                    <Image src={git} alt="git" className="footer-icon" />
                </Url>
            </Container>
        </footer>
    );
}

export default Footer;

