const db = require('../../data/dbConfig'); // dbconfig connects with knexfile

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
}

// add user to the database
async function add(user) {
    const [id] = await db('users').insert(user);
    return findById(id)
}

// select all users in the DB
function find() {
    return db('users').select('*');
}

// find username by username which returns everything about specific user
function findBy(username) {
    return (
        db('users')
        .where(username)
        .first()
        .select('*')
    )
}

// find username by ID which returns everything about specific user
function findById(id) {
    return (
        db('users')
        .where({id})
        .first()
        .select('*')
    )
}

// updates users information
function update(username, changes) {
    return db('users')
    .where({ username })
    .update(changes, '*')
}

function remove(username) {
    return db('users')
    .where({ username })
    .del();
}