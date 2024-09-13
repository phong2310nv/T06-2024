import React from "react";

export default function Form_option(props) {
    const {title, name, value, onChange} = props
    return (
        <div>
            {title}
            <select name={name} value={value} onChange={onChange}>
                <option value="1">1 năm</option>
                <option value="2">2 năm</option>
                <option value="3">3 năm</option>
                <option value="4">4 năm</option>
                <option value="5">5 năm</option>
            </select>
        </div>
    );
}
