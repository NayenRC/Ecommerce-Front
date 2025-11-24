import React from "react";
import Button from "../atoms/Button";
import DynamicTexts from "../molecules/DynamicTexts";
import DynamicInputs from "../molecules/DynamicInputs";
import Text from "../atoms/Text";

function Forms({ content = [], className = "" }) {
    return (
         <div className={className}>
            {content.map((item, index) => {

                if (item.type === "text") {
                    return <DynamicTexts key={index} Texts={item.text} />;
                }

                if (item.type === "label") {
                    return (
                        <Text
                            key={index}
                            variant="label"
                            className={item.text[0].className}
                        >
                            {item.text[0].content}
                        </Text>
                    );
                }

                if (item.type === "submit") {
                    return (
                        <Button
                            key={index}
                            text={item.text}
                            className={item.className}
                            type="submit"
                        />
                    );
                }

                if (item.type === "inputs") {
                    return (
                        <DynamicInputs
                            key={index}
                            Inputs={item.inputs}
                            className={item.className}
                        />
                    );
                }

                return null;
            })}
        </div>
    );
}

export default Forms;