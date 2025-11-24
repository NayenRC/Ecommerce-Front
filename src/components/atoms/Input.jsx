import React from "react";

const Input = ({
    type = "text",
    placeholder = "",
    name = "",
    value = "",
    onChange = () => { },
    required = false,
    autoComplete = "",
    className = "",
    disabled = false,
    options = [],
    ...props
}) => {

    if (type === "select") {
        return (
            <select
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                className={className}
                {...props}
            >
                {options.map((opt, i) => (
                    <option key={i} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        );
    }

    if (type === "textarea") {
        return (
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className={className}
                {...props}
            />
        );
    }

    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={className}
            {...props}
        />
    );
};

export default Input;

