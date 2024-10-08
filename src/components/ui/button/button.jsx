import React from 'react'
import style from "./style.module.scss"

export const Button = ({ children, variant, type = "button", startIcon, endIcon, size,}) => {
    return (
        <button className={`${style[variant]} ${style.btn} ${style[size]}`} type={type}>{children}</button>
    )
}

