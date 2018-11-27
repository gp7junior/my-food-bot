const Grakn = require('grakn');
const queryGraknRestaurant = require('./queryGraknRestaurant.js');

async function buildGraphRestaurant(query_txt) {
  const grakn = new Grakn('localhost:48555');
  const session = grakn.session('myfood');

  const answer = await queryGraknRestaurant(session, query_txt);

  session.close();

  return answer;
}

module.exports = buildGraphRestaurant;

