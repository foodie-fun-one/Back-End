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

async function add(body) {
    const { id } = await db('restaurants').insert(body)
    
    return findById(id);
}

function update(id, body) {
    return db('restaurants').where('id', id).update(body);
}

function remove(id) {
    return db('restaurants').where('id', id).del();
}
