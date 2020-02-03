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
async function add(name) {
   const [id] = await db('cuisine_values').insert(name)
   return findById(id);
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


