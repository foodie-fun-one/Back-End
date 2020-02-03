const db = require('../../../data/dbConfig'); // dbconfig connects with knexfile

module.exports = {
    find,
    findById,
    findByCuisine,
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

function findByCuisine(name) {
    return db('cuisine_values')
    .where({ name }).first();
}

// add cuisine to the database
async function add(cuisine) {
    const [id] = await db('cuisine_values').insert(cuisine);
    return findById(id)
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


