const Grakn = require('grakn');
const loadGrakn = require('./loadGrakn.js');

async function buildGraph(query_txt) {
  const grakn = new Grakn('localhost:48555');
  const session = grakn.session('myfood');

    await loadGrakn(session, query_txt);

  session.close();
}

module.exports = buildGraph;

