const Grakn = require('grakn');

async function loadGrakn(session, query_txt) {

    const tx = await session.transaction(Grakn.txType.WRITE);

    const resultIterator = await tx.query(query_txt); // This will return an Iterator of ConceptMap Answer
    console.log(query_txt);
    const answer = await resultIterator.next(); // Take first ConceptMap Answer
    const person = answer.map().get('x'); // Access map in Answer with answer.map() and take Concept associated to variable x from 'match $x isa person; get;'
    console.log(person.id);
    tx.close();
}

module.exports = loadGrakn;

