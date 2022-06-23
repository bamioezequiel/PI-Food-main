import { GET_ALL_RECIPES, GET_RECIPE_BY_ID, GET_DIETS, FILTER_BY_DIEST } from './../actions/index.js';

const initialState = {
    recipes: [],
    filterRecipes: [],
    diest: [],
    recipe: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                filterRecipes: action.payload    
            }
        case GET_RECIPE_BY_ID:
            return {
                ...state,
                recipe: { ...action.payload[0] }
            }
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            }
        case FILTER_BY_DIEST:
            const recipes = state.filterRecipes;
            const filterRecipes = action.payload === 'all' ? recipes : recipes.filter( (el) => el.diets.includes(action.payload) );
            return {
                ...state,
                recipes: filterRecipes
            }
        default:
            return ({ ...state });
    }
}

export default rootReducer;