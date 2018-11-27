const Grakn = require('grakn');
const fs = require('fs');
const util = require('util');

function readQuery(query_path) {
    /*
    const readFile = util.promisify(fs.readFile);

    async function getStuff() {
        return await readFile(query_path);
    }

    getStuff().then(data => {
        //console.log("data:" + data);
    })
    */
}

module.exports = readQuery;

