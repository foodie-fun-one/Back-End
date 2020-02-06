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

 function add(id, body) {
    return db('restaurants').insert(body).where('id', id)
    
}

function update(id, body) {
    return db('restaurants').where('id', id).update(body);
}

function remove(id) {
    return db('restaurants').where('id', id).del();
}
