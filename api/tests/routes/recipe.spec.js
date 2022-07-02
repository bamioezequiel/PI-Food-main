/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { postRecipe } = require('../../src/controllers/index.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = { 
  name: 'test',
  summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et sem vitae leo sodales suscipit id non ligula. Nulla egestas quam quam, tincidunt vulputate nunc placerat id. Donec et ante et diam ',
  healthScore: 85,
  dishTypes: 'Lorem',
  steps:'1. Donec convallis egestas dolor, vel condimentum risus tempus posuere. 2. Praesent aliquet elit sit amet diam suscipit cursus. 3. Vestibulum a ante rhoncus, laoreet tortor vel, scelerisque ex.4. Nulla vel facilisis libero. Pellentesque quis mollis orci, lacinia faucibus sem. 5. Sed vitae tristique nunc. Pellentesque laoreet felis et mauris mattis vehicula. Aenean a diam eu turpis facilisis laoreet.',
  image: '',
  diets: [
      'vegan',
      'vegetarian'
  ]
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /recipes', () => {
    it('POST /recipes, crea una nueva receta y devuelve un 201', function (done) {
      agent
        .post('/recipes')
        .send(recipe)
        .expect(201, done)
    })
    it('should get 200', () =>
      agent.get('/recipes').expect(200)
    );

  });
});
