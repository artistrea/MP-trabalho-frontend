import React from "react";
import "./styles.css";

const Button = ({ children, className, width, height, ...restProps }) => {
    //Classes: fundoVerde,fundoCinza,bordaVerde
    return (
        <button
            style={{ width, height }}
            className={`botao ${className}`}
            {...restProps}
        >
            {children}
        </button>
    );
}

export default Button;
