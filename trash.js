/* 
    Optimizar codigo

    <NavLink to='/home' className={style.back}>Back</NavLink>

.back {
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 10px;
    color: #fff;
    background-color: #ff0000;
    box-shadow: 0 2px 5px #000000;
    transition: all ease-in 120ms;
}

.back:hover {
    background-color: #df0808;
}

const getApiRecipeById = async (id) => {
    let apiRecipe = await axios.get(`${url}/${id}/information?apiKey=${API_KEY}`);
    let recipe = apiRecipe.data;
    return {
        name:           recipe.title, 
        summary:        recipe.summary.replace( /(<([^>]+)>)/ig, ''), 
        healthScore:    recipe.healthScore, 
        steps:          recipe.instructions.replace( /(<([^>]+)>)/ig, ''),
        diets:          recipe.diets.map( (el) => el )
    };
}

const getDBDiets = () => {
    return fetch(`${url}/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        .then( (res)        => res.json() )
        .then( (apiInfo)    => apiInfo.results?.map( (el) => el.diets ) )
        .then( (apiDiets)   => apiDiets = [...new Set(apiDiets.flat()), 'vegetarian'] )
        .then( (data) => {
            for(let i = 0; i < data.length; i++) {
                Diet.create({ name: data[i] }).then(()=>{return});
            }
        })
        .then( () => Diet.findAll() )
        .catch( (error) => console.error(error) )
} 

*/
