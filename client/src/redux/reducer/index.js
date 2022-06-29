import { GET_ALL_RECIPES,
         GET_RECIPE_BY_ID,
         GET_DIETS,
         FILTER_BY_DIEST,
         ORDER_RECIPES, 
         SEARCH_BY_NAME, 
         POST_RECIPE,
         DELETE_RECIPE} from './../actions/index.js';

const initialState = {
    recipes: [],
    filterRecipes: [],
    aux: [],
    diest: [],
    recipe: {},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_RECIPE:
            return {
                ...state
            }
        case POST_RECIPE: 
            return {
                ...state,
                recipe: { ...action.payload }
            }
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                aux: JSON.parse(JSON.stringify(action.payload)),
                filterRecipes: JSON.parse(JSON.stringify(action.payload))
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
            state.aux = (action.payload === 'all') 
                                  ? state.filterRecipes 
                                  : state.filterRecipes.filter( (el) => el.diets.includes(action.payload) );
            return {
                ...state,
                recipes: state.aux
            }
        case ORDER_RECIPES:
            let filterAlpha = [];
            switch(action.payload) {
                case 'asc':
                    filterAlpha = state.aux.sort( (a,b) => a.name.localeCompare(b.name) );
                    break;
                case 'des':
                    filterAlpha = state.aux.sort( (a,b) => b.name.localeCompare(a.name) );
                    break;
                case 'ascScore':
                    filterAlpha = state.aux.sort( (a,b) => b.healthScore - a.healthScore );
                    break;
                case 'desScore':
                    filterAlpha = state.aux.sort( (a,b) => a.healthScore - b.healthScore );
                    break;
                default:
                    filterAlpha = state.filterRecipes;
                    break;
            }
            return {
                ...state,
                recipes: [...filterAlpha]
            }
        case SEARCH_BY_NAME:
            return {
                ...state,
                recipes: action.payload      
            }
        default:
            return ({ ...state });
    }
}

export default rootReducer;