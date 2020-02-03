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
const add = cuisine => {
    return db("cuisine_values")
      .insert(cuisine)
      .then(ids => {
        return findById(ids[0]);
      });
  };

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


