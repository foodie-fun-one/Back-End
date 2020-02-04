const db = require('../../../data/dbConfig'); // dbconfig connects with knexfile

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

function find() {
    return db('cuisine_values');
}

function findById(id) {
    return db('cuisine_values')
    .where({ id }).first();
}

// add cuisine to the database
function add(name) {
    return db('cuisine_values')
    .insert(name);
}

function update(changes, id) {
    return db('cuisine_values')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('cuisine_values')
    .where({ id })
    .del();
}


