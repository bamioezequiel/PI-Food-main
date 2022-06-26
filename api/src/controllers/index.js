require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { Recipe, Diet } = require('./../db.js');

const url = 'https://api.spoonacular.com/recipes';

const getApiRecipes = async (amount = 100) => {
    const apiInfo = await axios.get(`${url}/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=${amount}`);
    const apiRecipes = await apiInfo.data.results.map( (el) => {
        return { 
            id:             el.id,
            name:           el.title, 
            summary:        el.summary.replace( /(<([^>]+)>)/ig, ''), 
            healthScore:    el.healthScore, 
            dishTypes:      el.dishTypes,
            steps:          el.analyzedInstructions[0]?.steps.map( (el) => el.step ),
            image:          el.image,
            diets:          el.diets.map( (el) => el )
        };
    });
    return apiRecipes;
}

const getBDRecipes = async () => {
    let newRecipe = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    });

    return newRecipe.map( (el) => {
        return {
            ...el.dataValues,
            diets: el.diets?.map( (d) => d.name )
        }
    });
}

const getAllRecipes = async () => {
    const apiInfo = await getApiRecipes();
    const dbInfo  = await getBDRecipes();
    return apiInfo.concat(dbInfo);
}

const getRecipeById = async (id) => {
    let allInfo = await getAllRecipes();
    return await allInfo.filter( (el) => el.id == id );
}

const deleteRecipe = async (id) => {

}

const updateRecipe = async (id) => {
    
}

const postRecipe = async ({name, summary, healthScore, dishTypes, steps, image, diets}) => {
    let [recipe, row] = await Recipe.findOrCreate({
        where: {
            name,
            summary,
            healthScore,
            dishTypes,
            steps,
            image
        }
    });
    if(!row) { return [undefined, row] };

    let dietsDB = await Diet.findAll({
        where: { name: diets },
    });

    recipe.addDiet(dietsDB);
    return [recipe, row]; 
}

/* ------------------------------------------- */

const getDBDiets = async () => {
    const apiInfo = await axios.get(`${url}/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
    let apiDiets = apiInfo.data.results.map( (el) => el.diets );
    apiDiets = [...new Set(apiDiets.flat()), 'vegetarian'];

    for(let i = 0; i < apiDiets.length; i++) {
        await Diet.findOrCreate({ where: { name: apiDiets[i] } });
    }

    return await Diet.findAll();
}


module.exports = {
   getApiRecipes,
   getBDRecipes,
   getAllRecipes,
   getRecipeById,
   postRecipe,
   getDBDiets,
}