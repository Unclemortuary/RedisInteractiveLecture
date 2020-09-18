import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUserId, getFilms, getFetchFilmsRequestId, showFilmsLoader } from '../../modules/selectors.js';
import { requestForRecommendations } from '../../modules/recommedations/actions.js';

import Film from './Film.jsx';
import Loader from '../Loader/Loader.jsx';

const FilmContainer = () => {
    const films = useSelector(getFilms);
    const userId = useSelector(getUserId);
    const showLoader = useSelector(showFilmsLoader);
    const requestId = useSelector(getFetchFilmsRequestId);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            await dispatch(requestForRecommendations(userId));
        }
        fetchData();
    }, [requestId]);

    return (
        <div className="films-container">
            { showLoader 
                ? <Loader/> 
                : films.map(f => {
                    return <Film id={f.id} key={f.id} title={f.title} {...f} />
                })}
        </div>
    )
};

export default FilmContainer;