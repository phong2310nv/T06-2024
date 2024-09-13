import React from "react";

export default function Form_textarea(props) {
    const {value , onChange, name} = props
    return (
        <div>
            Des
            <textarea name={name} value={value} onChange={onChange} rows="5"></textarea>
        </div>
    );
}
