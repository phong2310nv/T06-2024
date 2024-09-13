import React from "react";

export default function Form_text(props) {
    const { type, disabled, title, className, value, onChange, name } = props;
    return (
        <div className={className}>
            {title}
            <input
                value={value}
                onChange={onChange}
                type={type}
                disabled={disabled}
                name={name}
            />
        </div>
    );
}
