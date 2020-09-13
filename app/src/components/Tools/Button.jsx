import React from 'react';

const Button = ({ onClick, className, message }) => {
    return (
        <button className={`btn + ${className}`} onClick={onClick}>{message}</button>
    )
};

export default Button;