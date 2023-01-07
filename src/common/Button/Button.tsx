import React from "react";

interface IButton {
    disable: boolean,
    onClick: () => void,
    text: string,
    className: string,
}

const Button: React.FC<IButton> = ({ disable, onClick, className, text }) => {
    return (
        <button
            onClick={onClick}
            className={`slot-button ${className} ${disable ? "slot-button__clicked" : ""}`}
        >
            {text}
        </button>
    )
}

export default Button