import React from "react";
import NosotrosSection from "../molecules/NosotrosSection";

function NosotrosContent() {
    return (
        <main className="nosotros-container">

            <h1 className="nosotros-main-title">Nosotros</h1>

            <NosotrosSection
                image="/public/nosotros.webp"
                title="Nuestra Historia"
                paragraphs={[
                    "Somos un grupo de estudiantes universitarios que, entre clases y sueños, decidimos acercar la magia del K-Beauty a todas las personas.",
                    "Lo que comenzó como un proyecto entre amigos, hoy es Miji Beauty, una marca joven, fresca y con propósito."
                ]}
            />

            <NosotrosSection
                reverse={true}
                image="/public/nosotros2.webp"
                title="Hacemos la belleza más cercana"
                paragraphs={[
                    "Queremos que cada persona descubra su mejor versión con productos auténticos, innovadores y accesibles.",
                    "En Miji Beauty creemos que la belleza no es un lujo, es un derecho que todos merecen disfrutar 🌸✨."
                ]}
            />

            <NosotrosSection
                image="/public/nosotros3.webp"
                title="Este es solo el comienzo"
                paragraphs={[
                    "En Miji Beauty soñamos en grande. Queremos que cada persona pueda disfrutar del K-Beauty de forma sencilla.",
                    "Cada producto es un recordatorio de que cuidarte también es una forma de amarte. 🌸✨"
                ]}
            />
        </main>
    );
}

export default NosotrosContent;
