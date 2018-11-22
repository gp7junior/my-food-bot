const Grakn = require('grakn');
const queryGraknRestaurant = require('./queryGraknRestaurant.js');

async function buildGraphRestaurant() {
  const grakn = new Grakn('localhost:48555');
  const session = grakn.session('myfood');

  const answer = await queryGraknRestaurant(session);

  session.close();

  return answer;
}

module.exports = buildGraphRestaurant;

