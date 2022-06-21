export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';

export const getAllRecipes = () => {
    return function (dispatch) {
        return fetch('http://localhost:3001/recipes')
            .then( (res)    => res.json() )
            .then( (data)   => dispatch({ type: GET_ALL_RECIPES, payload: data }) )
            .catch( (error) => console.error(error) )
    }
}