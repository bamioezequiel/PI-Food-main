const { Router } = require('express');
const { Recipe } = require('./../db.js'); 
const { getAllRecipes,
        getRecipeById,
        postRecipe,
        deleteRecipe, 
        updateRecipe} = require('./../controllers/index.js');
const router = Router();

module.exports = router;

router.get('/', async (req, res) => {
    let { name } = req.query;
    try {
        let recipes = await getAllRecipes();
        if(!name) { return res.status(200).json(recipes); }
        const filteredRecipes = recipes.filter( (el) => el.name.toLowerCase().includes(name.toLowerCase()) );
        if(filteredRecipes.length === 0) { return res.status(200).json('No recipes found.');  }
        return res.status(200).json(filteredRecipes);
    } catch (error) {
        return res.status(404).json( { error: error.message } );
    }
});

router.get('/:idReceta', async (req, res) => {
    let { idReceta } = req.params;
    try {
        const recipe = await getRecipeById(idReceta);
        if(!recipe) { throw Error('No recipe found.'); }
        res.json(recipe);
    } catch(error) {
        res.status(404).json( { error: error.message } );
    }
});

router.post('/', async (req, res) => {
    let { name, summary, healthScore, dishTypes, steps, image, diets } = req.body;
    try {
        if(!name || !summary) {
            throw Error('There are not enough parameters to make this request');
        };
        postRecipe({ name, summary, healthScore, dishTypes, steps, image, diets })
            .then( (recipe) => {

                res.status(201).json(`${recipe.name} was created.`);
            })
    } catch (error) {
        res.status(404).json( { error: error.message } );
    }
});

router.put('/', async (req, res) => {
    let { id, name, summary, healthScore, dishTypes, steps, image, diets } = req.body;
    try {
        if(!id || !name || !summary) {
            throw Error('There are not enough parameters to make this request');
        }
        console.log(id, diets)
        let updated = await updateRecipe({
            id, name, summary, healthScore, dishTypes, steps, image, diets
        });
        console.log(updated)
        res.json( (updated.length) ? `${updated[0]} recipes were modified` : 'No recipes changed' );
    } catch(error) {
        res.status(404).json( { error: error.message } );
    }
});

router.delete('/:id', async (req, res) => {
    let { id } = req.params;
    try {
        res.json(await deleteRecipe(id));
    } catch(error) {
        res.status(404).json( { error: error.message } );
    }
});

/* 
router.post('/', async (req, res) => {
    let { name, summary, healthScore, steps, diets } = req.body;
    try {
        if(!name || !summary) { throw Error('No hay parametros suficientes para hacer esta petición'); };
        const [ recipe, row ] = await postRecipe({ name, summary, healthScore, steps, diets })
        if(!row) { throw Error('La receta ya existe.'); }

        res.status(201).json(recipe);
    } catch (error) {
        res.status(404).json( { error: error.message } );
    }
});
*/

