'use strict';
const request = require('supertest')
const { getAllRecipes, postRecipe } = require('./src/controllers/index.js'); 

describe('recipes', async function () {
    //create recipe
    // const postRecipe = async ({name, summary, healthScore, dishTypes, steps, image, diets})
    

	describe('query', function () {

		it('GET inicialmente responde con un array vacío', function (done) {
            request
              .get('/recipes')
              .expect('Content-Type', /json/)
              .expect(function (res) {
                console.log(res.body)
                expect(res.body).to.eql([])
              })
              .expect(200, done)
        })

	});
    describe('sin query', function () {

		xit('', function (done) {

		});

	});

});