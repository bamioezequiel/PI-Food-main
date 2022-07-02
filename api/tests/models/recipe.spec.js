const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Recipe.create({ name: 'Milanesa a la napolitana' });
      });
      it('should not create the Recipe if summary or name is not a valid option', async () => {
        try {
          await Recipe.create({name: 'Test', summary: '', dishTypes: 'lorem', steps: 'loremloremlorem', healthScore: 150, image: ''});
        } catch (error) {
          expect(error.message).toBeDefined();
        }
      });
    });
  });
});
