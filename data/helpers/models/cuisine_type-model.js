const db = require('../../../data/dbConfig'); // dbconfig connects with knexfile

module.exports = {
    find, // finds everything
    findById, // finds by cuisine-type DB ID
    findByValue, // /api/cuisine/type/:id
    findByRestaurant, // api/cuisine/restaurant/:id
    add, // add a user_id/rest_id combo
    update, // update combo
    remove // remove the entire combo
}

// SELECT *
// FROM cuisine_type

function find() {
    return db('cuisine-type')
}

// SELECT *
// FROM cuisine_type
// WHERE id=3

function findById(id) {
    return db('cuisine-type')
    .where({ id })
    .first()
}

// SELECT *
// FROM cuisine_type as CT
// WHERE CT.cuisine_value_id=9

function findByValue(id) {
 return db('cuisine-type').as('CT')
 .where('CT.cuisine_value_id', '=', id)
 .first()
}

// SELECT *
// FROM cuisine_type as CT
// WHERE CT.restaurant_id = 4

function findByRestaurant(id) {
    return db('cuisine_type').as('CT')
    .where('CT.restaurant_id', '=', id)
    .first()
}