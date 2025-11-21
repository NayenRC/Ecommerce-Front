import React from "react";
import Text from "../atoms/Text";
import Image from "../atoms/Image";

function NosotrosSection({ image, title, paragraphs, reverse = false }) {
    return (
        <section className={`nosotros-section ${reverse ? "reverse" : ""}`}>
            <div className="nosotros-img">
                <Image src={image} alt={title} className="img-fluid rounded shadow" />
            </div>

            <div className="nosotros-text">
                <Text variant="h2" className="nosotros-title">{title}</Text>

                {paragraphs.map((p, index) => (
                    <Text key={index} variant="p" className="nosotros-paragraph">
                        {p}
                    </Text>
                ))}
            </div>
        </section>
    );
}

export default NosotrosSection;
