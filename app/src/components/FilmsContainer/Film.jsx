import React from 'react';

const Film = ({ id, title }) => {
    return (
        <div className="film-box">
            <div className="film"></div>
            <span className="film-title">{title}</span>
        </div>
        
    )
};

export default Film;