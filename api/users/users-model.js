const db = require('../../data/dbConfig'); // dbconfig connects with knexfile

module.exports = {
    find,
    findById,
    findByUsername,
    add,
    update,
    remove,
}

function find() {
    return db('users');
}

function findById(id) {
    return db('users')
    .where({ id }).first();
}

function findByUsername(username) {
    return db('users')
    .where({ username }).first();
}

// add user to the database
async function add(user) {
    const [id] = await db('users').insert(user);
    return findById(id)
}

function update(changes, id) {
    return db('users')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('users')
    .where({ id })
    .del();
}


