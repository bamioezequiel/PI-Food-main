import { GET_ALL_RECIPES,
         GET_RECIPE_BY_ID,
         GET_DIETS,
         FILTER_BY_DIEST,
         FILTER_BY_ALPHABETICA, 
         SEARCH_BY_NAME} from './../actions/index.js';

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
        case FILTER_BY_ALPHABETICA:
            let filterAlpha = [];
            if(action.payload === 'all') { filterAlpha = state.recipes }
            if(action.payload === 'asc') {
                filterAlpha = state.filterRecipes.sort( (a,b) => {
                    return a.name.localeCompare(b.name);
                });
            } else {
                filterAlpha = state.filterRecipes.sort( (a,b) => {
                    return b.name.localeCompare(a.name);
                });
            }
            return {
                ...state,
                recipes: [...filterAlpha]
            }
        case SEARCH_BY_NAME:
            const searchRecipes = state.filterRecipes.filter( (el) => el.name.toLowerCase().includes(action.payload.toLowerCase()) );
            return {
                ...state,
                recipes: [...searchRecipes]       
            }
        default:
            return ({ ...state });
    }
}

export default rootReducer;