import axios from 'axios';

export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_RECIPE_BY_ID = 'GET_RECIPE_BY_ID';

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
        const res = await axios.get(`http://localhost:3001/recipes/${id}`);
        return dispatch({ type:  GET_RECIPE_BY_ID, payload: res.data });
    }
}