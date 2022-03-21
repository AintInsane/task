import React from "react";
import "./Button.scss";

export default function Button(props) {
    const { children, ...other } = props;

    return (
        <button className="Button" {...other}>
            {children}
        </button>
    );
}
