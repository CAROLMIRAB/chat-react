import React from 'react'

const Button = ({type, text}) => (

    <button className={type}>
        <span>{text}</span>
    </button>
)

export default Button