const db = require('../../dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('restaurants');
}

function findById(id) {
    return db('restaurants').where('id', id);
}

function add(body) {
    const id = select(SCOPE_IDENTITY())
    return db("restaurants").insert(body, id); 
}

function update(id, body) {
    return db('restaurants').where('id', id).update(body);
}

function remove(id) {
    return db('restaurants').where('id', id).del();
}
