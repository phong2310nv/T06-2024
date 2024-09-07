import React, { Children } from 'react'

export default function Button(props) {
  return (
    <button {...props}>
        {props.children}
    </button>
  )
}
