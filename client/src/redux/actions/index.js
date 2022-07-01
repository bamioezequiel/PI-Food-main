import axios from 'axios';
const URL = process.env.REACT_APP_URL;

export const POST_RECIPE = 'POST_RECIPE';
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_RECIPE_BY_ID = 'GET_RECIPE_BY_ID';
export const GET_DIETS = 'GET_DIETS';
export const FILTER_BY_DIEST = 'FILTER_BY_DIEST';
export const ORDER_RECIPES = 'ORDER_RECIPES';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const CLEAN_RECIPE = 'CLEAN_RECIPE';

export const cleanRecipe = () => {
    return function(dispatch) {
        return dispatch({ type: CLEAN_RECIPE })
    }
}

export const deleteRecipe = (id) => {
    return async function(dispatch) {
        try {
            let res = axios.delete(`${URL}recipes/${id}`); 
            return dispatch({ type: DELETE_RECIPE, payload: res });
        } catch (error) {
            console.error(error);
        }
    }
}

export const postRecipe = (recipe) => {
    return async function(dispatch) {
        try {
            const res = await axios.post(`${URL}recipes`, recipe);
            return dispatch({ type: POST_RECIPE, payload: res.data });
        } catch(error) {
            console.error(error);
        }
    }
}

export const getAllRecipes = () => {
    return function (dispatch) {
        try {
            return fetch(`${URL}recipes`)
                .then( (res)    => res.json() )
                .then( (data)   => dispatch({ type: GET_ALL_RECIPES, payload: data }) )
                .catch( (error) => console.error(error) )
        } catch(error) {
                console.error(error);
        }
    }
}

export const getRecipeById = (id) => {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${URL}recipes/${id}`);
            return dispatch({ type:  GET_RECIPE_BY_ID, payload: res.data });
        } catch(error) {
            console.error(error);
        }
    }
}

export const getDiets = () => {
    return async function(dispatch) {
        try {
            const res = await axios.get(`${URL}diets`);
            return dispatch({ type: GET_DIETS, payload: res.data });
        } catch(error) {
            console.error(error);
        }
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
        try {
            const res = await axios.get(`${URL}recipes?name=${value}`);
            return dispatch({ type: SEARCH_BY_NAME, payload: res.data });
        } catch(error) {
            console.error(error);
        }
    }
}
