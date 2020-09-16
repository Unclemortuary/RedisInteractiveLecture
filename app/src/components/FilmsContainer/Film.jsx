import React from 'react';

const Film = ({ id, title, cover }) => {
    return (
        <div className="film-box">
            <img className="film" src={cover} />
            <span className="film-title">{title}</span>
        </div>
        
    )
};

export default Film;