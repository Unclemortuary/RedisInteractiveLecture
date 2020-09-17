import { createAction } from 'redux-actions';
import { FETCH_FILMS, FILMS_FETCHED } from './actionTypes.js';
import { fetchRecommendations } from './api.js';

export const setRecommendations = createAction(
    FILMS_FETCHED,
    films => films
);

export const invokeFetch = createAction(FETCH_FILMS);

export const requestForRecommendations = () => dispatch => {
    fetchRecommendations().then(films => dispatch(setRecommendations(films)));
};