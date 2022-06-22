import { GET_ALL_RECIPES, GET_RECIPE_BY_ID } from './../actions/index.js';

const initialState = {
    recipes: [],
    recipe: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_RECIPES:
            console.log(action.payload)
            return {
                ...state,
                recipes: action.payload    
            }
        case GET_RECIPE_BY_ID:
            return {
                ...state,
                recipe: action.payload
            }
        default:
        return ({ ...state });
    }
}

export default rootReducer;