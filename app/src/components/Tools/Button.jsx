import React from 'react';

const Button = ({ onClick }) => {
    return (
        <button className='button' onClick={onClick}/>
    )
};

export default Button;