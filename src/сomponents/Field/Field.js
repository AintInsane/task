import React from "react";
import clsx from "clsx";
import "./Field.scss";

export default function Field(props) {
    const {
        className,
        label,
        inputComponent: Input = "input",
        fullWidth,
        ...other
    } = props;

    return (
        <label
            className={clsx("Field", className, {
                Field_fullWidth: fullWidth
            })}
        >
            <div className="Field-label">{label}</div>
            <Input className="Field-input" {...other} />
        </label>
    );
}
