const getApiRecipeById = async (id) => {
    let apiRecipe = await axios.get(`${url}/${id}/information?apiKey=${API_KEY}`);
    let recipe = apiRecipe.data;
    console.log(recipe)
    return { 
        name:           recipe.title, 
        summary:        recipe.summary.replace( /(<([^>]+)>)/ig, ''), 
        healthScore:    recipe.healthScore, 
        steps:          recipe.instructions.replace( /(<([^>]+)>)/ig, ''),
        diets:          recipe.diets.map( (el) => el )
    };
}