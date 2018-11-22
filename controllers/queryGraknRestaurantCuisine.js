const Grakn = require('grakn');
const fs = require('fs');

async function queryGraknRestaurantCuisine(session) {

    var query_txt = "match $x isa cuisine; get;";

    /*
    //TODO: write the code to read a query form an external file in models folder
    fs.readFile('./models/query_rest_cuisine.gql', function read(err, data) {
        if (err) {
            console.log("ERROR");
            throw err;
        }
        query_txt = data;
    });
    */

    const tx = await session.transaction(Grakn.txType.WRITE);

    const resultIterator = await tx.query(query_txt); // This will return an Iterator of ConceptMap Answer
    const answer = await resultIterator.collect(); // Take all ConceptMap Answers as array
    const cuisines = [];
    answer.forEach(function(value){
        const cuisine = value.map().get('x'); // Access map in Answer with answer.map() and take Concept associated to variable x
        cuisines.push(cuisine);
    });
    
    tx.close();
    return cuisines;
}

module.exports = queryGraknRestaurantCuisine;

