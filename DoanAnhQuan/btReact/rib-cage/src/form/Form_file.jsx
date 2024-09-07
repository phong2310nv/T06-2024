import React from "react";

export default function Form_file(props) {
    const {title, type} =  props
    return (
        <div>
            P{title}
            <input type={type} />
            <img src="" id="previewAvatar" width="100px" />
        </div>
    );
}
