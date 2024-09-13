import React from 'react'

export default function Temperature(props) {
    const {title, value} = props;
    const handleChange = (event) =>{
        props.onHandleChange(event.target.value);
    }
  return (
    <fieldset>
        <legend>Enter temperature in {title}</legend>
        <input type='text'onChange={handleChange} value={value} />
    </fieldset>
  )
}
