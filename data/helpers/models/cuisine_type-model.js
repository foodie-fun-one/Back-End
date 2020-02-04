const db = require('../../../data/dbConfig'); // dbconfig connects with knexfile

module.exports = {
    find, // finds everything
    findById, // finds by cuisine-type DB ID
    findByValue, // /api/cuisine/value/:id
    findByRestaurant, // api/cuisine/restaurant/:id
    add, // add a user_id/rest_id combo
    update, // update combo
    remove // remove the entire combo
}

// SELECT *
// FROM cuisine_type

function find() {
    return db('cuisine_type')
}

// SELECT *
// FROM cuisine_type
// WHERE id=3

function findById(id) {
    return db('cuisine_type')
    .where({ id })
    .first()
}

// SELECT *
// FROM cuisine_type as CT
// WHERE CT.cuisine_value_id=9

// function findByValue(id) {
//  return db('cuisine_type').as('CT')
//  .where('CT.cuisine_value_id', '=', {id})
//  .first()
// }

// function findByValue(id) {
//     return db.raw(`
//         SELECT *
//         FROM cuisine_type as CT
//         WHERE CT.cuisine_value_id = ${id}`
//     )
// }

function findByValue(id) {
    return db('cuisine_type')
    .where('cuisine_value_id', id)
    .first();
}

// SELECT *
// FROM cuisine_type as CT
// WHERE CT.restaurant_id = 4

function findByRestaurant(id) {
    return db('cuisine_type')
    .where('restaurant_id', id)
    .first()
}

function add(combo) {
    return db('cuisine_type')
    .insert(combo);
}

function update(changes, id) {
    return db('cuisine_type')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('cuisine_type')
    .where({ id })
    .del();
}