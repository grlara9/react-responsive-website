import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
})=>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLE[0];

    const checkButtonSize = SIZES.includes(buttonSize)? buttonSize : SIZES[0];
}

return (
    <Link to="/sign-up" className="btn-mobile">
        <button 
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
    </Link>
)