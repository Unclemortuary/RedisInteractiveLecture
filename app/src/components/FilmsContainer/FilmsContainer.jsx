import React from 'react';

import Film from './Film.jsx';

let films = [0,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,];

const FilmContainer = () => {
    films.fill(0);
    let i = 0;
    return (
        <div className="films-container">
            {films.map(() => {
                i++;
                return <Film id={i} key={i} title='sas'/>
            })}
        </div>
    )
};

export default FilmContainer;