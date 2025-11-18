import React from "react";

function Url({ href, children, className = "" }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`atom-url ${className}`}
        >
            {children}
        </a>
    );
}

export default Url;
