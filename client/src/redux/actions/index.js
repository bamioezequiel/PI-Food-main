import axios from 'axios';

export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_RECIPE_BY_ID = 'GET_RECIPE_BY_ID';
export const GET_DIETS = 'GET_DIETS';
export const FILTER_BY_DIEST = 'FILTER_BY_DIEST';
export const ORDER_RECIPES = 'ORDER_RECIPES';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';

export const getAllRecipes = () => {
    return function (dispatch) {
        return fetch('http://localhost:3001/recipes')
            .then( (res)    => res.json() )
            .then( (data)   => dispatch({ type: GET_ALL_RECIPES, payload: data }) )
            .catch( (error) => console.error(error) )
    }
}

export const getRecipeById = (id) => {
    return async function (dispatch) {
        const res = await axios.get(`http://localhost:3001/recipes/${Number(id)}`);
        return dispatch({ type:  GET_RECIPE_BY_ID, payload: res.data });
    }
}

export const getDiets = () => {
    return async function(dispatch) {
        const res = await axios.get('http://localhost:3001/diets');
        return dispatch({ type: GET_DIETS, payload: res.data });
    }
}

export const filterByDiets = (value) => {
    return async function(dispatch) {
        return dispatch({ type: FILTER_BY_DIEST, payload: value });
    }
}

export const orderRecipes = (value) => {
    return async function(dispatch) {
        return dispatch({ type: ORDER_RECIPES, payload: value });
    }
}   

export const searchByName = (value) => {
    return async function(dispatch) {
        return dispatch({ type: SEARCH_BY_NAME, payload: value });
    }
}
