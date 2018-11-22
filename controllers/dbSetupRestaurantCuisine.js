const Grakn = require('grakn');
const queryGraknRestaurantCuisine = require('./queryGraknRestaurantCuisine.js');

async function buildGraphRestaurantCuisine() {
  const grakn = new Grakn('localhost:48555');
  const session = grakn.session('myfood');

  const answer = await queryGraknRestaurantCuisine(session);

  session.close();
  
  return answer;
}

module.exports = buildGraphRestaurantCuisine;

