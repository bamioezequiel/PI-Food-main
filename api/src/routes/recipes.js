const { Router } = require('express');
const { Recipe } = require('./../db.js'); 
const { getAllRecipes, getRecipeById, postRecipe } = require('./../controllers/index.js');
const router = Router();

module.exports = router;

router.get('/', async (req, res) => {
    try {
        let recipes = await getAllRecipes();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(404).json( { error: error.message } );
    }
});

router.get('/', async (req, res) => {
    let { name } = req.query;
    try {
        if(!name) { throw Error('No hay parametros suficientes para hacer esta petición'); }
        let recipes = await getAllRecipes();
        const filteredRecipes = recipes.filter( (el) => el.name.toLowerCase().includes(name.toLowerCase()) );
        if(filteredRecipes.length === 0) { throw Error('No hay recetas para mostrar.')  }
        res.status(200).json(filteredRecipes);
    } catch (error) {
        res.status(404).json( { error: error.message } );
    }
});

router.get('/:idReceta', async (req, res) => {
    let { idReceta } = req.params;
    try {
        res.json(await getRecipeById(idReceta));
    } catch(error) {
        res.status(404).json( { error: error.message } );
    }
});

router.post('/', async (req, res) => {
    let { name, summary, healthScore, steps, diets } = req.body;
    try {
        if(!name || !summary) { throw Error('No hay parametros suficientes para hacer esta petición'); };
        postRecipe({ name, summary, healthScore, steps, diets })
            .then( ([recipe, row]) => {
                if(!row) { throw Error('La receta ya existe.'); }

                res.status(201).json(recipe);
            })
    } catch (error) {
        res.status(404).json( { error: error.message } );
    }
});

/* router.post('/', async (req, res) => {
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

