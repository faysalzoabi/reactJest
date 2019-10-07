import React from 'react'
import './button.css';

function Button({label}) {
    return(
        <div data-testid="btn" className="btn-style">{label}</div>
    )
}

export default Button;