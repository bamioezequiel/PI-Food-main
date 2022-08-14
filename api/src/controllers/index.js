require('dotenv').config();
// const { API_KEY } = process.env;
const axios = require('axios');
const { Recipe, Diet } = require('./../db.js');

const URL = 'https://api.spoonacular.com/recipes';

const getApiRecipes = async (amount = 100) => {
    const apiInfo = await validateApiKey(amount);
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

const validateApiKey = async (amountRecipes) => {
    let API_KEY = process.env.API_KEY;
    let amountKeys = 27;
    for(let i = 1; i <= amountKeys; i++) {
        try {
            let apiInfo = await axios.get(`${URL}/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=${amountRecipes}`);
            // console.log('key actual', API_KEY);
            return apiInfo;
        } catch (error) {
            // console.log('key vencida', API_KEY)
            API_KEY = process.env[`API_KEY${i}`];
        }
    }
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

    /* 
        before: diets -> { name: 'vegan' }
        after: diets -> [ 'vegan' ]
    */
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
   let res = await Recipe.destroy({
       where: {
           id
        }
    });
    return res;
}

const updateRecipe = async (recipe) => {
    let countUpdated = await Recipe.update(recipe, {
        where: {
            id: recipe.id
        }
    });

    let recipeUpdated = await Recipe.findOne({
        where: {
          id: recipe.id
        },
        include: Diet
    });

    let dietsDB = await Diet.findAll({
        where: { name: recipe.diets },
    });
    await recipeUpdated.diets.map((d) => recipeUpdated.removeDiets(d));
    await dietsDB.map( async (d) => await recipeUpdated.addDiets(d));
    await recipeUpdated.reload();

    return countUpdated;
}

const postRecipe = async ({name, summary, healthScore, dishTypes, steps, image, diets}) => {
    let [recipe, created] = await Recipe.findOrCreate({
        where: {
            name
        },
        defaults: {
            summary,
            healthScore,
            dishTypes,
            steps,
            image
        }
    });
    if(!created) { throw Error('The recipe already exists.'); };
    // let recipe = await Recipe.create({
    //     name,
    //     summary,
    //     healthScore,
    //     dishTypes,
    //     steps,
    //     image
    // });
    let dietsDB = await Diet.findAll({
        where: { name: diets },
    });

    recipe.addDiet(dietsDB);
    return recipe; 
}

/* ------------------------------------------- */

const getDBDiets = async () => {
    const apiInfo = await validateApiKey(100);
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
   deleteRecipe,
   updateRecipe
}